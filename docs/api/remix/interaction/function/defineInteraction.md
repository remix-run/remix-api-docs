---
title: defineInteraction
---

# defineInteraction

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/interaction/src/lib/interaction.ts#L108" target="_blank">View Source</a>

## Summary

### Description

Defines an interaction type with its setup function.

### Example

```ts
import { defineInteraction, on } from 'remix/interaction'

// define the interaction
export let keydownEnter = defineInteraction('my:keydown-enter', KeydownEnter)

// Provide type safety for consumers
declare global {
  interface HTMLElementEventMap {
    [keydownEnter]: KeyboardEvent
  }
}

// setup the interaction
function KeydownEnter(handle: Interaction) {
  handle.on(handle.target, {
    keydown(event) {
      if (event.key === 'Enter') {
        handle.target.dispatchEvent(new KeyboardEvent(keydownEnter, { key: 'Enter' }))
      }
    },
  })
}

// then consumers use the string to bind the interaction
on(button, {
  [keydownEnter](event) {
    console.log('Enter key pressed')
  },
})
```

## Signature

```ts
function defineInteraction(type: type, interaction: InteractionSetup): type;

```

## Params

### type

### interaction

The setup function that configures the interaction

## Returns

The type string, for use as an event name