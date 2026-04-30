---
title: EntryComponent
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/client-entries.ts#L48
---

# EntryComponent

## Summary

An entry component preserves the exact function type with added metadata

## Signature

```ts
type EntryComponent<props, context> = (
  handle: Handle<props, context>,
) => RenderFn<props> & EntryMetadata;

```