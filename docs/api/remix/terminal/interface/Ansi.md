---
title: Ansi
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/terminal/src/lib/ansi.ts#L69
---

# Ansi

## Signature

```ts
interface Ansi {
  bgBlack: string;
  bgBlackBright: string;
  bgBlue: string;
  bgBlueBright: string;
  bgCyan: string;
  bgCyanBright: string;
  bgGray: string;
  bgGreen: string;
  bgGreenBright: string;
  bgGrey: string;
  bgMagenta: string;
  bgMagentaBright: string;
  bgRed: string;
  bgRedBright: string;
  bgWhite: string;
  bgWhiteBright: string;
  bgYellow: string;
  bgYellowBright: string;
  black: string;
  blackBright: string;
  blue: string;
  blueBright: string;
  bold: string;
  clearLine: string;
  cyan: string;
  cyanBright: string;
  dim: string;
  eraseDown: string;
  gray: string;
  green: string;
  greenBright: string;
  grey: string;
  hideCursor: string;
  inverse: string;
  italic: string;
  magenta: string;
  magentaBright: string;
  overline: string;
  red: string;
  redBright: string;
  reset: string;
  showCursor: string;
  strikethrough: string;
  underline: string;
  white: string;
  whiteBright: string;
  yellow: string;
  yellowBright: string;
  cursorTo(column: number, row: number): string;
  moveCursor(columns: number, rows: number): string;
}

```