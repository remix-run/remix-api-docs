---
title: Scheduler
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/ui/src/runtime/scheduler.ts#L20
---

# Scheduler

## Summary

Scheduler API used by the reconciler and frame runtime.

## Signature

```ts
interface Scheduler {
  addEventListener(
    type: SchedulerPhaseType,
    listener: SchedulerPhaseListener,
    options: boolean | AddEventListenerOptions,
  ): void;
  dequeue(): void;
  enqueue(vnode: CommittedComponentNode, domParent: ParentNode): void;
  enqueueCommitPhase(newTasks: EmptyFn[]): void;
  enqueueTasks(newTasks: EmptyFn[]): void;
  enqueueWork(newTasks: EmptyFn[]): void;
  removeEventListener(
    type: SchedulerPhaseType,
    listener: SchedulerPhaseListener,
    options: boolean | EventListenerOptions,
  ): void;
}

```