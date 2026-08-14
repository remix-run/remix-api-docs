---
title: CsrfFailureReason
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/csrf-middleware/src/lib/csrf.ts#L58
---

# CsrfFailureReason

## Summary

The reason a CSRF request was rejected.

## Signature

```ts
type CsrfFailureReason = 'invalid-origin' | 'missing-token' | 'invalid-token'

```