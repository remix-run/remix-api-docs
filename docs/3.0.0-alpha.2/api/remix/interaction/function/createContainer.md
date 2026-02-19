---
title: createContainer
---

# createContainer

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/interaction/src/lib/interaction.ts#L151" target="_blank">View Source</a>

## Summary

### Description

Creates an event container on a target with reentry protection and efficient
listener updates (primarily for vdom integrations). If you don't need to
update listeners in place, you can use `on` instead.

### Example

```ts
let button = document.createElement('button')
let container = createContainer(button)
container.set({
  click(event, signal) {
    console.log('clicked')
  },
})
```

Errors thrown in listeners are dispatched as `ErrorEvent` on the target
element with `bubbles: true`, allowing them to propagate up the DOM tree.

## Signature

```ts
function createContainer(
  target: target,
  options: ContainerOptions,
): EventsContainer<target>;

```

## Params

### target

### options

Optional configuration for the container

## Returns

An `EventsContainer` with `dispose()` and `set()` methods