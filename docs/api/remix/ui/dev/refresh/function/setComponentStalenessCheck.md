---
title: setComponentStalenessCheck
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/ui/src/runtime/refresh.ts#L24
---

# setComponentStalenessCheck

## Summary

Installs the process-wide component compatibility check used during development refreshes.

When the check returns `true`, reconciliation replaces existing instances of that component
instead of preserving their state. This is a low-level integration point for HMR runtimes.

## Signature

```ts
function setComponentStalenessCheck(check: ComponentStalenessCheck): void

```

## Parameters

### `check`

Callback that returns `true` when instances of a component must be remounted.