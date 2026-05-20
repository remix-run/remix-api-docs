---
title: LoadModule
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