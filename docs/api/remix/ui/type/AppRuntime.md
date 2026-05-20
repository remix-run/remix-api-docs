---
title: AppRuntime
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/ui/src/runtime/run.ts#L42
---

# AppRuntime

## Summary

Client runtime returned by [`run`](/api/remix/ui/function/run/).

## Signature

```ts
type AppRuntime = TypedEventTarget<AppRuntimeEventMap> & {
  dispose: any;
  flush: any;
  ready: any;
};

```