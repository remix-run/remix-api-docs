---
title: MatcherResourceErrorDetails
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/route-pattern/src/lib/match/limits.ts#L14
---

# MatcherResourceErrorDetails

## Summary

Structured details describing a matcher resource-limit failure.

## Signature

```ts
interface MatcherResourceErrorDetails {
  actual: number
  limit: keyof MatcherLimits
  maximum: number
}

```

## Properties

### `actual`

Value requested by the failed operation.

### `limit`

Limit that was exceeded.

### `maximum`

Configured maximum value.