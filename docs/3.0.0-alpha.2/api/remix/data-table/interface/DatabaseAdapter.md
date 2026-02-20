---
title: DatabaseAdapter
---

# DatabaseAdapter

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/adapter.ts#L199" target="_blank">View Source</a>

## Summary

Runtime contract implemented by concrete database adapters.

## Signature

```ts
interface DatabaseAdapter {
  capabilities: AdapterCapabilities;
  dialect: string;
  beginTransaction(options: TransactionOptions): Promise<TransactionToken>;
  commitTransaction(token: TransactionToken): Promise<void>;
  createSavepoint(token: TransactionToken, name: string): Promise<void>;
  execute(request: AdapterExecuteRequest): Promise<AdapterResult>;
  releaseSavepoint(token: TransactionToken, name: string): Promise<void>;
  rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>;
  rollbackTransaction(token: TransactionToken): Promise<void>;
}

```

## Properties

### capabilities

### dialect

## Methods

### beginTransaction(options: TransactionOptions): Promise<TransactionToken>

#### options

### commitTransaction(token: TransactionToken): Promise<void>

#### token

### createSavepoint(token: TransactionToken, name: string): Promise<void>

#### token

#### name

### execute(request: AdapterExecuteRequest): Promise<AdapterResult>

#### request

### releaseSavepoint(token: TransactionToken, name: string): Promise<void>

#### token

#### name

### rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>

#### token

#### name

### rollbackTransaction(token: TransactionToken): Promise<void>

#### token