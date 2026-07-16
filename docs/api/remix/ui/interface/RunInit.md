---
title: RunInit
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/run.ts#L14
---

# RunInit

## Summary

Options for starting the client runtime with [`run`](/api/remix/ui/function/run/).

## Signature

```ts
interface RunInit {
  loadModule: LoadModule
  resolveFrame?: ResolveFrame
}

```

## Properties

### `loadModule`

Loads the named browser module export for a hydrated `clientEntry()`.

Implementations usually call dynamic `import(moduleUrl)` and return
`mod[exportName]`.

### `resolveFrame`

Resolves browser-loaded `<Frame>` content.

Omit this only when the runtime never needs to load or reload frames in the
browser.