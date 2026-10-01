---
title: "unsafeHTML"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/unsafe-html.ts#L32"
---

# unsafeHTML

## Summary

Explicitly allows a string to be inserted into an element as raw HTML.

This function does not sanitize or otherwise modify the HTML. Only pass trusted content or
content that your application has already sanitized.

## Signature

```ts
function unsafeHTML(value: string): UnsafeHTMLValue

```

## Parameters

### `value`

The raw HTML string to allow.

## Returns

An opaque value accepted by raw-HTML props such as `innerHTML` and iframe
`srcDoc`/`srcdoc`.