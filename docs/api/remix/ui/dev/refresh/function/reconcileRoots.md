---
title: reconcileRoots
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/ui/src/runtime/refresh.ts#L42
---

# reconcileRoots

## Summary

Immediately schedules reconciliation for every active Remix UI root using its current element.

HMR runtimes call this after installing updated component implementations so mounted trees render
the new code while preserving compatible component state.

## Signature

```ts
function reconcileRoots(): void

```