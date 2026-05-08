---
title: AppRuntime
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/run.ts#L29
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