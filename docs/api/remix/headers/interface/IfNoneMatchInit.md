---
title: IfNoneMatchInit
---

# IfNoneMatchInit

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/headers/src/lib/if-none-match.ts#L7" target="_blank">View Source</a>

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