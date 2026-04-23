---
title: TestContext
---

# TestContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/test/src/lib/context.ts#L19" target="_blank">View Source</a>

## Summary

Test Context providing utilities for testing via remix-test.  The context is
passed as the first argument to the test/it functions.

## Signature

```ts
interface TestContext {
  mock: { fn: any; method: any };
  after(fn: () => void): void;
  serve(handler: (req: Request) => Promise<Response>): Promise<Page>;
}

```

## Properties

### mock

Mock tracker for the current test. Mirrors the shape of Node's
`t.mock`. Method mocks created here are auto-restored on test completion.

## Methods

### after(fn: () => void): void

Registers a cleanup function to be called after the test completes.

#### fn

The cleanup function to execute

### serve(handler: (req: Request) => Promise<Response>): Promise<Page>

Starts a test server with the provided request handler.

#### handler

Function handling incoming requests