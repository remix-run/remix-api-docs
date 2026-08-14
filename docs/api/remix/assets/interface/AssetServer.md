---
title: AssetServer
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/assets/src/lib/asset-server.ts#L278
---

# AssetServer

## Summary

Serves compiled scripts and styles for asset requests routed to it.
Construct with [`createAssetServer`](/api/remix/assets/function/createAssetServer/).

## Signature

```ts
interface AssetServer<transforms> {
  close(): Promise<void>
  fetch(request: Request): Promise<Response | null>
  getHref(filePath: string, options: AssetServerGetHrefOptions<transforms>): Promise<string>
  getPreloads(filePath: string | readonly string[]): Promise<string[]>
}

```

## Methods

### `close(): Promise<void>`

Closes this server's filesystem watcher and browser HMR channel.



### `fetch(request: Request): Promise<Response | null>`

Serves a script or style request. Returns `Response | null` — null means the request
was not handled by this server, letting the router fall through to a 404.



### `getHref(filePath: string, options: AssetServerGetHrefOptions<transforms>): Promise<string>`

Returns the request href for a served asset file.



### `getPreloads(filePath: string | readonly string[]): Promise<string[]>`

Returns preload URLs for one or more served asset files, ordered shallowest-first.

