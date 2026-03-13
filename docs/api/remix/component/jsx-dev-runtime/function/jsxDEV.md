---
title: jsxDEV
---

# jsxDEV

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/jsx.ts#L94" target="_blank">View Source</a>

## Summary

Creates a Remix virtual element from a component function.

## Signature

```ts
function jsx(type: string, props: ElementProps, key: string): RemixElement;

function jsx(type: Function, props: ElementProps, key: string): RemixElement;

```

## Params

### type

Component function.

### props

Element props.

### key

Optional reconciliation key.

## Returns

A Remix virtual element.