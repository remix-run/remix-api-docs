---
title: createHref
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/route-pattern/src/lib/href.ts#L47
---

# createHref

## Summary

Generate an href from a route pattern and the supplied params.

## Signature

```ts
function createHref<source extends string>(
  pattern: source | RoutePattern<source>,
  args: _CreateHrefArgs<ParseHrefParams<source>>,
): string;

```

## Parameters

### `pattern`

The parsed route pattern.

### `args`

Path params and optional search params.

## Returns

The generated href string.