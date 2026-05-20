---
title: addEventListeners
---

# addEventListeners

## Summary

Adds typed event listeners and reentry abort signals to a target.

## Signature

```ts
function addEventListeners<target extends EventTarget>(
  target: target,
  signal: AbortSignal,
  listeners: EventListeners<target>,
): void;

```

## Parameters

### `target`

### `signal`

Lifetime signal used to remove all listeners.

### `listeners`

Listener map keyed by event type.