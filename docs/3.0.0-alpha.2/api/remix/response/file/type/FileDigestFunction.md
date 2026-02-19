---
title: FileDigestFunction
---

# FileDigestFunction

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/response/src/lib/file.ts#L47" target="_blank">View Source</a>

## Summary

Custom function for computing file digests.

## Signature

```ts
type FileDigestFunction<file> = (file: file) => Promise<string>;

```