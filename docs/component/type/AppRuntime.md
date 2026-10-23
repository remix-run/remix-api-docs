---
title: "AppRuntime"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/run.ts#L58"
---

# AppRuntime

## Summary

Client runtime returned by [`run`](/component/function/run/).

## Signature

```ts
type AppRuntime = TypedEventTarget<AppRuntimeEventMap> & {
  frames: Handle['frames']
  dispose: any
  flush: any
  ready: any
}

```