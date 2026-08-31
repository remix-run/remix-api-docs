---
title: AssetServer
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.1/packages/assets/src/lib/asset-server.ts#L289
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
  getAssetDetails(input: string): Promise<AssetDetails>
  getAssets(): Promise<AssetDetails[]>
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



### `getAssetDetails(input: string): Promise<AssetDetails>`

Returns diagnostic details about one public asset URL or file path, including the matched mount
roots, access rules, file type, and browser-reachability status.



### `getAssets(): Promise<AssetDetails[]>`

Returns every file currently reachable through this asset server, sorted by public URL and
then absolute file path.



### `getHref(filePath: string, options: AssetServerGetHrefOptions<transforms>): Promise<string>`

Returns the request href for a served asset file.



### `getPreloads(filePath: string | readonly string[]): Promise<string[]>`

Returns preload URLs for one or more served asset files, ordered shallowest-first.

