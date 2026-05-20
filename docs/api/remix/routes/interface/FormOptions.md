---
title: FormOptions
---

# FormOptions

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

### `formMethod`

The method the `<form>` uses to submit the action.

### `names`

Custom names to use for the `index` and `action` routes.