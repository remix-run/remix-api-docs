---
title: StartExternalAuthOptions
---

# StartExternalAuthOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/auth/src/lib/start-external-auth.ts#L15" target="_blank">View Source</a>

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