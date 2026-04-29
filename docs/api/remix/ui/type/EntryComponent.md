---
title: EntryComponent
---

# EntryComponent

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/runtime/client-entries.ts#L48" target="_blank">View Source</a>

## Summary

An entry component preserves the exact function type with added metadata

## Signature

```ts
type EntryComponent<props, context> = (
  handle: Handle<props, context>,
) => RenderFn<props> & EntryMetadata;

```