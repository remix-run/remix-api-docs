---
title: Terminal
source: https://github.com/remix-run/remix/blob/main/packages/terminal/src/lib/terminal.ts#L53
---

# Terminal

## Summary

Testable abstraction around terminal input, output, styles, and controls.

## Signature

```ts
interface Terminal {
  env: TerminalEnvironment;
  isInteractive: boolean;
  isTTY: boolean;
  stderr: TerminalOutputStream;
  stdin: TerminalInputStream;
  stdout: TerminalOutputStream;
  styles: TerminalStyles;
  clearLine(): void;
  cursorTo(column: number, row: number): void;
  eraseDown(): void;
  error(value: string): void;
  errorLine(value: string): void;
  hideCursor(): void;
  moveCursor(columns: number, rows: number): void;
  showCursor(): void;
  write(value: string): void;
  writeLine(value: string): void;
}

```

## Properties

### `env`

Environment variables used by this terminal.

### `isInteractive`

Whether both input and output streams are attached to TTYs.

### `isTTY`

Whether the output stream is attached to a TTY.

### `stderr`

Output stream used for error output.

### `stdin`

Input stream used for interactivity detection.

### `stdout`

Output stream used for normal output.

### `styles`

Style helpers configured for this terminal's output stream.

## Methods

### `clearLine(): void`

Clears the current output line.



### `cursorTo(column: number, row: number): void`

Moves the output cursor to a zero-based column and optional row.

#### Parameters

##### `column`

Zero-based output column.

##### `row`

Optional zero-based output row.

### `eraseDown(): void`

Erases output from the cursor through the end of the terminal.



### `error(value: string): void`

Writes a value to the error output stream.

#### Parameters

##### `value`

Text to write.

### `errorLine(value: string): void`

Writes a value and trailing newline to the error output stream.

#### Parameters

##### `value`

Text to write (defaults to an empty string).

### `hideCursor(): void`

Hides the terminal cursor.



### `moveCursor(columns: number, rows: number): void`

Moves the output cursor by relative column and row offsets.

#### Parameters

##### `columns`

Relative column offset.

##### `rows`

Relative row offset.

### `showCursor(): void`

Shows the terminal cursor.



### `write(value: string): void`

Writes a value to the normal output stream.

#### Parameters

##### `value`

Text to write.

### `writeLine(value: string): void`

Writes a value and trailing newline to the normal output stream.

#### Parameters

##### `value`

Text to write (defaults to an empty string).