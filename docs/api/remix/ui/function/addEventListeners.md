---
title: addEventListeners
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/event-listeners.ts#L137
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

## Params

### `target`

### `signal`

Lifetime signal used to remove all listeners.

### `listeners`

Listener map keyed by event type.