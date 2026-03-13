---
title: createScheduler
---

# createScheduler

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/scheduler.ts#L37" target="_blank">View Source</a>

## Summary

Creates the DOM update scheduler used by the component runtime.

## Signature

```ts
function createScheduler(
  doc: Document,
  rootTarget: EventTarget,
  styles: {
    dispose: () => void;
    has: (className: string) => boolean;
    insert: (className: string, rule: string) => void;
    remove: (className: string) => void;
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

## Params

### doc

Document associated with the rendered tree.

### rootTarget

Event target that receives runtime errors.

### styles

Style manager used during reconciliation.

## Returns

A scheduler instance.