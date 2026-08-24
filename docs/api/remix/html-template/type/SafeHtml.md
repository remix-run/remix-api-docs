---
title: SafeHtml
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/html-template/src/lib/safe-html.ts#L7
---

# SafeHtml

## Summary

A string that is safe to render as HTML without escaping.

## Signature

```ts
type SafeHtml = String & { [kSafeHtml]: true }

```