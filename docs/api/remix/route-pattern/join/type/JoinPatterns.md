---
title: JoinPatterns
---

# JoinPatterns

## Summary

Join two pattern source strings together at the type level.

## Signature

```ts
type JoinPatterns<A, B> = _JoinPatterns<Parse<A>, Parse<B>>;

```