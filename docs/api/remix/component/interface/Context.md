---
title: Context
---

# Context

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/component/src/lib/component.ts#L135" target="_blank">View Source</a>

## Summary

Set and get values in an element tree for indirect ancestor/descendant
communication.

## Signature

```ts
interface Context<C> {
  get(component: ComponentType): ContextFrom<ComponentType>;
  set(values: C): void;
}

```

## Methods

### get(component: ComponentType): ContextFrom<ComponentType>

#### component

### set(values: C): void

#### values