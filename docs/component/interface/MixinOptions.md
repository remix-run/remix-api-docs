---
title: "MixinOptions"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/mixins/mixin.ts#L343"
---

# MixinOptions

## Summary

Options for creating a mixin factory.

## Signature

```ts
interface MixinOptions {
  ssr?: boolean
}

```

## Properties

### `ssr`

Whether setup and render run during server rendering (true by default).
Set to `false` for behavior that does not contribute to the server HTML.