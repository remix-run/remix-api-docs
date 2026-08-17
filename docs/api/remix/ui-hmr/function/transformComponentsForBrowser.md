---
title: transformComponentsForBrowser
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/ui-hmr/src/lib/transform.ts#L121
---

# transformComponentsForBrowser

## Summary

Rewrites a browser Remix UI module to preserve compatible component instances across HMR updates.

The transform instruments supported component and client-entry exports, registers their latest
implementations with the browser runtime, and injects an `import.meta.hot` accept boundary. If
parsing fails, no supported exports are found, or the module cannot be updated safely as a whole,
the source is returned unchanged with `transformed: false`.

## Signature

```ts
function transformComponentsForBrowser(
  source: string,
  options: BrowserComponentsHmrTransformOptions,
): ComponentsHmrTransformResult

```

## Parameters

### `source`

Component module source code.

### `options`

Browser transform options.

## Returns

Rewritten source, discovered component names, and an optional source map.