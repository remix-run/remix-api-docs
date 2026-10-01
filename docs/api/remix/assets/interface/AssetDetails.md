---
title: "AssetDetails"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/assets/src/lib/inspection.ts#L30"
---

# AssetDetails

## Summary

Diagnostic information about a configured asset URL or file path.

## Signature

```ts
interface AssetDetails {
  access?: AssetAccessDetails
  filePath?: string
  fileRoot?: string
  status: AssetStatus
  type?: AssetKind
  url?: string
  urlRoot?: string
}

```

## Properties

### `access`

Access-control decision and the rules responsible for it.

### `filePath`

Absolute mapped file path.

### `fileRoot`

Configured filesystem mount root that matched the asset.

### `status`

Browser-reachability result.

### `type`

How the asset server handles the file.

### `url`

Stable public URL pathname for the asset.

### `urlRoot`

Public mount root that matched the asset.