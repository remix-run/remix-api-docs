---
title: Interaction
---

# Interaction

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/interaction/src/lib/interaction.ts#L42" target="_blank">View Source</a>

## Summary

Context object provided to interaction setup functions as a parameter.

## Signature

```ts
interface Interaction {
  signal: AbortSignal;
  target: EventTarget;
  on(target: target, listeners: EventListeners<target>): void;
}

```

## Properties

### signal

The abort signal that will dispose this interaction when aborted.

### target

The target element this interaction is being set up on.

## Methods

### on(target: target, listeners: EventListeners<target>): void

Create a container on a target with listeners. Automatically passes
through signal from the parent container.

#### target

#### listeners