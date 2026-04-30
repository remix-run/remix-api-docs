---
title: TestContext
source: https://github.com/remix-run/remix/blob/main/packages/test/src/lib/context.ts#L29
---

# TestContext

## Summary

Test Context providing utilities for testing via remix-test.  The context is
passed as the first argument to the test/it functions.

## Signature

```ts
interface TestContext {
  mock: { fn: any; method: any };
  after(fn: () => void): void;
  serve(server: TestServer): Promise<Page>;
  useFakeTimers(): FakeTimers;
}

```

## Properties

### mock

Mock tracker for the current test. Mirrors the shape of Node's
`t.mock`. Method mocks created here are auto-restored on test completion.

## Methods

### after(fn: () => void): void

Registers a cleanup function to be called after the test completes.

#### `fn`

The cleanup function to execute

### serve(server: TestServer): Promise<Page>

Wires a running test server up to a Playwright page so the test can drive
it. The server is closed automatically when the test ends. Pair with
`createTestServer` from `@remix-run/node-fetch-server/test` (or any other
source of a `{ baseUrl, close }` handle) to spin up the server first.

#### `server`

The running server the page should target

### useFakeTimers(): FakeTimers

Activates fake timers for testing time-dependent code.