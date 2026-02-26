---
title: RemixElement
---

# RemixElement

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/component/src/lib/jsx.ts#L22" target="_blank">View Source</a>

## Summary

A virtual element produced by JSX/`createElement` describing UI.  Carries a
`$rmx` brand used to distinguish it from plain objects at runtime.

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

### key

### props

### type