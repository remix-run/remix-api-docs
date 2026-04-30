---
title: RenderResult
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/render.ts#L18
---

# RenderResult

## Summary

Result returned by render.

## Signature

```ts
interface RenderResult {
  $: (selector: string) => HTMLElement | null;
  $$: (selector: string) => NodeListOf<HTMLElement>;
  act: (fn: () => unknown) => Promise<void>;
  cleanup: () => void;
  container: HTMLElement;
  root: VirtualRoot;
}

```

## Properties

### $

Shorthand for `container.querySelector<HTMLElement>(selector)`.

### $$

Shorthand for `container.querySelectorAll<HTMLElement>(selector)`.

### act

Runs `fn` and then flushes any pending component updates so the DOM reflects them
before the next assertion.

### cleanup

Disposes the root and removes the container from the DOM. Pass to `t.after()` for
automatic cleanup at the end of a test.

### container

The element the component is mounted into.

### root

The [`VirtualRoot`](/api/remix/ui/type/VirtualRoot/) the component is rendered in. Use it to access the
underlying scheduler or dispatch lifecycle events.