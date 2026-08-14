---
title: HmrReadyFetchOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/node-hmr/src/index.ts#L106
---

# HmrReadyFetchOptions

## Summary

Options for [`createHmrReadyFetch`](/api/remix/node-hmr/function/createHmrReadyFetch/).

## Signature

```ts
interface HmrReadyFetchOptions {
  shouldRetry?: (context: HmrReadyFetchRetryContext) => boolean | Promise<boolean>
}

```

## Properties

### `shouldRetry`

Determines whether a response or thrown error should be retried if the
runner moves to a new generation while the request is in flight. Defaults
to retrying `GET` and `HEAD` requests when the fetch throws or returns
`502`, `503`, or `504`.