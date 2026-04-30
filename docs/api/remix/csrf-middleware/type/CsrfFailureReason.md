---
title: CsrfFailureReason
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/csrf-middleware/src/lib/csrf.ts#L50
---

# CsrfFailureReason

## Summary

The reason a CSRF request was rejected.

## Signature

```ts
type CsrfFailureReason = "invalid-origin" | "missing-token" | "invalid-token";

```