---
title: ComponentsHmrTransformResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/ui-hmr/src/lib/transform.ts#L12
---

# ComponentsHmrTransformResult

## Summary

Result of analyzing and optionally rewriting a Remix UI component module for HMR.

## Signature

```ts
interface ComponentsHmrTransformResult {
  code: string
  componentNames: string[]
  map: string | null
  transformed: boolean
}

```

## Properties

### `code`

Rewritten source, or the input source unchanged when `transformed` is `false`.

### `componentNames`

HMR-compatible component and client-entry export names found in the module.

### `map`

Source map JSON when requested and transformed, otherwise `null`.

### `transformed`

Whether the module formed a safe HMR boundary and `code` was rewritten.