---
title: MatcherOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/route-pattern/src/lib/match.ts#L9
---

# MatcherOptions

## Summary

Options that control route pattern matching.

## Signature

```ts
interface MatcherOptions {
  ignoreCase?: boolean
  limits?: Partial<MatcherLimits>
}

```

## Properties

### `ignoreCase`

When `true`, pathname matching is case-insensitive for all patterns. Hostname is always
case-insensitive; search remains case-sensitive. Defaults to `false`.

### `limits`

Overrides for pattern-compilation and URL-matching resource limits.