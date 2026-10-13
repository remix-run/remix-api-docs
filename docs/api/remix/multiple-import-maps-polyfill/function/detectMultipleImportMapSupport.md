---
title: "detectMultipleImportMapSupport"
source: "https://github.com/remix-run/remix/blob/main/packages/multiple-import-maps-polyfill/src/lib/polyfill.ts#L29"
---

# detectMultipleImportMapSupport

## Summary

Detects whether the current document can install multiple import maps.

Returns `true` only when an isolated feature test verifies support. If the test cannot run or
complete under the document's Content Security Policy, this returns `false`. When the polyfill
is required, its runtime begins loading in the background.

## Signature

```ts
function detectMultipleImportMapSupport(): Promise<boolean>

```

## Returns

Whether multiple import map support was verified.