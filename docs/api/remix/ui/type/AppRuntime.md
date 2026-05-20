---
title: AppRuntime
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