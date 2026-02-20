---
title: FetchProxyOptions
---

# FetchProxyOptions

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/fetch-proxy/src/lib/fetch-proxy.ts#L6" target="_blank">View Source</a>

## Summary

Options for `createFetchProxy`.

## Signature

```ts
interface FetchProxyOptions {
  fetch?: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    (input: string | Request | URL, init?: RequestInit): Promise<Response>;
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

Set `true` to add `X-Forwarded-Proto` and `X-Forwarded-Host` headers to the proxied request.