---
title: HostProps
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.3/packages/ui/src/runtime/dom.ts#L31
---

# HostProps

## Summary

Shared host-element props accepted by all built-in DOM element types.

## Signature

```ts
interface HostProps<eventTarget> {
  children?: RemixNode
  innerHTML?: UnsafeHTMLValue
  key?: any
  mix?: MixInput<eventTarget>
}

```

## Properties

### `children`

Child nodes to render inside the element.

### `innerHTML`

Raw HTML to insert into the element. Create this value with `unsafeHTML()`.

When provided, children are ignored. Remix does not sanitize or otherwise modify the HTML.

### `key`

The reconciliation key for the element.

### `mix`

Mixins to apply to the element.