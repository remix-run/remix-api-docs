---
title: LoggerOptions
---

# LoggerOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/logger-middleware/src/lib/logger.ts#L6" target="_blank">View Source</a>

## Summary

Options for the `logger` middleware.

## Signature

```ts
interface LoggerOptions {
  format?: string;
  log?: (message: string) => void;
}

```

## Properties

### format

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

### log

The function to use to log messages.