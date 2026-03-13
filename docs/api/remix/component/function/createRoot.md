---
title: createRoot
---

# createRoot

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/vdom.ts#L172" target="_blank">View Source</a>

## Summary

Creates a virtual root for a host container element.

## Signature

```ts
function createRoot(
  container: HTMLElement,
  options: VirtualRootOptions,
): VirtualRoot;

```

## Params

### container

Host element to render into.

### options

Root configuration.

## Returns

A virtual root controller.