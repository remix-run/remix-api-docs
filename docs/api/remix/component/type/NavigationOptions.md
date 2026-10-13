---
title: "NavigationOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/navigation.ts#L70"
---

# NavigationOptions

## Summary

Options for client-side frame-aware navigation.

## Signature

```ts
type NavigationOptions = {
  history?: 'push' | 'replace'
  resetFocus?: NavigationInterceptOptions['focusReset'] | boolean
  resetScroll?: NavigationInterceptOptions['scroll'] | boolean
  src?: string
  target?: string
}

```