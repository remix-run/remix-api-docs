---
title: FetchProxyOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/fetch-proxy/src/lib/fetch-proxy.ts#L6
---

# FetchProxyOptions

## Summary

Options for createFetchProxy.

## Signature

```ts
interface FetchProxyOptions {
  fetch?: {
    (input: URL | RequestInfo, init?: RequestInit): Promise<Response>;
    (input: string | URL | Request, init?: RequestInit): Promise<Response>;
  };
  rewriteCookieDomain?: boolean;
  rewriteCookiePath?: boolean;
  xForwardedHeaders?: boolean;
}

```

## Properties

### fetch

The `fetch` function to use for the actual fetch.

### rewriteCookieDomain

Set `false` to prevent the `Domain` attribute of `Set-Cookie` headers from being rewritten. By
default the domain will be rewritten to the domain of the incoming request.

### rewriteCookiePath

Set `false` to prevent the `Path` attribute of `Set-Cookie` headers from being rewritten. By
default the portion of the pathname that matches the proxy target's pathname will be removed.

### xForwardedHeaders

Set `true` to add `X-Forwarded-Proto`, `X-Forwarded-Host`, and `X-Forwarded-Port`
headers to the proxied request.