---
title: "RunInit"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/run.ts#L15"
---

# RunInit

## Summary

Options for starting the client runtime with [`run`](/api/remix/component/function/run/).

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

Resolves browser-loaded frame content, including top-frame navigation and reloads.

Defaults to fetching the frame source as HTML with the submitted form data, method, encoding,
and abort signal. All requests send `X-Remix-Frame: true`, plus `X-Remix-Target` when named.
The default resolver only fetches from the document origin, including
redirects, but does not sanitize the returned HTML. Custom resolvers own their request,
redirect, and content trust policies.