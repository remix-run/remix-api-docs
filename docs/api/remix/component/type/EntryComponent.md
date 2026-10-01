---
title: "EntryComponent"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/client-entries.ts#L63"
---

# EntryComponent

## Summary

An entry component preserves the exact function type with added metadata

## Signature

```ts
type EntryComponent<props, context> = [props] extends [SerializableProps<props>]
  ? (handle: Handle<props, context>) => RenderFn & EntryMetadata
  : never

```