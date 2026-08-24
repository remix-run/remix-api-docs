---
title: LoadModule
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/ui/src/runtime/frame.ts#L68
---

# LoadModule

## Summary

Loads a named client-entry export for hydration.

## Signature

```ts
type LoadModule = (moduleUrl: string, exportName: string) => Promise<Function> | Function

```