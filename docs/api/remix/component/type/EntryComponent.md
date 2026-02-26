---
title: EntryComponent
---

# EntryComponent

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/component/src/lib/client-entries.ts#L49" target="_blank">View Source</a>

## Summary

An entry component preserves the exact function type with added metadata

## Signature

```ts
type EntryComponent<context, setup, props> = (
  handle: Handle<context>,
  setup: setup,
) => (props: props) => RemixNode & EntryMetadata;

```