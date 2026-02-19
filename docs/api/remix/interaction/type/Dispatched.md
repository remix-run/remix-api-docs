---
title: Dispatched
---

# Dispatched

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/interaction/src/lib/interaction.ts#L5" target="_blank">View Source</a>

## Summary

A dispatched event with the current target set to the target that dispatched the event.

## Signature

```ts
type Dispatched<event, target> = Omit<event, "currentTarget"> & {
  currentTarget: target;
};

```