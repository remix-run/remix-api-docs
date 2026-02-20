---
title: on
---

# on

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/interaction/src/lib/interaction.ts#L288" target="_blank">View Source</a>

## Summary

### Description

Add event listeners with async reentry protection and semantic Interactions. Shorthand for `createContainer` without options.

## Signature

```ts
function on(target: target, listeners: EventListeners<target>): () => void;

```

## Example

```ts
import { on } from 'remix/interaction'
import { longPress } from 'remix/interaction/press'

let button = document.createElement('button')
let dispose = on(button, {
  click(event, signal) {
    console.log('clicked')
  },
  [longPress](event) {
    console.log('long pressed')
  },
})

// later
dispose()
```

## Params

### target

### listeners

The event listeners to add

## Returns

A function to dispose all listeners