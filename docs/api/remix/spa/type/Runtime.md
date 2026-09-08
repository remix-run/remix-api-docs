---
title: Runtime
source: https://github.com/remix-run/remix/blob/remix@3.0.0-rc.2/packages/spa/src/lib/spa.ts#L41
---

# Runtime

## Summary

Client runtime returned by [`run`](/api/remix/spa/function/run/).

## Signature

```ts
type Runtime = Omit<AppRuntime, 'ready'> & { ready: any }

```