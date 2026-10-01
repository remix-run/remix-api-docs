---
title: "UnsafeHTML"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/unsafe-html.ts#L20"
---

# UnsafeHTML

## Summary

An opaque value that Remix may insert into an element without HTML escaping.

Create values with [`unsafeHTML`](/api/remix/component/function/unsafeHTML/). Remix does not sanitize or otherwise modify the HTML.

## Signature

```ts
type UnsafeHTML = UnsafeHTMLValue

```