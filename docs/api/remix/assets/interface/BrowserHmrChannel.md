---
title: BrowserHmrChannel
source: https://github.com/remix-run/remix/blob/main/packages/assets/src/lib/asset-server.ts#L58
---

# BrowserHmrChannel

## Summary

Bridge used by an asset server to watch browser source files and publish update events through a
server-level HMR runtime.

The asset server registers its file handler, keeps the channel's watched-file set in sync with
compiled assets, injects `url` into its browser HMR client, and closes the channel when the asset
server closes.

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

Absolute EventSource URL that receives the browser HMR events produced by this channel.

## Methods

### `close(): void`

Releases the channel and all file-watching resources it owns.



### `onFileEvents(handler: BrowserHmrFileEventHandler): () => void`

Registers the asset server's handler for file changes reported by the channel's watcher.

#### Parameters

##### `handler`

Callback that converts a batch of file changes into browser update or reload
events.

### `updateWatchedFiles(delta: BrowserHmrWatchedFileDelta): void`

Applies additions and removals to the channel's set of watched absolute file paths.

#### Parameters

##### `delta`

Files to add and remove from the watcher.