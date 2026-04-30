---
title: AppRuntime
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/ui/src/runtime/run.ts#L29
---

# AppRuntime

## Summary

Client runtime returned by run.

## Signature

```ts
type AppRuntime = TypedEventTarget<AppRuntimeEventMap> & {
  dispose: any;
  flush: any;
  ready: any;
};

```