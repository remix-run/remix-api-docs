---
title: CreateHrefSearchParams
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/route-pattern/src/lib/href.ts#L23
---

# CreateHrefSearchParams

## Summary

Search parameters accepted by [`createHref`](/api/remix/route-pattern/href/function/createHref/).

## Signature

```ts
type CreateHrefSearchParams =
  | URLSearchParams
  | Record<string, string | number | null | undefined | (string | number | null | undefined)[]>

```