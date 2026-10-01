---
title: "run"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/spa/src/lib/spa.ts#L87"
---

# run

## Summary

Starts a client-rendered Remix application for the current document.

The current URL and subsequent same-origin navigations are dispatched through `router`. Route
handlers return responses created by the [`render`](/api/remix/spa/function/render/) middleware, and their associated nodes
are rendered into the document's top frame.

## Signature

```ts
function run(router: Router, options: RunOptions): Runtime

```

## Parameters

### `router`

Router that resolves browser requests to SPA route responses.

### `options`

Options for the initial render.

## Returns

The running application runtime.