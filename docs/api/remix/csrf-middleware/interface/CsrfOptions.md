---
title: CsrfOptions
---

# CsrfOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/csrf-middleware/src/lib/csrf.ts#L55" target="_blank">View Source</a>

## Summary

Options for the CSRF middleware.

## Signature

```ts
interface CsrfOptions {
  allowMissingOrigin?: boolean;
  fieldName?: string;
  headerNames?: readonly string[];
  onError?: (
    reason: CsrfFailureReason,
    context: RequestContext,
  ) => Response | Promise<Response>;
  origin?: CsrfOrigin;
  safeMethods?: readonly RequestMethod[];
  tokenKey?: string;
  value?: CsrfTokenResolver;
}

```

## Properties

### allowMissingOrigin

Allow requests without Origin/Referer headers.

### fieldName

Form field name to read CSRF tokens from.

### headerNames

Header names checked (in order) for CSRF tokens.

### onError

Optional custom error response for rejected requests.

### origin

Allowed cross-origin origins for unsafe requests.

When omitted, requests are validated as same-origin.

### safeMethods

Methods that do not require CSRF validation.

### tokenKey

Session key used to store the server-generated CSRF token.

### value

Custom function for extracting the submitted token.