---
title: TypedEventTarget
source: https://github.com/remix-run/remix/blob/main/packages/ui/src/runtime/typed-event-target.ts#L4
---

# TypedEventTarget

## Summary

An `EventTarget` subclass with typed event maps.

## Signature

```ts
class TypedEventTarget<eventMap> {
  constructor(): TypedEventTarget;

  // Properties
  __eventMap?: eventMap;

  // Methods
  addEventListener<type extends string>(
    type: type,
    listener: TypedEventListener<eventMap>[type],
    options: AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options: boolean | AddEventListenerOptions,
  ): void;
  dispatchEvent(event: Event): boolean;
  removeEventListener<type extends string>(
    type: type,
    listener: TypedEventListener<eventMap>[type],
    options: EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options: EventListenerOptions,
  ): void;
}

```

## Constructor Params

## Properties

### `__eventMap`

Phantom property that carries the event map type on instances.

## Methods

### `addEventListener<type extends string>(type: type, listener: TypedEventListener<eventMap>[type], options: AddEventListenerOptions): void`

Adds a listener for a typed event name from the event map.

#### `type`

#### `listener`

Listener to invoke when the event fires.

#### `options`

Listener registration options.

### `addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options: boolean | AddEventListenerOptions): void`

Adds a listener using the standard untyped `EventTarget` signature.

#### `type`

Event name to listen for.

#### `listener`

Listener to invoke when the event fires.

#### `options`

Listener registration options.

### `dispatchEvent(event: Event): boolean`

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### `event`

### `removeEventListener<type extends string>(type: type, listener: TypedEventListener<eventMap>[type], options: EventListenerOptions): void`

Removes a listener for a typed event name from the event map.

#### `type`

#### `listener`

Previously registered listener.

#### `options`

Listener removal options.

### `removeEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options: EventListenerOptions): void`

Removes a listener using the standard untyped `EventTarget` signature.

#### `type`

Event name to stop listening for.

#### `listener`

Previously registered listener.

#### `options`

Listener removal options.