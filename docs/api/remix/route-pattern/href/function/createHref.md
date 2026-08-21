---
title: createHref
source: https://github.com/remix-run/remix/blob/main/packages/route-pattern/src/lib/href.ts#L66
---

# createHref

## Summary

Generate an href from a route pattern and the supplied params.

## Signature

```ts
function createHref<source extends string>(
  pattern: source | RoutePattern<source>,
  args: CreateHrefArgs<source>,
): string

```

## Parameters

### `pattern`

The parsed route pattern.

### `args`

Path params and href options.

## Returns

The generated href string.