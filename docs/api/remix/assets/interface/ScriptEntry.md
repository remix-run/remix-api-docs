---
title: ScriptEntry
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/assets/src/lib/asset-server.ts#L298
---

# ScriptEntry

## Summary

Metadata needed to render or load a script entry module.

## Signature

```ts
interface ScriptEntry {
  href: string
  importMap: ScriptImportMap
  preloads: string[]
}

```

## Properties

### `href`

Public URL for the script entry module.

### `importMap`

Import map entries required to resolve this script graph in the browser.

### `preloads`

Public URLs that should be emitted as `modulepreload` hints for this script graph.