---
title: "SerializableProps"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/client-entries.ts#L47"
---

# SerializableProps

## Signature

```ts
type SerializableProps<props> = props extends SerializableObject
  ? props
  : { [key in keyof props]: SerializableProperty<props[key]> }

```