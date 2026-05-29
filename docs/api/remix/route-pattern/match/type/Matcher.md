---
title: Matcher
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/route-pattern/src/lib/match.ts#L16
---

# Matcher

## Signature

```ts
type Matcher<source> = {
  match(url: string | URL): Match<source, undefined> | null;
};

```