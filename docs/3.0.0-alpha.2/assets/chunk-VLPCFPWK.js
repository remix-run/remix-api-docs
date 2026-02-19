// ../packages/route-pattern/src/lib/route-pattern/split.ts
function split(source) {
  let result = {
    protocol: null,
    hostname: null,
    port: null,
    pathname: null,
    search: null
  };
  let questionMarkIndex = source.indexOf("?");
  if (questionMarkIndex !== -1) {
    result.search = span(questionMarkIndex + 1, source.length);
    source = source.slice(0, questionMarkIndex);
  }
  let solidusIndex = source.indexOf("://");
  if (solidusIndex === -1) {
    result.pathname = pathnameSpan(source, 0, source.length);
    return result;
  }
  let slashIndex = source.indexOf("/");
  if (slashIndex === solidusIndex + 1) {
    slashIndex = source.indexOf("/", solidusIndex + 3);
  }
  if (slashIndex === -1) {
    result.protocol = span(0, solidusIndex);
    let host2 = span(solidusIndex + 3, source.length);
    if (host2) {
      let { hostname, port } = hostSpans(source, host2);
      result.hostname = hostname;
      result.port = port;
    }
    return result;
  }
  if (slashIndex < solidusIndex) {
    result.pathname = pathnameSpan(source, 0, source.length);
    return result;
  }
  result.protocol = span(0, solidusIndex);
  let host = span(solidusIndex + 3, slashIndex);
  if (host) {
    let { hostname, port } = hostSpans(source, host);
    result.hostname = hostname;
    result.port = port;
  }
  result.pathname = pathnameSpan(source, slashIndex, source.length);
  return result;
}
function span(start, end) {
  if (start === end) return null;
  return [start, end];
}
function hostSpans(source, host) {
  let lastColonIndex = source.slice(0, host[1]).lastIndexOf(":");
  if (lastColonIndex === -1 || lastColonIndex < host[0]) return { hostname: host, port: null };
  if (source.slice(lastColonIndex + 1, host[1]).match(/^\d+$/)) {
    return { hostname: span(host[0], lastColonIndex), port: span(lastColonIndex + 1, host[1]) };
  }
  return { hostname: host, port: null };
}
function pathnameSpan(source, begin, end) {
  if (source[begin] === "/") begin += 1;
  return span(begin, end);
}

// ../packages/route-pattern/src/lib/route-pattern/parse.ts
function parseProtocol(source, span2) {
  if (!span2) return null;
  let protocol = source.slice(...span2);
  if (protocol === "" || protocol === "http" || protocol === "https" || protocol === "http(s)") {
    return protocol === "" ? null : protocol;
  }
  throw new ParseError("invalid protocol", source, span2[0]);
}
function parseHostname(source, span2) {
  if (!span2) return null;
  let part = PartPattern.parse(source, { span: span2, type: "hostname" });
  if (isNamelessWildcard(part)) return null;
  return part;
}
function isNamelessWildcard(part) {
  if (part.tokens.length !== 1) return false;
  let token = part.tokens[0];
  if (token.type !== "*") return false;
  return token.name === "*";
}
function parseSearch(source) {
  let constraints = /* @__PURE__ */ new Map();
  for (let param of source.split("&")) {
    if (param === "") continue;
    let equalIndex = param.indexOf("=");
    if (equalIndex === -1) {
      let name2 = decodeURIComponent(param);
      if (!constraints.get(name2)) {
        constraints.set(name2, null);
      }
      continue;
    }
    let name = decodeURIComponent(param.slice(0, equalIndex));
    let value = decodeURIComponent(param.slice(equalIndex + 1));
    if (value.length === 0) {
      if (!constraints.get(name)) {
        constraints.set(name, /* @__PURE__ */ new Set());
      }
      continue;
    }
    let constraint = constraints.get(name);
    constraints.set(name, constraint ? constraint.add(value) : /* @__PURE__ */ new Set([value]));
  }
  return constraints;
}
var ParseError = class extends Error {
  type;
  source;
  index;
  constructor(type, source, index) {
    let underline = " ".repeat(index) + "^";
    let message = `${type}

${source}
${underline}`;
    super(message);
    this.name = "ParseError";
    this.type = type;
    this.source = source;
    this.index = index;
  }
};

// ../packages/route-pattern/src/lib/unreachable.ts
function unreachable(value) {
  let message = value === void 0 ? "Unreachable" : `Unreachable: ${value}`;
  throw new Error(message);
}

// ../packages/route-pattern/src/lib/regexp.ts
function escape(text) {
  return text.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
}

// ../packages/route-pattern/src/lib/route-pattern/href.ts
function hrefSearch(pattern, searchParams) {
  let constraints = pattern.ast.search;
  if (constraints.size === 0 && Object.keys(searchParams).length === 0) {
    return void 0;
  }
  let urlSearchParams = new URLSearchParams();
  for (let [key, value] of Object.entries(searchParams)) {
    if (Array.isArray(value)) {
      for (let v of value) {
        if (v != null) {
          urlSearchParams.append(key, String(v));
        }
      }
    } else if (value != null) {
      urlSearchParams.append(key, String(value));
    }
  }
  let missingParams = [];
  for (let [key, constraint] of constraints) {
    if (constraint === null) {
      if (key in searchParams) continue;
      urlSearchParams.append(key, "");
    } else if (constraint.size === 0) {
      if (key in searchParams) continue;
      missingParams.push(key);
    } else {
      for (let value of constraint) {
        if (urlSearchParams.getAll(key).includes(value)) continue;
        urlSearchParams.append(key, value);
      }
    }
  }
  if (missingParams.length > 0) {
    throw new HrefError({
      type: "missing-search-params",
      pattern,
      missingParams,
      searchParams
    });
  }
  let result = urlSearchParams.toString();
  return result || void 0;
}
var HrefError = class _HrefError extends Error {
  details;
  constructor(details) {
    let message = _HrefError.message(details);
    super(message);
    this.name = "HrefError";
    this.details = details;
  }
  static message(details) {
    let pattern = details.pattern.toString();
    if (details.type === "missing-hostname") {
      return `pattern requires hostname

Pattern: ${pattern}`;
    }
    if (details.type === "nameless-wildcard") {
      return `pattern contains nameless wildcard

Pattern: ${pattern}`;
    }
    if (details.type === "missing-search-params") {
      let params = details.missingParams.map((p) => `'${p}'`).join(", ");
      let searchParamsStr = JSON.stringify(details.searchParams);
      return `missing required search param(s): ${params}

Pattern: ${pattern}
Search params: ${searchParamsStr}`;
    }
    if (details.type === "missing-params") {
      let params = details.missingParams.map((p) => `'${p}'`).join(", ");
      return `missing param(s): ${params}

Pattern: ${pattern}
Params: ${JSON.stringify(details.params)}`;
    }
    unreachable(details);
  }
};

// ../packages/route-pattern/src/lib/route-pattern/part-pattern.ts
var IDENTIFIER_RE = /^[a-zA-Z_$][a-zA-Z_$0-9]*/;
var PartPattern = class _PartPattern {
  tokens;
  optionals;
  type;
  #regexp;
  constructor(args, options) {
    this.tokens = args.tokens;
    this.optionals = args.optionals;
    this.type = options.type;
  }
  get params() {
    let result = [];
    for (let token of this.tokens) {
      if (token.type === ":" || token.type === "*") {
        result.push(token);
      }
    }
    return result;
  }
  get separator() {
    return separatorForType(this.type);
  }
  static parse(source, options) {
    let span2 = options.span ?? [0, source.length];
    let separator = separatorForType(options.type);
    let tokens = [];
    let optionals = /* @__PURE__ */ new Map();
    let appendText = (text) => {
      let currentToken = tokens.at(-1);
      if (currentToken?.type === "text") {
        currentToken.text += text;
      } else {
        tokens.push({ type: "text", text });
      }
    };
    let i = span2[0];
    let optionalStack = [];
    while (i < span2[1]) {
      let char = source[i];
      if (char === "(") {
        optionalStack.push(tokens.length);
        tokens.push({ type: char });
        i += 1;
        continue;
      }
      if (char === ")") {
        let begin = optionalStack.pop();
        if (begin === void 0) {
          throw new ParseError("unmatched )", source, i);
        }
        optionals.set(begin, tokens.length);
        tokens.push({ type: char });
        i += 1;
        continue;
      }
      if (char === ":") {
        i += 1;
        let name = IDENTIFIER_RE.exec(source.slice(i, span2[1]))?.[0];
        if (!name) {
          throw new ParseError("missing variable name", source, i - 1);
        }
        tokens.push({ type: ":", name });
        i += name.length;
        continue;
      }
      if (char === "*") {
        i += 1;
        let name = IDENTIFIER_RE.exec(source.slice(i, span2[1]))?.[0];
        tokens.push({ type: "*", name: name ?? "*" });
        i += name?.length ?? 0;
        continue;
      }
      if (separator && char === separator) {
        tokens.push({ type: "separator" });
        i += 1;
        continue;
      }
      if (char === "\\") {
        if (i + 1 === span2[1]) {
          throw new ParseError("dangling escape", source, i);
        }
        let text = source.slice(i, i + 2);
        appendText(text);
        i += text.length;
        continue;
      }
      appendText(char);
      i += 1;
    }
    if (optionalStack.length > 0) {
      throw new ParseError("unmatched (", source, optionalStack.at(-1));
    }
    return new _PartPattern({ tokens, optionals }, { type: options.type });
  }
  get source() {
    let result = "";
    for (let token of this.tokens) {
      if (token.type === "(" || token.type === ")") {
        result += token.type;
        continue;
      }
      if (token.type === "text") {
        result += token.text;
        continue;
      }
      if (token.type === ":" || token.type === "*") {
        let name = token.name === "*" ? "" : token.name;
        result += `${token.type}${name}`;
        continue;
      }
      if (token.type === "separator") {
        result += this.separator;
        continue;
      }
      unreachable(token.type);
    }
    return result;
  }
  /**
   * Generate a partial href from a part pattern and params.
   *
   * @param pattern The route pattern containing the part pattern.
   * @param params The parameters to substitute into the pattern.
   * @returns The partial href for the given params
   */
  href(pattern, params) {
    let missingParams = [];
    let stack = [{ href: "" }];
    let i = 0;
    while (i < this.tokens.length) {
      let token = this.tokens[i];
      if (token.type === "text") {
        stack[stack.length - 1].href += token.text;
        i += 1;
        continue;
      }
      if (token.type === "separator") {
        stack[stack.length - 1].href += this.separator;
        i += 1;
        continue;
      }
      if (token.type === "(") {
        stack.push({ begin: i, href: "" });
        i += 1;
        continue;
      }
      if (token.type === ")") {
        let frame = stack.pop();
        stack[stack.length - 1].href += frame.href;
        i += 1;
        continue;
      }
      if (token.type === ":" || token.type === "*") {
        let value = params[token.name];
        if (value === void 0) {
          if (stack.length <= 1) {
            if (token.name === "*") {
              throw new HrefError({
                type: "nameless-wildcard",
                pattern
              });
            }
            missingParams.push(token.name);
          }
          let frame = stack.pop();
          i = this.optionals.get(frame.begin) + 1;
          continue;
        }
        stack[stack.length - 1].href += typeof value === "string" ? value : String(value);
        i += 1;
        continue;
      }
      unreachable(token.type);
    }
    if (missingParams.length > 0) {
      throw new HrefError({
        type: "missing-params",
        pattern,
        partPattern: this,
        missingParams,
        params
      });
    }
    if (stack.length !== 1) unreachable();
    return stack[0].href;
  }
  match(part, options) {
    let ignoreCase = options?.ignoreCase ?? false;
    if (this.#regexp === void 0) {
      this.#regexp = this.#toRegExp();
    }
    let regexp = ignoreCase ? this.#regexp.caseInsensitive : this.#regexp.caseSensitive;
    let reMatch = regexp.exec(part);
    if (reMatch === null) return null;
    let match = [];
    let params = this.params;
    for (let i = 0; i < params.length; i++) {
      let param = params[i];
      let captureIndex = i + 1;
      let span2 = reMatch.indices?.[captureIndex];
      if (span2 === void 0) continue;
      match.push({
        type: param.type,
        name: param.name,
        begin: span2[0],
        end: span2[1],
        value: reMatch[captureIndex]
      });
    }
    return match;
  }
  #toRegExp() {
    if (this.#regexp !== void 0) return this.#regexp;
    let result = "";
    for (let token of this.tokens) {
      if (token.type === "text") {
        result += escape(token.text);
        continue;
      }
      if (token.type === ":") {
        result += this.separator ? `([^${this.separator}]+?)` : `(.+?)`;
        continue;
      }
      if (token.type === "*") {
        result += `(.*)`;
        continue;
      }
      if (token.type === "(") {
        result += "(?:";
        continue;
      }
      if (token.type === ")") {
        result += ")?";
        continue;
      }
      if (token.type === "separator") {
        result += escape(this.separator ?? "");
        continue;
      }
      unreachable(token.type);
    }
    let source = `^${result}$`;
    this.#regexp = {
      caseSensitive: new RegExp(source, "d"),
      caseInsensitive: new RegExp(source, "di")
    };
    return this.#regexp;
  }
};
function separatorForType(type) {
  if (type === "hostname") return ".";
  return "/";
}

// ../packages/route-pattern/src/lib/route-pattern/serialize.ts
function serializeSearch(constraints) {
  if (constraints.size === 0) {
    return void 0;
  }
  let parts = [];
  for (let [key, constraint] of constraints) {
    if (constraint === null) {
      parts.push(encodeURIComponent(key));
    } else if (constraint.size === 0) {
      parts.push(`${encodeURIComponent(key)}=`);
    } else {
      for (let value of constraint) {
        parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
  }
  let result = parts.join("&");
  return result || void 0;
}

// ../packages/route-pattern/src/lib/route-pattern/join.ts
function joinPathname(a, b) {
  if (a.tokens.length === 0) return b;
  if (b.tokens.length === 0) return a;
  let tokens = [];
  let aLastNonOptionalIndex = a.tokens.findLastIndex(
    (token) => token.type !== "(" && token.type !== ")"
  );
  let aLastNonOptional = a.tokens[aLastNonOptionalIndex];
  let aHasTrailingSeparator = aLastNonOptional?.type === "separator";
  a.tokens.forEach((token, index) => {
    if (index === aLastNonOptionalIndex && token.type === "separator") {
      return;
    }
    tokens.push(token);
  });
  let bFirstNonOptional = b.tokens.find((token) => token.type !== "(" && token.type !== ")");
  let needsSeparator = bFirstNonOptional === void 0 || bFirstNonOptional.type !== "separator";
  if (needsSeparator) {
    tokens.push({ type: "separator" });
  }
  let tokenOffset = tokens.length;
  b.tokens.forEach((token) => {
    tokens.push(token);
  });
  let optionals = /* @__PURE__ */ new Map();
  for (let [begin, end] of a.optionals) {
    if (aHasTrailingSeparator) {
      if (begin > aLastNonOptionalIndex) begin -= 1;
      if (end > aLastNonOptionalIndex) end -= 1;
    }
    optionals.set(begin, end);
  }
  for (let [begin, end] of b.optionals) {
    optionals.set(tokenOffset + begin, tokenOffset + end);
  }
  return new PartPattern({ tokens, optionals }, { type: "pathname" });
}
function joinSearch(a, b) {
  let result = /* @__PURE__ */ new Map();
  for (let [name, constraint] of a) {
    result.set(name, constraint === null ? null : new Set(constraint));
  }
  for (let [name, constraint] of b) {
    let current = result.get(name);
    if (current === null || current === void 0) {
      result.set(name, constraint === null ? null : new Set(constraint));
      continue;
    }
    if (constraint !== null) {
      for (let value of constraint) {
        current.add(value);
      }
    }
  }
  return result;
}

// ../packages/route-pattern/src/lib/route-pattern/match.ts
function matchSearch(params, constraints) {
  for (let [name, constraint] of constraints) {
    let hasParam = params.has(name);
    let values = params.getAll(name);
    if (constraint === null) {
      if (!hasParam) return false;
      continue;
    }
    if (constraint.size === 0) {
      if (values.every((value) => value === "")) return false;
      continue;
    }
    for (let value of constraint) {
      if (!values.includes(value)) return false;
    }
  }
  return true;
}

// ../packages/route-pattern/src/lib/route-pattern.ts
var RoutePattern = class _RoutePattern {
  ast;
  // The `join()` method bypasses the constructor and creates a new instance directly
  // using `Object.create()`. This means that the constructor will only run for instances
  // that are instantiated directly with a source string, not for all instances of `RoutePattern`.
  // This also means that we cannot use JavaScript features like `#private` fields/methods and
  // class field initializers that rely on the constructor being run.
  constructor(source) {
    let spans = split(source);
    this.ast = {
      protocol: parseProtocol(source, spans.protocol),
      hostname: parseHostname(source, spans.hostname),
      port: spans.port ? source.slice(...spans.port) : null,
      pathname: spans.pathname ? PartPattern.parse(source, { span: spans.pathname, type: "pathname" }) : PartPattern.parse("", { span: [0, 0], type: "pathname" }),
      search: spans.search ? parseSearch(source.slice(...spans.search)) : /* @__PURE__ */ new Map()
    };
  }
  // eslint-disable-next-line no-restricted-syntax
  get hasOrigin() {
    return this.ast.protocol !== null || this.ast.hostname !== null || this.ast.port !== null;
  }
  get protocol() {
    return this.ast.protocol ?? "";
  }
  get hostname() {
    return this.ast.hostname?.source ?? "";
  }
  get port() {
    return this.ast.port ?? "";
  }
  get pathname() {
    return this.ast.pathname.source;
  }
  get search() {
    return serializeSearch(this.ast.search) ?? "";
  }
  get source() {
    let result = "";
    if (this.hasOrigin) {
      let protocol = this.protocol;
      let hostname = this.hostname;
      let port = this.port === "" ? "" : `:${this.port}`;
      result += `${protocol}://${hostname}${port}`;
    }
    result += "/" + this.pathname;
    let search = this.search;
    if (search) result += `?${search}`;
    return result;
  }
  toString() {
    return this.source;
  }
  join(other) {
    other = typeof other === "string" ? new _RoutePattern(other) : other;
    return Object.create(_RoutePattern.prototype, {
      ast: {
        enumerable: true,
        value: {
          protocol: other.ast.protocol ?? this.ast.protocol,
          hostname: other.ast.hostname ?? this.ast.hostname,
          port: other.ast.port ?? this.ast.port,
          pathname: joinPathname(this.ast.pathname, other.ast.pathname),
          search: joinSearch(this.ast.search, other.ast.search)
        }
      }
    });
  }
  href(...args) {
    let [params, searchParams] = args;
    params ??= {};
    searchParams ??= {};
    let result = "";
    if (this.hasOrigin) {
      let protocol = this.ast.protocol === null || this.ast.protocol === "http(s)" ? "https" : this.ast.protocol;
      if (this.ast.hostname === null) {
        throw new HrefError({
          type: "missing-hostname",
          pattern: this
        });
      }
      let hostname = this.ast.hostname.href(this, params);
      let port = this.ast.port === null ? "" : `:${this.ast.port}`;
      result += `${protocol}://${hostname}${port}`;
    }
    let pathname = this.ast.pathname.href(this, params);
    result += "/" + pathname;
    let search = hrefSearch(this, searchParams);
    if (search) result += `?${search}`;
    return result;
  }
  /**
   * Match a URL against this pattern.
   *
   * @param url The URL to match
   * @param options Match options
   * @param options.ignoreCase When `true`, pathname matching is case-insensitive. Defaults to `false`. Hostname is always case-insensitive; search remains case-sensitive.
   * @returns The match result, or `null` if no match
   */
  match(url, options) {
    url = typeof url === "string" ? new URL(url) : url;
    let hostname = null;
    if (this.hasOrigin) {
      if (this.ast.protocol === "http(s)") {
        if (url.protocol !== "http:" && url.protocol !== "https:") return null;
      } else if (this.ast.protocol !== null) {
        let expectedProtocol = `${this.ast.protocol}:`;
        if (url.protocol !== expectedProtocol) return null;
      }
      if (this.ast.hostname !== null) {
        hostname = this.ast.hostname.match(url.hostname, { ignoreCase: true });
        if (hostname === null) return null;
      }
      if (this.ast.port === null && url.port !== "") return null;
      if (this.ast.port !== null && url.port !== this.ast.port) return null;
    }
    if (this.ast.hostname === null) {
      hostname = [{ type: "*", name: "*", begin: 0, end: url.hostname.length, value: url.hostname }];
    }
    let pathname = this.ast.pathname.match(url.pathname.slice(1), options);
    if (pathname === null) return null;
    if (!matchSearch(url.searchParams, this.ast.search)) return null;
    let params = {};
    this.ast.hostname?.params.forEach((param) => {
      if (param.name === "*") return;
      params[param.name] = void 0;
    });
    hostname?.forEach((param) => {
      if (param.name === "*") return;
      params[param.name] = param.value;
    });
    this.ast.pathname.params.forEach((param) => {
      if (param.name === "*") return;
      params[param.name] = void 0;
    });
    pathname.forEach((param) => {
      if (param.name === "*") return;
      params[param.name] = param.value;
    });
    return {
      pattern: this,
      url,
      params,
      paramsMeta: { hostname: hostname ?? [], pathname }
    };
  }
  test(url) {
    return this.match(url) !== null;
  }
};

// ../packages/fetch-router/src/lib/route-map.ts
var Route = class {
  /**
   * The HTTP method this route matches.
   */
  method;
  /**
   * The pattern this route matches.
   */
  pattern;
  /**
   * @param method The HTTP method this route matches
   * @param pattern The pattern this route matches
   */
  constructor(method, pattern) {
    this.method = method;
    this.pattern = typeof pattern === "string" ? new RoutePattern(pattern) : pattern;
  }
  /**
   * Build a URL href for this route using the given parameters.
   *
   * @param args The parameters to use for building the href
   * @returns The built URL href
   */
  href(...args) {
    return this.pattern.href(...args);
  }
  /**
   * Match a URL against this route's pattern.
   *
   * @param url The URL to match
   * @returns The match result, or `null` if the URL doesn't match
   */
  match(url) {
    return this.pattern.match(url);
  }
};
function createRoutes(baseOrDefs, defs) {
  return typeof baseOrDefs === "string" || baseOrDefs instanceof RoutePattern ? buildRouteMap(
    typeof baseOrDefs === "string" ? new RoutePattern(baseOrDefs) : baseOrDefs,
    defs
  ) : buildRouteMap(new RoutePattern("/"), baseOrDefs);
}
function buildRouteMap(base, defs) {
  let routes2 = {};
  for (let key in defs) {
    let def = defs[key];
    if (def instanceof Route) {
      routes2[key] = new Route(def.method, base.join(def.pattern));
    } else if (typeof def === "string" || def instanceof RoutePattern) {
      routes2[key] = new Route("ANY", base.join(def));
    } else if (typeof def === "object" && def != null && "pattern" in def) {
      routes2[key] = new Route(def.method ?? "ANY", base.join(def.pattern));
    } else {
      routes2[key] = buildRouteMap(base, def);
    }
  }
  return routes2;
}

// src/server/routes.ts
var routes = createRoutes({
  assets: "/(:version/)assets/*asset",
  docs: "/(:version/)api/*slug",
  home: "/(:version/)",
  fragment: "/(:version/)fragment/(*slug)",
  markdown: "/(:version/)api/*slug.md"
});

export {
  routes
};
