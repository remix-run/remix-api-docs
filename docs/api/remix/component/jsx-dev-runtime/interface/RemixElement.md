---
title: RemixElement
---

# RemixElement

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/component/src/lib/jsx.ts#L22" target="_blank">View Source</a>

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

### $rmx

Internal brand used to distinguish Remix elements at runtime.

### key

Optional reconciliation key.

### props

Normalized props for the element.

### type

Host tag or component function for the element.