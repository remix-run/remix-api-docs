---
title: IfNoneMatchInit
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/headers/src/lib/if-none-match.ts#L7
---

# IfNoneMatchInit

## Summary

Initializer for an `If-None-Match` header value.

## Signature

```ts
interface IfNoneMatchInit {
  tags: string[]
}

```

## Properties

### `tags`

The entity tags to compare against the current entity.