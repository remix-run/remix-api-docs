---
title: "FetchProxyOptions"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/fetch-proxy/src/lib/fetch-proxy.ts#L21"
---

# FetchProxyOptions

## Summary

Options for [`createFetchProxy`](/api/remix/fetch-proxy/function/createFetchProxy/).

## Signature

```ts
interface FetchProxyOptions {
  fetch?: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>
    (input: string | Request | URL, init?: RequestInit): Promise<Response>
  }
  redirect?: RequestRedirect
  rewriteCookieDomain?: boolean
  rewriteCookiePath?: boolean
  xForwardedHeaders?: boolean
}

```

## Properties

### `fetch`

The `fetch` function to use for the actual fetch.

### `redirect`

Controls upstream redirect handling. When omitted, the proxy changes the Fetch default of
`follow` to `manual` so redirects reach the client. Input requests using `manual` or `error`
retain those modes. A defined per-call `init.redirect` overrides this option.

### `rewriteCookieDomain`

Set `false` to prevent the `Domain` attribute of `Set-Cookie` headers from being rewritten. By
default the domain will be rewritten to the domain of the incoming request.

### `rewriteCookiePath`

Set `false` to prevent the `Path` attribute of `Set-Cookie` headers from being rewritten. By
default the portion of the pathname that matches the proxy target's pathname will be removed.

### `xForwardedHeaders`

Set `true` to set `X-Forwarded-Proto`, `X-Forwarded-Host`, and `X-Forwarded-Port`
headers on the proxied request from the incoming request URL. Existing values are replaced,
and the `Forwarded` and `X-Forwarded-For` headers are removed. The client address is not
available on a Fetch request. When disabled, existing forwarding headers are passed through
unless listed in `Connection`.