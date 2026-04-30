---
title: IfNoneMatchInit
source: https://github.com/remix-run/remix/blob/main/packages/headers/src/lib/if-none-match.ts#L7
---

# IfNoneMatchInit

## Summary

Initializer for an `If-None-Match` header value.

## Signature

```ts
interface IfNoneMatchInit {
  tags: string[];
}

```

## Properties

### tags

The entity tags to compare against the current entity.