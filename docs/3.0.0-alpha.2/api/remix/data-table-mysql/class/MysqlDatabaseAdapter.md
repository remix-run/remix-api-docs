---
title: MysqlDatabaseAdapter
---

# MysqlDatabaseAdapter

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table-mysql/src/lib/adapter.ts#L67" target="_blank">View Source</a>

## Summary

`DatabaseAdapter` implementation for mysql-compatible clients.

## Constructor

### client

### options

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