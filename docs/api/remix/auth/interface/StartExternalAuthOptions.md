---
title: StartExternalAuthOptions
source: https://github.com/remix-run/remix/blob/main/packages/auth/src/lib/start-external-auth.ts#L15
---

# StartExternalAuthOptions

## Summary

Options for starting an OAuth or OIDC login redirect flow.

## Signature

```ts
interface StartExternalAuthOptions {
  returnTo?: string | null;
  transactionKey?: string;
}

```

## Properties

### returnTo

Optional post-auth redirect target to preserve in the OAuth transaction.

### transactionKey

Session key used to store the in-progress OAuth transaction.