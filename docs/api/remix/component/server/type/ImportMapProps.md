---
title: "ImportMapProps"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/server/stream.ts#L132"
---

# ImportMapProps

## Summary

Props for [`ImportMap`](/api/remix/component/server/function/ImportMap/), including authored mappings and optional script attributes.
The component owns the script's type and contents; external sources and children are excluded.

## Signature

```ts
type ImportMapProps = Omit<
  Props<'script'>,
  'children' | 'innerHTML' | 'integrity' | 'src' | 'type'
> & { value: ImportMapData }

```