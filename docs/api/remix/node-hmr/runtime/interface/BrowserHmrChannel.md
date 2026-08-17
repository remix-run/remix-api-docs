---
title: BrowserHmrChannel
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/node-hmr/src/lib/browser-events.ts#L90
---

# BrowserHmrChannel

## Summary

Child-process bridge between browser asset tooling and the parent `node-hmr` runtime.

The channel contributes files to the parent's shared watcher and converts matching file changes
into browser update or reload events. Close it when its owning asset server shuts down.

## Signature

```ts
interface BrowserHmrChannel {
  url: string
  close(): void
  onFileEvents(handler: BrowserHmrFileEventHandler): () => void
  updateWatchedFiles(delta: BrowserHmrWatchedFileDelta): void
}

```

## Properties

### `url`

Absolute URL of the parent-owned EventSource endpoint for browser HMR clients.

## Methods

### `close(): void`

Closes this channel, unregisters its handlers, and removes its files from the parent watcher.



### `onFileEvents(handler: BrowserHmrFileEventHandler): () => void`

Registers a handler that converts matching watcher events into events for browser clients.

Multiple handlers may be registered; their returned browser events are concatenated. Calling
the returned cleanup function stops invoking this handler without closing the channel.

#### Parameters

##### `handler`

Callback that maps a batch of file changes to browser HMR events.

### `updateWatchedFiles(delta: BrowserHmrWatchedFileDelta): void`

Adds and removes absolute file paths from the parent process's watcher for this channel.

Paths remain watched until removed by a later delta or until the channel is closed. Repeated
additions and removals are idempotent.

#### Parameters

##### `delta`

Files to add and remove from the watcher.