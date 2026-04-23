---
title: FormOptions
---

# FormOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/fetch-router/src/lib/route-helpers/form.ts#L10" target="_blank">View Source</a>

## Summary

Options for generating a paired `index`/`action` form route map.

## Signature

```ts
interface FormOptions {
  formMethod?: RequestMethod;
  names?: { action?: string; index?: string };
}

```

## Properties

### formMethod

The method the `<form>` uses to submit the action.

### names

Custom names to use for the `index` and `action` routes.