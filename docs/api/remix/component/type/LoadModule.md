---
title: "LoadModule"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/frame.ts#L103"
---

# LoadModule

## Summary

Loads a named client-entry export for hydration.

Module specifiers from trusted document metadata are passed through unchanged. The loader
controls resolution, including import maps, CDN URLs, and development server URLs.

## Signature

```ts
type LoadModule = (moduleUrl: string, exportName: string) => Promise<Function> | Function

```