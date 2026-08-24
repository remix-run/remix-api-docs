---
title: FinishExternalAuthOptions
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/auth/src/lib/finish-external-auth.ts#L11
---

# FinishExternalAuthOptions

## Summary

Options for finishing an OAuth or OIDC callback flow.

## Signature

```ts
interface FinishExternalAuthOptions {
  transactionKey?: string
}

```

## Properties

### `transactionKey`

Session key used to read and clear the in-progress OAuth transaction.