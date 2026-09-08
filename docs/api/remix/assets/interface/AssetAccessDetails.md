---
title: AssetAccessDetails
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/assets/src/lib/access.ts#L8
---

# AssetAccessDetails

## Summary

Access-policy result for an inspected asset file.

## Signature

```ts
interface AssetAccessDetails {
  allowed: boolean
  allowedBy?: AssetAccessRule
  deniedBy?: string
}

```

## Properties

### `allowed`

Whether the asset server may serve the file.

### `allowedBy`

The first configured rule that allowed the file, when one matched.

### `deniedBy`

The first matching `denyFiles` pattern, when access was denied.