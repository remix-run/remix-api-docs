---
title: RunOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/node-hmr/src/index.ts#L9
---

# RunOptions

## Summary

Options for running a Node.js entry module with HMR supervision.

## Signature

```ts
interface RunOptions {
  browserHmrChannel?: boolean | BrowserHmrChannelOptions
  cwd?: string
  entryArgs?: readonly string[]
  env?: ProcessEnv
  nodeArgs?: readonly string[]
  watch?: NodeHmrWatchOptions
}

```

## Properties

### `browserHmrChannel`

Configures the parent-owned EventSource server used to coordinate browser HMR, or disables it
with `false`. Enabled with default options when omitted or set to `true`.

### `cwd`

Working directory used to resolve the entry path and relative watch options. (`process.cwd()`)

### `entryArgs`

Arguments passed to the entry module after the entry path.

### `env`

Complete environment for the child process. (`process.env`)

### `nodeArgs`

Node.js arguments passed before the entry path.

### `watch`

File watching options for the supervised process.