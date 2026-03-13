---
title: LoadModule
---

# LoadModule

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/frame.ts#L44" target="_blank">View Source</a>

## Summary

Loads a client entry module for hydration.

## Signature

```ts
type LoadModule = (
  moduleUrl: string,
  exportName: string,
) => Promise<Function> | Function;

```