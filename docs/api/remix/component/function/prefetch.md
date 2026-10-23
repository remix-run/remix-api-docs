---
title: "prefetch"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/prefetch.ts#L37"
---

# prefetch

## Summary

Prefetches frame content so a later navigation can reuse the response. By default this
fetches HTML and discovers external JavaScript, CSS, and explicit image and font preloads for
`<link rel="prefetch">` hints.
Responses use the browser HTTP cache; even uncacheable HTML can reveal cacheable assets. Pass
`prefetch` to `run()` to change this behavior. Cross-origin URLs, the current untargeted page, and
browsers where Remix doesn't handle navigations are skipped.

## Signature

```ts
function prefetch(href: string, options: PrefetchOptions): void

```

## Parameters

### `href`

URL to prefetch, resolved against the document base URL.

### `options`

Destination frame for the request.