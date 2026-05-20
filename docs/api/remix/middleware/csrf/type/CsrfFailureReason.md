---
title: CsrfFailureReason
---

# CsrfFailureReason

## Summary

The reason a CSRF request was rejected.

## Signature

```ts
type CsrfFailureReason = "invalid-origin" | "missing-token" | "invalid-token";

```