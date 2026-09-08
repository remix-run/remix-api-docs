---
title: preloadShim
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/multiple-import-maps-polyfill/src/lib/polyfill.ts#L74
---

# preloadShim

## Summary

Fetches one or more JavaScript modules through the polyfill for a later polyfilled import. This
function does not use native module preloads.

Preload failures are ignored. A later import reports the failure if the module is required.

## Signature

```ts
function preloadShim(specifiers: string | readonly string[], parentUrl: string): Promise<void>

```

## Parameters

### `specifiers`

Module specifier or specifiers to preload.

### `parentUrl`

URL to resolve the specifiers from. (default: `document.baseURI`)

## Returns

A promise that settles after all module fetches have completed.