---
title: LoadModule
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/frame.ts#L44
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