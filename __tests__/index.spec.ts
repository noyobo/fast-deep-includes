import { fastDeepIncludes } from '../src';
import { describe, expect, it } from 'vitest';

describe('fastDeepIncludes', () => {
  it('returns true when both objects are identical', () => {
    expect(fastDeepIncludes({ a: 1 }, { a: 1 })).toBe(true);
  });

  it('returns true when right object is included in left object', () => {
    expect(fastDeepIncludes({ a: 1, b: 2 }, { a: 1 })).toBe(true);
  });

  it('returns false when right object is not included in left object', () => {
    expect(fastDeepIncludes({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  it('returns true when both arrays are identical', () => {
    expect(fastDeepIncludes([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(fastDeepIncludes([1, 2, null], [1, 2, null])).toBe(true);
  });

  it('returns true when right array is included in left array', () => {
    expect(fastDeepIncludes([1, 2, 3], [2, 3])).toBe(true);
    expect(fastDeepIncludes([1, 2, { a: 3 }], [{ a: 3 }, 2])).toBe(true);
  });

  it('returns false when right array is not included in left array', () => {
    expect(fastDeepIncludes([1, 2], [2, 3])).toBe(false);
    expect(fastDeepIncludes([1, 2], [2, undefined])).toBe(false);
    expect(fastDeepIncludes([1, 2, 3], [1, 2, 3, 4])).toBe(false);
  });

  it('returns false when left is an array and right is an object', () => {
    expect(fastDeepIncludes([1, 2, 3], { a: 1 })).toBe(false);
  });

  it('returns false when left is an object and right is an array', () => {
    expect(fastDeepIncludes({ a: 1 }, [1, 2, 3])).toBe(false);
  });

  it('returns true for nested objects when right object is included in left object', () => {
    expect(fastDeepIncludes({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true);
  });

  it('returns false for nested objects when right object is not included in left object', () => {
    expect(fastDeepIncludes({ a: { b: 2 } }, { a: { b: 3 } })).toBe(false);
  });

  it('returns true for nested arrays when right array is included in left array', () => {
    expect(
      fastDeepIncludes(
        [
          [1, 2],
          [3, 4],
        ],
        [[1, 2]]
      )
    ).toBe(true);
  });

  it('returns false for nested arrays when right array is not included in left array', () => {
    expect(
      fastDeepIncludes(
        [
          [1, 2],
          [3, 4],
        ],
        [[2, 3]]
      )
    ).toBe(false);
  });
});