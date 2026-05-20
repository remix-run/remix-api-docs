---
title: JoinPatterns
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/route-pattern/src/lib/types/join.ts#L5
---

# JoinPatterns

## Summary

Join two pattern source strings together at the type level.

## Signature

```ts
type JoinPatterns<A, B> = _JoinPatterns<Parse<A>, Parse<B>>;

```