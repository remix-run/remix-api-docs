---
title: importShim
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/multiple-import-maps-polyfill/src/lib/polyfill.ts#L56
---

# importShim

## Summary

Loads a JavaScript module through the polyfill using every import map currently installed in the
document. This function does not detect native multiple import map support.

## Signature

```ts
function importShim(specifier: string, parentUrl: string): Promise<ModuleNamespace>

```

## Parameters

### `specifier`

Module specifier to load.

### `parentUrl`

URL to resolve the specifier from. (default: `document.baseURI`)

## Returns

The loaded module namespace.