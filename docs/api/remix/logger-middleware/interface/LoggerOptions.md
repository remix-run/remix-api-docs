---
title: LoggerOptions
source: https://github.com/remix-run/remix/blob/main/packages/logger-middleware/src/lib/logger.ts#L24
---

# LoggerOptions

## Summary

Options for the [`logger`](/api/remix/logger-middleware/function/logger/) middleware.

## Signature

```ts
interface LoggerOptions {
  colors?: boolean;
  format?: string;
  log?: LoggerFunction;
}

```

## Properties

### `colors`

Enables ANSI colors for high-signal log tokens.

By default, colors are enabled when terminal color detection allows them. Set this to `false`
to opt out or `true` to force colors on. When the `process` global is defined, color
detection respects `CI`, `NO_COLOR`, `FORCE_COLOR`, `TERM=dumb`, and TTY output streams.

The following tokens are colorized when colors are enabled:

- `%method`
- `%status`
- `%duration`
- `%contentLength`

### `format`

The format to use for log messages.

The following tokens are available:

- `%date` - The date and time of the request in Apache/nginx log format (dd/Mon/yyyy:HH:mm:ss ±zzzz)
- `%dateISO` - The date and time of the request in ISO format
- `%duration` - The duration of the request in milliseconds
- `%contentLength` - The `Content-Length` header of the response
- `%contentType` - The `Content-Type` header of the response
- `%host` - The host of the request URL
- `%hostname` - The hostname of the request URL
- `%method` - The method of the request
- `%path` - The pathname + search of the request URL
- `%pathname` - The pathname of the request URL
- `%port` - The port of the request
- `%query` - The query (search) string of the request URL
- `%referer` - The `Referer` header of the request
- `%search` - The search string of the request URL
- `%status` - The status code of the response
- `%statusText` - The status text of the response
- `%url` - The full URL of the request
- `%userAgent` - The `User-Agent` header of the request

### `log`

The function to use to log messages.