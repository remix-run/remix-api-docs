---
title: MatchOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/route-pattern/src/lib/match.ts#L21
---

# MatchOptions

## Summary

Options that control how a URL string is resolved before matching.

## Signature

```ts
interface MatchOptions {
  baseURL?: string | URL
}

```

## Properties

### `baseURL`

Absolute URL used to resolve relative URL strings with platform `URL` semantics.