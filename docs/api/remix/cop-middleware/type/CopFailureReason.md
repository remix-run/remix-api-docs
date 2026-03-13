---
title: CopFailureReason
---

# CopFailureReason

<a href="https://github.com/remix-run/remix/blob/main/packages/cop-middleware/src/lib/cop.ts#L18" target="_blank">View Source</a>

## Summary

Reason reported when cross-origin protection rejects a request.

## Signature

```ts
type CopFailureReason =
  | "cross-origin-request"
  | "cross-origin-request-from-old-browser";

```