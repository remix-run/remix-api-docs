---
title: MethodOverrideOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/method-override-middleware/src/lib/method-override.ts#L7
---

# MethodOverrideOptions

## Summary

Options for the [`methodOverride`](/api/remix/middleware/method-override/function/methodOverride/) middleware.

## Signature

```ts
interface MethodOverrideOptions {
  fieldName?: string;
}

```

## Properties

### `fieldName`

The name of the form field to check for request method override.