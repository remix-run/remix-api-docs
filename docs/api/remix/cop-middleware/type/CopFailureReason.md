---
title: CopFailureReason
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/cop-middleware/src/lib/cop.ts#L18
---

# CopFailureReason

## Summary

Reason reported when cross-origin protection rejects a request.

## Signature

```ts
type CopFailureReason =
  | "cross-origin-request"
  | "cross-origin-request-from-old-browser";

```