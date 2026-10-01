---
title: "createAssetServer"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/assets/src/lib/asset-server.ts#L411"
---

# createAssetServer

## Summary

Create an asset server instance

Compiles TypeScript/JavaScript scripts and CSS styles on demand with optional
content-based URL fingerprinting, caching, and configurable directory mounts.

## Signature

```ts
function createAssetServer<
  transforms extends Readonly<
    Record<string, AssetRequestTransform<string, AssetRequestTransformParamMode>>
  >,
>(options: AssetServerCreateOptions<transforms>): AssetServer<transforms>

```

## Example

```ts
let assetServer = createAssetServer({
  basePath: '/assets',
  allowFiles: ['app/routes.ts', 'app/**/public/**'],
  allowPackages: ['remix'],
  denyFiles: ['app/**/*.test.*'],
})

route('/assets/*path', ({ request }) => assetServer.fetch(request))

```

## Parameters

### `options`

Server configuration

## Returns

A [`AssetServer`](/api/remix/assets/interface/AssetServer/) with `fetch()`, `getHref()`, and `getPreloads()` methods