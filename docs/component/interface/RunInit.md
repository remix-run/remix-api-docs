---
title: "RunInit"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/run.ts#L16"
---

# RunInit

## Summary

Options for starting the client runtime with [`run`](/component/function/run/).

## Signature

```ts
interface RunInit {
  loadModule: LoadModule
  prefetch?: PrefetchFrame
  processClientEntryPreloads?: ProcessClientEntryPreloads
  resolveFrame?: ResolveFrame
}

```

## Properties

### `loadModule`

Loads the named browser module export for a hydrated `clientEntry()`.

Implementations usually call dynamic `import(moduleUrl)` and return
`mod[exportName]`.

### `prefetch`

Starts loading a page for `data-rmx-prefetch` links and `prefetch()` calls, replacing the
default HTML fetch and asset prefetch hints. Use it with `resolveFrame` to reuse uncacheable HTML,
for example to hold the response in memory until the next navigation to that URL and target.
Named-frame links pass their target and use `data-rmx-src` as the source when specified.

### `processClientEntryPreloads`

Processes module preloads discovered in late client entry responses before activation.

### `resolveFrame`

Resolves browser-loaded frame content, including top-frame navigation and reloads.

Defaults to fetching the frame source as HTML with the submitted form data, method, encoding,
and abort signal. All requests send `X-Remix-Frame: true`, plus `X-Remix-Target` when named.
The default resolver only fetches from the document origin, including
redirects, but does not sanitize the returned HTML. Custom resolvers own their request,
redirect, and content trust policies.