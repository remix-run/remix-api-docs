---
title: createAssetServer
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/assets/src/lib/asset-server.ts#L191
---

# createAssetServer

## Summary

Create an asset server instance

Compiles TypeScript/JavaScript scripts and CSS styles on demand with optional
source-based URL fingerprinting, caching, and configurable file mapping.

## Signature

```ts
function createAssetServer(options: AssetServerOptions): AssetServer;

```

## Example

```ts
let assetServer = createAssetServer({
  basePath: '/assets',
  fileMap: {
    '/app/*path': 'app/*path',
  },
  allow: ['app/**'],
})

route('/assets/*path', ({ request }) => assetServer.fetch(request))
```

## Params

### `options`

Server configuration

## Returns

A [`AssetServer`](/api/remix/assets/interface/AssetServer/) with `fetch()`, `getHref()`, and `getPreloads()` methods