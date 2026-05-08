---
title: createS3FileStorage
source: https://github.com/remix-run/remix/blob/main/packages/file-storage-s3/src/lib/s3.ts#L61
---

# createS3FileStorage

## Summary

Creates an S3-backed implementation of `FileStorage`.

This works with AWS S3 and S3-compatible providers (for example MinIO or LocalStack) by
overriding the `endpoint` option.

## Signature

```ts
function createS3FileStorage(options: S3FileStorageOptions): FileStorage;

```

## Parameters

### `options`

Configuration for the S3 backend

## Returns

A `FileStorage` implementation backed by S3