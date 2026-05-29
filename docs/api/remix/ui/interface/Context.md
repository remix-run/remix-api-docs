---
title: Context
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/ui/src/runtime/component.ts#L127
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
  get<ComponentType>(component: ComponentType): ContextFrom<ComponentType>;
  get(component: symbol | ElementType): unknown;
  set(values: C): void;
}

```

## Methods

### `get<ComponentType>(component: ComponentType): ContextFrom<ComponentType>`

Reads the context value from the nearest ancestor instance of the given component type.



### `get(component: symbol | ElementType): unknown`

Reads an unknown context value for an untyped lookup.



### `set(values: C): void`

Replaces the current context value for this component instance.

