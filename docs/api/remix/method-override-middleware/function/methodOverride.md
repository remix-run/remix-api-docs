---
title: methodOverride
---

# methodOverride

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/method-override-middleware/src/lib/method-override.ts#L25" target="_blank">View Source</a>

## Summary

Middleware that overrides `context.method` with the value of the method override field.

Note: This middleware must be placed after the `formData` middleware in the middleware chain, or
some other middleware that provides `context.formData`.

## Signature

```ts
function methodOverride(options: MethodOverrideOptions): Middleware;

```

## Params

### options

Options for the method override middleware

## Returns

A middleware that overrides `context.method` with the value of the method override field