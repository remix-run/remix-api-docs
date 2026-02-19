---
title: PresenceStyleProperties
---

# PresenceStyleProperties

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/component/src/lib/dom.ts#L17" target="_blank">View Source</a>

## Summary

All animatable CSS properties with autocomplete.
Derived from CSSStyleDeclaration for complete coverage.

## Signature

```ts
type PresenceStyleProperties = {
  [K in keyof Omit<
    CSSStyleDeclaration,
    | "length"
    | "parentRule"
    | "cssFloat"
    | "cssText"
    | "item"
    | "setProperty"
    | "removeProperty"
    | "getPropertyValue"
    | "getPropertyPriority"
    | typeof Symbol.iterator
  >]?: string | number;
};

```