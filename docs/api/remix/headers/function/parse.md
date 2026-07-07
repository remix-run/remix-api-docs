---
title: parse
source: https://github.com/remix-run/remix/blob/main/packages/headers/src/lib/raw-headers.ts#L16
---

# parse

## Summary

Parses a raw HTTP header string into a `Headers` object.

## Signature

```ts
function parse(raw: string): Headers;

```

## Example

```ts
let headers = parse("Content-Type: text/html\r\nCache-Control: no-cache");
headers.get("Content-Type"); // 'text/html'
headers.get("Cache-Control"); // 'no-cache'

```

## Parameters

### `raw`

A raw HTTP header string with headers separated by CRLF (`\r\n`)

## Returns

A `Headers` object containing the parsed headers