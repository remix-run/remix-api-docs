---
title: MatcherLimits
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/route-pattern/src/lib/match/limits.ts#L2
---

# MatcherLimits

## Summary

Resource limits applied while compiling and matching route patterns.

## Signature

```ts
interface MatcherLimits {
  maxMatcherSize: number
  maxMatchWork: number
  maxPatternSize: number
}

```

## Properties

### `maxMatcherSize`

Maximum combined size of all patterns, measured in UTF-8 bytes. Defaults to 16,777,216.

### `maxMatchWork`

Maximum aggregate work performed by one URL match. Defaults to 1,000,000.

### `maxPatternSize`

Maximum size of one pattern, measured in UTF-8 bytes. Defaults to 65,536.