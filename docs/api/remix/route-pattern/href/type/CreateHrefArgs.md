---
title: CreateHrefArgs
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/href.ts#L8
---

# CreateHrefArgs

## Summary

Tuple of arguments accepted by `createHref` for a given pattern source.

## Signature

```ts
type CreateHrefArgs<source> =
  ParseHrefParams<source> extends infer params
    ? [params] extends [never]
      ? never
      : _CreateHrefArgs<params>
    : never;

```