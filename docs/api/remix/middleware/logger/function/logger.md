---
title: logger
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/logger-middleware/src/lib/logger.ts#L83
---

# logger

## Summary

Creates a middleware handler that logs various request/response info.

## Signature

```ts
function logger(
  options: LoggerOptions,
): Middleware<{ key: { defaultValue?: LoggerFunction }; property: 'logger'; value: LoggerFunction }>

```

## Parameters

### `options`

Options for the logger

## Returns

The logger middleware