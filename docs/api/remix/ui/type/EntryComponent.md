---
title: EntryComponent
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