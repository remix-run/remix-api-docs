---
title: RouterTypes
source: https://github.com/remix-run/remix/blob/main/packages/fetch-router/src/lib/router-types.ts#L19
---

# RouterTypes

## Summary

Ambient router type configuration for application-wide defaults.

Apps may augment this interface to define the default request context used by
`createAction()` and `createController()`. Multi-router apps should avoid this
global default and pass explicit context types instead.

## Signature

```ts
interface RouterTypes
```