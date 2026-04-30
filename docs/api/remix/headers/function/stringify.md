---
title: stringify
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/headers/src/lib/raw-headers.ts#L39
---

# stringify

## Summary

Converts a `Headers` object to a raw HTTP header string.

## Signature

```ts
function stringify(headers: Headers): string;

```

## Example

```ts
let headers = new Headers({ 'Content-Type': 'text/html', 'Cache-Control': 'no-cache' })
stringify(headers) // 'Content-Type: text/html\r\nCache-Control: no-cache'
```

## Params

### `headers`

A `Headers` object to stringify

## Returns

A raw HTTP header string with headers separated by CRLF (`\r\n`)