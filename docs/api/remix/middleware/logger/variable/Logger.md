---
title: Logger
source: https://github.com/remix-run/remix/blob/main/packages/logger-middleware/src/lib/logger.ts#L19
---

# Logger

## Summary

Context key used to read the current request logger with `context.get(Logger)`.
The `logger()` middleware also installs the logger as `context.logger`.

## Signature

```ts
const Logger: ContextKey<LoggerFunction>;

```