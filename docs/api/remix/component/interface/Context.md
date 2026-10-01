---
title: "Context"
source: "https://github.com/remix-run/remix/blob/remix@3.0.0/packages/component/src/runtime/component.ts#L139"
---

# Context

## Summary

Context storage API exposed on component handles.

Context values are keyed by provider component identity. `get(Component)`
reads the nearest ancestor instance whose component function is exactly
`Component`, so nested instances of the same provider shadow outer instances
while different component types remain independent.

## Signature

```ts
interface Context<C> {
  get<ComponentType>(component: ComponentType): ContextFrom<ComponentType>
  get(component: symbol | ElementType): unknown
  set(values: C): void
}

```

## Methods

### `get<ComponentType>(component: ComponentType): ContextFrom<ComponentType>`

Reads the nearest ancestor instance of the given component type.
Read during render to observe replacement values on later renders.

#### Parameters

##### `component`

Provider component whose identity selects the context.

### `get(component: symbol | ElementType): unknown`

Reads context without an inferred provider value type.

#### Parameters

##### `component`

Provider component identity.

### `set(values: C): void`

Replaces this component's provided value without scheduling a render.
Call `handle.update()` when descendants should render with the new value.

#### Parameters

##### `values`

Value to provide to descendants.