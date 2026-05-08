---
title: createScheduler
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/scheduler.ts#L37
---

# createScheduler

## Summary

Creates the DOM update scheduler used by the component runtime.

## Signature

```ts
function createScheduler(
  doc: Document,
  rootTarget: EventTarget,
  styles: {
    adoptServerStyles: (source: ServerStyleSource) => void;
    dispose: () => void;
    getGeneration: () => number;
    has: (className: string) => boolean;
    insert: (className: string, rule: string) => void;
    remove: (className: string) => void;
    reset: () => void;
  },
): {
  addEventListener: any;
  dequeue: any;
  enqueue: any;
  enqueueCommitPhase: any;
  enqueueTasks: any;
  enqueueWork: any;
  removeEventListener: any;
};

```

## Parameters

### `doc`

Document associated with the rendered tree.

### `rootTarget`

Event target that receives runtime errors.

### `styles`

Style manager used during reconciliation.

## Returns

A scheduler instance.