---
title: Fragment
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/component.ts#L368
---

# Fragment

## Summary

Built-in component used to group children without adding a host element.

## Signature

```ts
function Fragment(handle: Handle<FragmentProps>): () => null;

```

## Params

### `handle`

Component handle for the fragment instance.

## Returns

A placeholder render function handled by the reconciler.