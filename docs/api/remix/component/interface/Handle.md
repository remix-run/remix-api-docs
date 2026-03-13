---
title: Handle
---

# Handle

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/component.ts#L12" target="_blank">View Source</a>

## Summary

Runtime handle passed to component setup functions.

## Signature

```ts
interface Handle<C> {
  context: Context<C>;
  frame: FrameHandle;
  frames: { top: FrameHandle; get: any };
  id: string;
  signal: AbortSignal;
  queueTask(task: Task): void;
  update(): Promise<AbortSignal>;
}

```

## Properties

### context

Set and get values in an element tree for indirect ancestor/descendant
communication.

### frame

The component's closest frame

### frames

Access named frames in the current runtime tree.

### id

Stable identifier per component instance. Useful for HTML APIs like
htmlFor, aria-owns, etc. so consumers don't have to supply an id.

### signal

A signal indicating the connected status of the component. When the
component is disconnected from the tree the signal will be aborted.
Useful for setup scope cleanup.

## Methods

### queueTask(task: Task): void

Schedules a task to run after the next update.

#### task

### update(): Promise<AbortSignal>

Schedules an update for the component to render again. Returns a promise
that resolves with an AbortSignal after the update completes. The signal
is aborted when the component re-renders or is removed.