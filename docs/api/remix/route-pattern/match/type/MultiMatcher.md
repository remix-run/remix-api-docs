---
title: MultiMatcher
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