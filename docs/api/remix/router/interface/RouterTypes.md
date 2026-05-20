---
title: RouterTypes
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