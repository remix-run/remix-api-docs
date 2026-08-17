---
title: run
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/node-hmr/src/index.ts#L175
---

# run

## Summary

Starts a Node.js entry module in a supervised child process and watches its loaded module graph.

Accepted module changes are applied in place; unaccepted changes restart the child. The returned
handle exposes readiness across both paths and closes the watcher, child process, and browser HMR
event server when stopped.

## Signature

```ts
function run(entry: string, options: RunOptions): NodeHmrRunner

```

## Parameters

### `entry`

Entry module path, resolved from `options.cwd`.

### `options`

Runner options.

## Returns

A runner handle for the supervised process.