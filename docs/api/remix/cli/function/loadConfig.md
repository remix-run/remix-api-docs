---
title: loadConfig
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.1/packages/cli/src/lib/remix-config.ts#L130
---

# loadConfig

## Summary

Loads the nearest Remix project configuration or an explicitly selected config file.

## Signature

```ts
function loadConfig(from: string | URL): Promise<RemixConfig>

```

## Parameters

### `from`

A config file or directory from which to search upward for `remix.json`. Defaults to
`process.cwd()`.

## Returns

The validated Remix project configuration, or an empty object when no config is found.