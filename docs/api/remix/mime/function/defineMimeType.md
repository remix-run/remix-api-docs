---
title: defineMimeType
---

# defineMimeType

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/mime/src/lib/define-mime-type.ts#L48" target="_blank">View Source</a>

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

### definition

The MIME type definition to register