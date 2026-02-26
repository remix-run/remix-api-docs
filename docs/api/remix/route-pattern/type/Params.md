---
title: Params
---

# Params

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/route-pattern/src/lib/types/params.ts#L7" target="_blank">View Source</a>

## Summary

The parameters that are parsed when a pattern matches a URL.

## Signature

```ts
type Params<T> = T extends string ? BuildParams<T> : never;

```