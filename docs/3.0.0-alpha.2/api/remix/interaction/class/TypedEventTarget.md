---
title: TypedEventTarget
---

# TypedEventTarget

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/interaction/src/lib/interaction.ts#L304" target="_blank">View Source</a>

## Summary

An `EventTarget` subclass with typed event maps.

## Constructor

## Properties

### __eventMap

## Methods

### addEventListener(type: type, listener: TypedEventListener<eventMap>[type], options: AddEventListenerOptions): void

#### type

#### listener

#### options

### dispatchEvent(event: Event): boolean

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### event

### removeEventListener(type: type, listener: TypedEventListener<eventMap>[type], options: EventListenerOptions): void

#### type

#### listener

#### options