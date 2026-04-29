---
title: LoadModule
---

# LoadModule

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/runtime/frame.ts#L44" target="_blank">View Source</a>

## Summary

Loads a client entry module for hydration.

## Signature

```ts
type LoadModule = (
  moduleUrl: string,
  exportName: string,
) => Promise<Function> | Function;

```