---
title: CsrfFailureReason
---

# CsrfFailureReason

<a href="https://github.com/remix-run/remix/blob/main/packages/csrf-middleware/src/lib/csrf.ts#L50" target="_blank">View Source</a>

## Summary

The reason a CSRF request was rejected.

## Signature

```ts
type CsrfFailureReason = "invalid-origin" | "missing-token" | "invalid-token";

```