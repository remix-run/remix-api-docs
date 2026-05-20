---
title: Match
---

# Match

## Signature

```ts
type Match<source, data> = {
  data: data;
  params: MatchParams<source>;
  paramsMeta: {
    hostname: ReadonlyArray<MatchParamMeta>;
    pathname: ReadonlyArray<MatchParamMeta>;
  };
  pattern: RoutePattern<source>;
  url: URL;
};

```