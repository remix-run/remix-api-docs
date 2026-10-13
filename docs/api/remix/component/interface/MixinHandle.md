---
title: "MixinHandle"
source: "https://github.com/remix-run/remix/blob/main/packages/component/src/runtime/mixins/mixin.ts#L125"
---

# MixinHandle

## Summary

Runtime handle passed to mixin setup functions.

The node type is covariant so a handle for a subtype host can be used by a mixin authored for
its base type. Mixin render callbacks receive host props with children and raw HTML props
removed.
Returned mixin elements may patch host attributes and nested `mix`, but cannot replace
the host subtree.

## Signature

```ts
interface MixinHandle<node, props> {
  context: MixinContext
  element: MixinElement<node, props>
  frame: FrameHandle
  id: string
  signal: AbortSignal
  addEventListener<type extends keyof MixinHandleEventMap<node>>(
    type: type,
    listener: TypedEventListener<MixinHandleEventMap<node>>[type],
    options: AddEventListenerOptions,
  ): void
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options: boolean | AddEventListenerOptions,
  ): void
  dispatchEvent(event: Event): boolean
  queueTask(task: (node: node, signal: AbortSignal) => void): void
  removeEventListener<type extends keyof MixinHandleEventMap<node>>(
    type: type,
    listener: TypedEventListener<MixinHandleEventMap<node>>[type],
    options: EventListenerOptions,
  ): void
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options: EventListenerOptions,
  ): void
  update(): Promise<AbortSignal>
}

```

## Properties

### `context`

Reads context provided by an ancestor component.

### `element`

JSX element for forwarding host props, patching attributes, and composing nested mixins.

### `frame`

The frame containing this host.

### `id`

Identifier shared by the mixins bound to this host.

### `signal`

Signal aborted when this mixin slot is disposed, even if its host remains mounted.
Read it during setup or render and capture it for use in asynchronous callbacks.

## Methods

### `addEventListener<type extends keyof MixinHandleEventMap<node>>(type: type, listener: TypedEventListener<MixinHandleEventMap<node>>[type], options: AddEventListenerOptions): void`

Adds a listener for a typed event name from the event map.

#### Parameters

##### `type`

##### `listener`

Listener to invoke when the event fires.

##### `options`

Listener registration options.

### `addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options: boolean | AddEventListenerOptions): void`

Adds a listener using the standard untyped `EventTarget` signature.

#### Parameters

##### `type`

Event name to listen for.

##### `listener`

Listener to invoke when the event fires.

##### `options`

Listener registration options.

### `dispatchEvent(event: Event): boolean`

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)



### `queueTask(task: (node: node, signal: AbortSignal) => void): void`

Queues work after pending DOM updates and commit-phase callbacks.

#### Parameters

##### `task`

Callback receiving the bound host and its runtime lifetime signal.

### `removeEventListener<type extends keyof MixinHandleEventMap<node>>(type: type, listener: TypedEventListener<MixinHandleEventMap<node>>[type], options: EventListenerOptions): void`

Removes a listener for a typed event name from the event map.

#### Parameters

##### `type`

##### `listener`

Previously registered listener.

##### `options`

Listener removal options.

### `removeEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options: EventListenerOptions): void`

Removes a listener using the standard untyped `EventTarget` signature.

#### Parameters

##### `type`

Event name to stop listening for.

##### `listener`

Previously registered listener.

##### `options`

Listener removal options.

### `update(): Promise<AbortSignal>`

Schedules an update of the host's mixins without rerendering its owner component.

