---
title: LoadModule
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/frame.ts#L45
---

# LoadModule

## Summary

Loads a client entry module for hydration.

## Signature

```ts
type LoadModule = (
  moduleUrl: string,
  exportName: string,
) => Promise<Function> | Function;

```