---
title: ImportMapProps
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/server/stream.ts#L114
---

# ImportMapProps

## Signature

```ts
type ImportMapProps = Omit<
  Props<'script'>,
  'children' | 'innerHTML' | 'integrity' | 'src' | 'type'
> & { value: ImportMapData }

```