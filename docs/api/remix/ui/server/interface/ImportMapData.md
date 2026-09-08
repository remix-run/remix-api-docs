---
title: ImportMapData
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/ui/src/server/stream.ts#L94
---

# ImportMapData

## Summary

Import map data accepted by the server renderer.

## Signature

```ts
interface ImportMapData {
  imports?: ImportMapImports
  integrity?: Record<string, string>
  scopes?: Record<string, ImportMapImports>
}

```

## Properties

### `imports`

Top-level module specifier mappings.

### `integrity`

Subresource integrity metadata keyed by module URL.

### `scopes`

Module specifier mappings scoped by URL.