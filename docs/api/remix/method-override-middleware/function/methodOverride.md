---
title: methodOverride
---

# methodOverride

<a href="https://github.com/remix-run/remix/blob/main/packages/method-override-middleware/src/lib/method-override.ts#L26" target="_blank">View Source</a>

## Summary

Middleware that overrides `context.method` with the value of the method override field.

Note: This middleware must be placed after the
import('@remix-run/form-data-middleware').formData middleware in the middleware
chain, or some other middleware that provides `context.get(FormData)`.

## Signature

```ts
function methodOverride(options: MethodOverrideOptions): Middleware;

```

## Params

### options

Options for the method override middleware

## Returns

A middleware that overrides `context.method` with the value of the method override field