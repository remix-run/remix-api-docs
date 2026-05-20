---
title: createScheduler
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
    adoptServerStyles: (source: ServerStyleSource) => Set<string>;
    dispose: () => void;
    getGeneration: () => number;
    has: (className: string) => boolean;
    insert: (className: string, rule: string) => void;
    remove: (className: string) => void;
    replaceServerStyles: (source: ServerStyleSource) => void;
    reset: () => void;
    selectors: () => IterableIterator<string>;
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