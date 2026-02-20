---
title: SafeHtml
---

# SafeHtml

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/html-template/src/lib/safe-html.ts#L7" target="_blank">View Source</a>

## Summary

A string that is safe to render as HTML without escaping.

## Signature

```ts
type SafeHtml = String & { [kSafeHtml]: true };

```