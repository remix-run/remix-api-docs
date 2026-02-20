---
title: EventListeners
---

# EventListeners

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/interaction/src/lib/interaction.ts#L33" target="_blank">View Source</a>

## Summary

A map of event types to listeners or arrays of listeners (or descriptors).

## Signature

```ts
type EventListeners<target> = Partial<{
  [k in EventType<target>]:
    | ListenerOrDescriptor<ListenerFor<target, k>>
    | ListenerOrDescriptor<ListenerFor<target, k>>[];
}>;

```