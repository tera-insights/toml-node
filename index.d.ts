declare module 'toml' {
  export type PositionMap = { [path: string]: { line: number, col: number }};
  export function parse(input: string, map: PositionMap): any;
}
