---
title: RemixElement
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/jsx.ts#L23
---

# RemixElement

## Summary

A virtual element produced by JSX or import('./create-element.ts').createElement
describing UI. Carries a `$rmx` brand used to distinguish it from plain objects at runtime.

## Signature

```ts
interface RemixElement {
  $rmx: true;
  key?: any;
  props: ElementProps;
  type: ElementType;
}

```

## Properties

### `$rmx`

Internal brand used to distinguish Remix elements at runtime.

### `key`

Optional reconciliation key.

### `props`

Normalized props for the element.

### `type`

Host tag or component function for the element.