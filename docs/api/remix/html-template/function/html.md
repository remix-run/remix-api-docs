---
title: html
source: https://github.com/remix-run/remix/blob/main/packages/html-template/src/lib/safe-html.ts#L99
---

# html

## Summary

Tagged template helper for creating [`SafeHtml`](/api/remix/html-template/type/SafeHtml/) values.

```ts
let unsafe = '<script>alert(1)</script>'
let safe = html`<h1>${unsafe}</h1>`
assert.equal(String(safe), '<h1>&lt;script&gt;alert(1)&lt;/script&gt;</h1>')
```

To interpolate raw HTML without escaping, use `html.raw` as a template tag.
This has the same semantics as `String.raw` but for HTML snippets that have
already been escaped or are from trusted sources.

```ts
let icon = '<b>OK</b>'
let safe = html.raw`<div>${icon}</div>`
assert.equal(String(safe), '<div><b>OK</b></div>')
```

## Signature

```ts
const html: (
  strings: TemplateStringsArray,
  values: Interpolation[],
) => SafeHtml;

```

## Parameters

### `strings`

The template strings

### `values`

The values to interpolate

## Returns

A `SafeHtml` value