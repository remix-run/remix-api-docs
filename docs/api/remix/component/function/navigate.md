---
title: "navigate"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/navigation.ts#L94"
---

# navigate

## Summary

Performs a Navigation API transition understood by Remix frame runtime state.
Invalid or cross-origin sources fall back to document navigation.

## Signature

```ts
function navigate(href: string, options: NavigationOptions): Promise<void>

```

## Parameters

### `href`

Destination URL.

### `options`

Navigation options.

## Returns

A promise that settles when the Navigation API transition finishes.