---
title: FileStorage
source: https://github.com/remix-run/remix/blob/main/packages/file-storage/src/lib/file-storage.ts#L10
---

# FileStorage

## Summary

A key/value interface for storing `File` objects.

## Signature

```ts
interface FileStorage<file> {
  get(key: string): file | Promise<file | null> | null;
  has(key: string): boolean | Promise<boolean>;
  list<T extends ListOptions>(
    options: T,
  ): ListResult<T> | Promise<ListResult<T>>;
  put(key: string, file: File): file | Promise<file>;
  remove(key: string): void | Promise<void>;
  set(key: string, file: File): void | Promise<void>;
}

```

## Methods

### `get(key: string): file | Promise<file | null> | null`

Get the file at the given key.

#### Parameters

##### `key`

The key to look up

### `has(key: string): boolean | Promise<boolean>`

Check if a file with the given key exists.

#### Parameters

##### `key`

The key to look up

### `list<T extends ListOptions>(options: T): ListResult<T> | Promise<ListResult<T>>`

List the files in storage.

The following `options` are available:

- `cursor`: An opaque string that allows you to paginate over the keys in storage
- `includeMetadata`: If `true`, include file metadata in the result
- `limit`: The maximum number of files to return
- `prefix`: Only return keys that start with this string

For example, to list all files under keys that start with `user123/`:

```ts
let result = await storage.list({ prefix: 'user123/' });
console.log(result.files);
// [
//   { key: "user123/..." },
//   { key: "user123/..." },
//   ...
// ]
```

`result.files` will be an array of `{ key: string }` objects. To include metadata about each
file, use `includeMetadata: true`.

```ts
let result = await storage.list({ prefix: 'user123/', includeMetadata: true });
console.log(result.files);
// [
//   {
//     key: "user123/...",
//     lastModified: 1737955705270,
//     name: "hello.txt",
//     size: 16,
//     type: "text/plain"
//   },
//   ...
// ]
```

Pagination is done via an opaque `cursor` property in the list result object. If it is not
`undefined`, there are more files to list. You can list them by passing the `cursor` back in
the `options` object on the next call.

```ts
let result = await storage.list();

console.log(result.files);

if (result.cursor !== undefined) {
  let result2 = await storage.list({ cursor: result.cursor });
}
```

Use the `limit` option to limit how many results you get back in the `files` array.

#### Parameters

##### `options`

Options for the list operation

### `put(key: string, file: File): file | Promise<file>`

Put a `File` in storage and return a new file backed by this storage.

#### Parameters

##### `key`

The key to store the file under

##### `file`

The file to store

### `remove(key: string): void | Promise<void>`

Remove the file with the given key from storage.

#### Parameters

##### `key`

The key to remove

### `set(key: string, file: File): void | Promise<void>`

Put a `File` in storage at the given key.

#### Parameters

##### `key`

The key to store the file under

##### `file`

The file to store