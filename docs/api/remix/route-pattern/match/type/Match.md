---
title: Match
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/route-pattern/src/lib/match/types.ts#L19
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