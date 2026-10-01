---
title: "RemixConfig"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/cli/src/lib/remix-config.ts#L29"
---

# RemixConfig

## Summary

Validated configuration loaded from a Remix project config file.

## Signature

```ts
interface RemixConfig {
  assets?: RemixAssetsConfig
  db?: RemixDbCommandConfig
  doctor?: RemixDoctorCommandConfig
  test?: RemixTestCommandConfig
}

```

## Properties

### `assets`

Shared asset mapping and browser access configuration.

### `db`

Database command configuration.

### `doctor`

Project health-check configuration.

### `test`

Test runner configuration.