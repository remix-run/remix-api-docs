---
title: FinishExternalAuthOptions
---

# FinishExternalAuthOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/auth/src/lib/finish-external-auth.ts#L11" target="_blank">View Source</a>

## Summary

Options for finishing an OAuth or OIDC callback flow.

## Signature

```ts
interface FinishExternalAuthOptions {
  transactionKey?: string;
}

```

## Properties

### transactionKey

Session key used to read and clear the in-progress OAuth transaction.