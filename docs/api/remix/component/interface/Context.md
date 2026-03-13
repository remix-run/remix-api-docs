---
title: Context
---

# Context

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/component/src/lib/component.ts#L117" target="_blank">View Source</a>

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

### get<ComponentType>(component: ComponentType): ContextFrom<ComponentType>

Reads the context value associated with the given component type.

#### component

### get(component: symbol | ElementType): unknown

Reads the context value associated with the given component key.

#### component

### set(values: C): void

Replaces the current context value for this component instance.

#### values