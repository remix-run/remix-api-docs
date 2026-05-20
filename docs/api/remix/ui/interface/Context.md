---
title: Context
---

# Context

## Summary

Context storage API exposed on component handles.

## Signature

```ts
interface Context<C> {
  get<ComponentType>(component: ComponentType): ContextFrom<ComponentType>;
  get(component: symbol | ElementType): unknown;
  set(values: C): void;
}

```

## Methods

### `get<ComponentType>(component: ComponentType): ContextFrom<ComponentType>`

Reads the context value associated with the given component type.



### `get(component: symbol | ElementType): unknown`

Reads the context value associated with the given component key.



### `set(values: C): void`

Replaces the current context value for this component instance.

