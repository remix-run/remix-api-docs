---
title: MultiMatcher
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/route-pattern/src/lib/match.ts#L42
---

# MultiMatcher

## Signature

```ts
type MultiMatcher<data> = {
  ignoreCase: boolean;
  add(pattern: string | RoutePattern<string>, data: data): void;
  match(url: string | URL): Match<string, data> | null;
  matchAll(url: string | URL): Match<string, data>[];
};

```