---
title: importModule
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/multiple-import-maps-polyfill/src/lib/polyfill.ts#L40
---

# importModule

## Summary

Loads a JavaScript module, using the multiple import map polyfill when required.

## Signature

```ts
function importModule(specifier: string, parentUrl: string): Promise<ModuleNamespace>

```

## Parameters

### `specifier`

Module specifier to load.

### `parentUrl`

URL to resolve the specifier from. (default: `document.baseURI`)

## Returns

The loaded module namespace.