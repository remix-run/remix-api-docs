---
title: createTestServer
---

# createTestServer

## Summary

Starts an `http.Server` on a random localhost port that delegates to the
given fetch-style handler. Intended for integration tests — pair the
returned [`TestServer`](/api/remix/node-fetch-server/test/interface/TestServer/) with `t.serve()` from `@remix-run/test` to
drive it from a Playwright `Page`.

## Signature

```ts
function createTestServer(
  handler: (request: Request) => Response | Promise<Response>,
): Promise<TestServer>;

```

## Parameters

### `handler`

A fetch-style `(request) => Response | Promise<Response>`
  (e.g. `router.fetch` from `@remix-run/fetch-router`)

## Returns

A promise that resolves to the running [`TestServer`](/api/remix/node-fetch-server/test/interface/TestServer/).