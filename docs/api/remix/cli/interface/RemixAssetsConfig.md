---
title: RemixAssetsConfig
source: https://github.com/remix-run/remix/blob/main/packages/cli/src/lib/remix-config.ts#L41
---

# RemixAssetsConfig

## Summary

JSON-compatible asset server configuration loaded from `remix.json`.

## Signature

```ts
interface RemixAssetsConfig {
  allowFiles: readonly string[]
  allowPackages?: readonly string[]
  basePath: string
  denyFiles?: readonly string[]
  files?: Pick<AssetServerFilesOptions<{}>, 'extensions'>
  mounts?: Readonly<Record<string, string>>
  rootDir: string
}

```

## Properties

### `allowFiles`

Glob patterns or file paths that are allowed to be served. Relative values are resolved from `rootDir`.

### `allowPackages`

Exact package names whose files are allowed to be served. Dependencies and installed optional
dependencies are allowed automatically. Package files must still be within a configured mount.

### `basePath`

Public mount path for this asset server, e.g. `'/assets'`.

### `denyFiles`

Glob patterns or file paths that are denied from being served. Relative values are resolved from `rootDir`.

### `files`

Leaf file asset configuration.

### `mounts`

Directories to mount at public URL paths.

Each key is a public URL path and its value is a directory relative to `rootDir`. Defaults to
`{ app: 'app', npm: 'node_modules' }`. Public paths must not contain query strings, fragments,
or encoded dot segments.

### `rootDir`

Absolute root directory used to resolve asset file paths.