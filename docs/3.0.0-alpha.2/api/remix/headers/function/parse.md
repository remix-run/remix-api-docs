---
title: parse
---

# parse

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/headers/src/lib/raw-headers.ts#L16" target="_blank">View Source</a>

## Summary

Parses a raw HTTP header string into a `Headers` object.

## Signature

```ts
function parse(raw: string): Headers;

```

## Example

```ts
let headers = parse('Content-Type: text/html\r\nCache-Control: no-cache')
headers.get('content-type') // 'text/html'
headers.get('cache-control') // 'no-cache'
```

## Params

### raw

A raw HTTP header string with headers separated by CRLF (`\r\n`)

## Returns

A `Headers` object containing the parsed headers