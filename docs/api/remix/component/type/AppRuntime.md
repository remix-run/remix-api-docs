---
title: AppRuntime
---

# AppRuntime

<a href="https://github.com/remix-run/remix/blob/main/packages/component/src/lib/run.ts#L29" target="_blank">View Source</a>

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