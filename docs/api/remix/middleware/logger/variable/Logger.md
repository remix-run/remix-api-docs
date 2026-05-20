---
title: Logger
---

# Logger

## Summary

Context key used to read the current request logger with `context.get(Logger)`.
The `logger()` middleware also installs the logger as `context.logger`.

## Signature

```ts
const Logger: ContextKey<LoggerFunction>;

```