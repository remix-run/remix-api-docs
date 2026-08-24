---
title: JoinPatterns
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/route-pattern/src/lib/types/join.ts#L5
---

# JoinPatterns

## Summary

Join two pattern source strings together at the type level.

## Signature

```ts
type JoinPatterns<A, B> = string extends A | B ? string : _JoinPatterns<Parse<A>, Parse<B>>

```