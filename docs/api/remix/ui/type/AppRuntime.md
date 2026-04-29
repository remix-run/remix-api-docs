---
title: AppRuntime
---

# AppRuntime

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/ui/src/runtime/run.ts#L29" target="_blank">View Source</a>

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