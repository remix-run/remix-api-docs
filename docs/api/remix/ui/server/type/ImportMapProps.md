---
title: ImportMapProps
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/ui/src/server/stream.ts#L114
---

# ImportMapProps

## Signature

```ts
type ImportMapProps = Omit<
  Props<'script'>,
  'children' | 'innerHTML' | 'integrity' | 'src' | 'type'
> & { value: ImportMapData }

```