---
title: addEventListeners
---

# addEventListeners

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/component/src/lib/event-listeners.ts#L137" target="_blank">View Source</a>

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

### target

### signal

Lifetime signal used to remove all listeners.

### listeners

Listener map keyed by event type.