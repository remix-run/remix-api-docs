---
title: "AssetAccessRule"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/assets/src/lib/access.ts#L18"
---

# AssetAccessRule

## Summary

Rule that allows an inspected asset file to be served.

## Signature

```ts
type AssetAccessRule =
  | { kind: 'file'; value: string }
  | { kind: 'injected'; value: string }
  | { kind: 'package'; value: string }

```