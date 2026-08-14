---
title: createHmrReadyFetch
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/node-hmr/src/index.ts#L128
---

# createHmrReadyFetch

## Summary

Wraps a fetch handler so requests wait for the current HMR generation to be ready.

If the wrapped fetch handler returns a retryable response or throws a retryable error, the
request is attempted again only when the runner moved to a new generation while the request was
in flight.

## Signature

```ts
function createHmrReadyFetch(
  runner: NodeHmrRunner,
  fetch: (request: Request) => Response | Promise<Response>,
  options: HmrReadyFetchOptions,
): (request: Request) => Promise<Response>

```

## Parameters

### `runner`

HMR runner that controls server readiness.

### `fetch`

Fetch handler to call once the runner is ready.

### `options`

Retry behavior for responses and thrown errors.

## Returns

A fetch handler that waits for HMR readiness before forwarding requests.