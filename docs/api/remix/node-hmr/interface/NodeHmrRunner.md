---
title: NodeHmrRunner
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/node-hmr/src/index.ts#L62
---

# NodeHmrRunner

## Summary

Handle returned by [`run`](/api/remix/node-hmr/function/run/) for controlling the supervised process.

## Signature

```ts
interface NodeHmrRunner {
  generation: number
  close(): Promise<void>
  ready(): Promise<void>
}

```

## Properties

### `generation`

Current server generation, incremented after every accepted hot update or process restart.

## Methods

### `close(): Promise<void>`

Stops the runner and waits for the child process to exit.



### `ready(): Promise<void>`

Waits until the latest update or restart has settled and the current child process is ready.

If the app uses `emitServerReady()`, restart readiness also waits for that signal.

