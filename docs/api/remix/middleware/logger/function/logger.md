---
title: logger
source: https://github.com/remix-run/remix/blob/main/packages/logger-middleware/src/lib/logger.ts#L83
---

# logger

## Summary

Creates a middleware handler that logs various request/response info.

## Signature

```ts
function logger(
  options: LoggerOptions,
): Middleware<{
  key: ContextKey<LoggerFunction>;
  property: "logger";
  value: LoggerFunction;
}>;

```

## Parameters

### `options`

Options for the logger

## Returns

The logger middleware