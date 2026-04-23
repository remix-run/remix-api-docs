---
title: createAssetServer
---

# createAssetServer

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/assets/src/lib/asset-server.ts#L193" target="_blank">View Source</a>

## Summary

Create an asset server instance

Compiles TypeScript/JavaScript modules on demand with optional source-based URL
fingerprinting, caching, and configurable file mapping.

## Signature

```ts
function createAssetServer(options: AssetServerOptions): AssetServer;

```

## Example

```ts
let assetServer = createAssetServer({
  fileMap: {
    '/assets/app/*path': 'app/*path',
  },
  allow: ['app/**'],
})

route('/assets/*path', ({ request }) => assetServer.fetch(request))
```

## Params

### options

Server configuration

## Returns

A [`AssetServer`](/api/remix/assets/interface/AssetServer/) with `fetch()`, `getHref()`, and `getPreloads()` methods