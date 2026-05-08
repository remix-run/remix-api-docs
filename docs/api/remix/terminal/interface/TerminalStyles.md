---
title: TerminalStyles
source: https://github.com/remix-run/remix/blob/main/packages/terminal/src/lib/styles.ts#L20
---

# TerminalStyles

## Summary

Style helpers returned by `createStyles()` and `createTerminal()`.

## Signature

```ts
interface TerminalStyles {
  bgBlack: TerminalStyle;
  bgBlackBright: TerminalStyle;
  bgBlue: TerminalStyle;
  bgBlueBright: TerminalStyle;
  bgCyan: TerminalStyle;
  bgCyanBright: TerminalStyle;
  bgGray: TerminalStyle;
  bgGreen: TerminalStyle;
  bgGreenBright: TerminalStyle;
  bgGrey: TerminalStyle;
  bgMagenta: TerminalStyle;
  bgMagentaBright: TerminalStyle;
  bgRed: TerminalStyle;
  bgRedBright: TerminalStyle;
  bgWhite: TerminalStyle;
  bgWhiteBright: TerminalStyle;
  bgYellow: TerminalStyle;
  bgYellowBright: TerminalStyle;
  black: TerminalStyle;
  blackBright: TerminalStyle;
  blue: TerminalStyle;
  blueBright: TerminalStyle;
  bold: TerminalStyle;
  cyan: TerminalStyle;
  cyanBright: TerminalStyle;
  dim: TerminalStyle;
  enabled: boolean;
  gray: TerminalStyle;
  green: TerminalStyle;
  greenBright: TerminalStyle;
  grey: TerminalStyle;
  inverse: TerminalStyle;
  italic: TerminalStyle;
  magenta: TerminalStyle;
  magentaBright: TerminalStyle;
  overline: TerminalStyle;
  red: TerminalStyle;
  redBright: TerminalStyle;
  reset: string;
  strikethrough: TerminalStyle;
  underline: TerminalStyle;
  white: TerminalStyle;
  whiteBright: TerminalStyle;
  yellow: TerminalStyle;
  yellowBright: TerminalStyle;
  format(value: string, styles: TerminalStyleName[]): string;
}

```

## Properties

### `bgBlack`

Formats text with a black background.

### `bgBlackBright`

Formats text with a bright black background.

### `bgBlue`

Formats text with a blue background.

### `bgBlueBright`

Formats text with a bright blue background.

### `bgCyan`

Formats text with a cyan background.

### `bgCyanBright`

Formats text with a bright cyan background.

### `bgGray`

Formats text with a gray background.

### `bgGreen`

Formats text with a green background.

### `bgGreenBright`

Formats text with a bright green background.

### `bgGrey`

Formats text with a grey background.

### `bgMagenta`

Formats text with a magenta background.

### `bgMagentaBright`

Formats text with a bright magenta background.

### `bgRed`

Formats text with a red background.

### `bgRedBright`

Formats text with a bright red background.

### `bgWhite`

Formats text with a white background.

### `bgWhiteBright`

Formats text with a bright white background.

### `bgYellow`

Formats text with a yellow background.

### `bgYellowBright`

Formats text with a bright yellow background.

### `black`

Formats text with black foreground color.

### `blackBright`

Formats text with bright black foreground color.

### `blue`

Formats text with blue foreground color.

### `blueBright`

Formats text with bright blue foreground color.

### `bold`

Formats text with bold intensity.

### `cyan`

Formats text with cyan foreground color.

### `cyanBright`

Formats text with bright cyan foreground color.

### `dim`

Formats text with dim intensity.

### `enabled`

Whether style helpers emit ANSI escape sequences.

### `gray`

Formats text with gray foreground color.

### `green`

Formats text with green foreground color.

### `greenBright`

Formats text with bright green foreground color.

### `grey`

Formats text with grey foreground color.

### `inverse`

Formats text with inverted foreground and background colors.

### `italic`

Formats text with italic styling.

### `magenta`

Formats text with magenta foreground color.

### `magentaBright`

Formats text with bright magenta foreground color.

### `overline`

Formats text with an overline.

### `red`

Formats text with red foreground color.

### `redBright`

Formats text with bright red foreground color.

### `reset`

ANSI reset sequence when styles are enabled, otherwise an empty string.

### `strikethrough`

Formats text with a strikethrough.

### `underline`

Formats text with an underline.

### `white`

Formats text with white foreground color.

### `whiteBright`

Formats text with bright white foreground color.

### `yellow`

Formats text with yellow foreground color.

### `yellowBright`

Formats text with bright yellow foreground color.

## Methods

### `format(value: string, styles: TerminalStyleName[]): string`

Formats text with one or more named terminal styles.

#### Parameters

##### `value`

Text to format.

##### `styles`

Style names to apply, from outermost to innermost.