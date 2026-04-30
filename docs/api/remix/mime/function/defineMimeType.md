---
title: defineMimeType
source: https://github.com/remix-run/remix/blob/main/packages/mime/src/lib/define-mime-type.ts#L51
---

# defineMimeType

## Summary

Registers a custom MIME type for one or more file extensions.

Use this to add support for file extensions not included in the defaults,
or to override the behavior of existing extensions.

## Signature

```ts
function defineMimeType(definition: MimeTypeDefinition): void;

```

## Example

```ts
defineMimeType({
  extensions: ['x-myformat'],
  mimeType: 'application/x-myformat',
})
```

## Params

### `definition`

The MIME type definition to register