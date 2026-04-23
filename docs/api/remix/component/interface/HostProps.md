---
title: HostProps
---

# HostProps

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/component/src/lib/dom.ts#L29" target="_blank">View Source</a>

## Summary

Shared host-element props accepted by all built-in DOM element types.

## Signature

```ts
interface HostProps<eventTarget> {
  children?: RemixNode;
  innerHTML?: string;
  key?: any;
  mix?: MixInput<eventTarget>;
}

```

## Properties

### children

Child nodes to render inside the element.

### innerHTML

Set the innerHTML of the element directly.
When provided, children are ignored.
Use with caution as this can expose XSS vulnerabilities if the content is not sanitized.

### key

The reconciliation key for the element.

### mix

Mixins to apply to the element.