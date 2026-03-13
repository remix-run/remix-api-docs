---
title: S3FileStorageOptions
---

# S3FileStorageOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/file-storage-s3/src/lib/s3.ts#L16" target="_blank">View Source</a>

## Summary

Configuration for an S3-backed `FileStorage` implementation.

## Signature

```ts
interface S3FileStorageOptions {
  accessKeyId: string;
  bucket: string;
  endpoint?: string;
  fetch?: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    (input: string | Request | URL, init?: RequestInit): Promise<Response>;
  };
  forcePathStyle?: boolean;
  region: string;
  secretAccessKey: string;
  sessionToken?: string;
}

```

## Properties

### accessKeyId

AWS access key ID used to sign S3 requests.

### bucket

Bucket name used for all file storage operations.

### endpoint

Custom S3-compatible endpoint URL. Defaults to AWS S3 for the given region.

### fetch

Optional fetch implementation.

### forcePathStyle

Whether to use path-style bucket URLs (`/bucket/key`). Defaults to `true` when `endpoint` is
provided and `false` otherwise.

### region

AWS region for request signing.

### secretAccessKey

AWS secret access key used to sign S3 requests.

### sessionToken

Optional session token for temporary credentials.