---
title: Fragment
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/component.ts#L380
---

# Fragment

## Summary

Built-in component used to group children without adding a host element.

## Signature

```ts
function Fragment(handle: Handle<FragmentProps>): () => null;

```

## Parameters

### `handle`

Component handle for the fragment instance.

## Returns

A placeholder render function handled by the reconciler.