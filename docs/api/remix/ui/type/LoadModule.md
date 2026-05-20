---
title: LoadModule
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/ui/src/runtime/frame.ts#L59
---

# LoadModule

## Summary

Loads a named client-entry export for hydration.

## Signature

```ts
type LoadModule = (
  moduleUrl: string,
  exportName: string,
) => Promise<Function> | Function;

```