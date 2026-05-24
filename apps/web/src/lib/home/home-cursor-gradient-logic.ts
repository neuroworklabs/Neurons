/*
 *  author: Yagnik Poshiya
 *  github: https://github.com/neuroworklabs/Neurons
 */

export type CursorPoint = {
  x: number;
  y: number;
};

export const DEFAULT_CURSOR_POINT: CursorPoint = { x: 0.5, y: 0.5 };

export function lerpCursor(
  current: CursorPoint,
  target: CursorPoint,
  factor: number,
): CursorPoint {
  return {
    x: current.x + (target.x - current.x) * factor,
    y: current.y + (target.y - current.y) * factor,
  };
}

export function cursorToPercent(point: CursorPoint): { x: string; y: string } {
  return {
    x: `${point.x * 100}%`,
    y: `${point.y * 100}%`,
  };
}

export function ambientOffsetFromCursor(point: CursorPoint): { x: number; y: number } {
  return {
    x: (point.x - 0.5) * 14,
    y: (point.y - 0.5) * 10,
  };
}
