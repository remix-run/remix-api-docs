---
title: ModuleLoader
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/assets/src/lib/loaders.ts#L35
---

# ModuleLoader

## Summary

Synchronously loads a module or delegates to the next configured loader.

Loaders follow Node's synchronous `load` hook signature and chaining contract. The asset server
passes them JavaScript after its TypeScript/JavaScript transform and before HMR analysis and
minification. Each loader must delegate to `nextLoad` or return `shortCircuit: true`.

## Signature

```ts
type ModuleLoader = (
  url: string,
  context: ModuleLoadContext,
  nextLoad: NextModuleLoader,
) => ModuleLoadResult

```