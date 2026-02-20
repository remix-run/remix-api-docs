---
title: EventsContainer
---

# EventsContainer

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/interaction/src/lib/interaction.ts#L12" target="_blank">View Source</a>

## Summary

A container for event listeners that can be updated in place and disposed
together.

## Signature

```ts
type EventsContainer<target> = {
  dispose: () => void;
  set: (listeners: EventListeners<target>) => void;
};

```