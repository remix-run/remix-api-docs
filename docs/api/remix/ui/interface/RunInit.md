---
title: RunInit
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/ui/src/runtime/run.ts#L15
---

# RunInit

## Summary

Options for starting the client runtime with [`run`](/api/remix/ui/function/run/).

## Signature

```ts
interface RunInit {
  loadModule: LoadModule
  processClientEntryPreloads?: ProcessClientEntryPreloads
  resolveFrame?: ResolveFrame
}

```

## Properties

### `loadModule`

Loads the named browser module export for a hydrated `clientEntry()`.

Implementations usually call dynamic `import(moduleUrl)` and return
`mod[exportName]`.

### `processClientEntryPreloads`

Processes module preloads discovered in late client entry responses before activation.

### `resolveFrame`

Resolves browser-loaded `<Frame>` content.

Defaults to fetching the frame source as HTML with the submitted form data,
method, encoding, and abort signal.