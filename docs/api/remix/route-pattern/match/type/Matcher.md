---
title: Matcher
---

# Matcher

## Signature

```ts
type Matcher<source> = {
  match(url: string | URL): Match<source, undefined> | null;
};

```