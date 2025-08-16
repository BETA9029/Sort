import { compare } from './compare.js';

const testData = {
  date: '2025-10-10',
  name: 'John',
  score: 90,
};

const testData2 = {
  date: '2025-10-09',
  name: 'Jane',
  score: 80,
};

describe('比較関数のテスト', () => {
  test('2025-10-10と2025-10-09を昇順で比較した場合、値は負の値になる', () => {
    expect(compare(testData, testData2, 'date', false)).toBeLessThan(0);
  });

  test('2025-10-10と2025-10-09を降順で比較した場合、値は正の値になる', () => {
    expect(compare(testData, testData2, 'date', true)).toBeGreaterThan(0);
  });

  test('2025-10-09と2025-10-10を昇順で比較した場合、値は正の値になる', () => {
    expect(compare(testData2, testData, 'date', false)).toBeGreaterThan(0);
  });

  test('2025-10-09と2025-10-10を降順で比較した場合、値は負の値になる', () => {
    expect(compare(testData2, testData, 'date', true)).toBeLessThan(0);
  });

  test('2025-10-10と2025-10-10を昇順で比較した場合、値は0になる', () => {
    expect(compare(testData, testData, 'date', false)).toBe(0);
  });

  test('2025-10-10と2025-10-10を降順で比較した場合、値は0になる', () => {
    expect(compare(testData, testData, 'date', true)).toBe(0);
  });

  test('JohnとJaneを昇順で比較した場合、値は負の値になる', () => {
    expect(compare(testData, testData2, 'name', false)).toBeLessThan(0);
  });

  test('JohnとJaneを降順で比較した場合、値は正の値になる', () => {
    expect(compare(testData, testData2, 'name', true)).toBeGreaterThan(0);
  });

  test('JaneとJohnを昇順で比較した場合、値は正の値になる', () => {
    expect(compare(testData2, testData, 'name', false)).toBeGreaterThan(0);
  });

  test('JaneとJohnを降順で比較した場合、値は負の値になる', () => {
    expect(compare(testData2, testData, 'name', true)).toBeLessThan(0);
  });

  test('JaneとJaneを昇順で比較した場合、値は0になる', () => {
    expect(compare(testData2, testData2, 'name', false)).toBe(0);
  });

  test('JaneとJaneを降順で比較した場合、値は0になる', () => {
    expect(compare(testData2, testData2, 'name', true)).toBe(0);
  });

  test('90と80を昇順で比較した場合、値は負の値になる', () => {
    expect(compare(testData, testData2, 'score', false)).toBeLessThan(0);
  });

  test('90と80を降順で比較した場合、値は正の値になる', () => {
    expect(compare(testData, testData2, 'score', true)).toBeGreaterThan(0);
  });

  test('80と90を昇順で比較した場合、値は正の値になる', () => {
    expect(compare(testData2, testData, 'score', false)).toBeGreaterThan(0);
  });

  test('80と90を降順で比較した場合、値は負の値になる', () => {
    expect(compare(testData2, testData, 'score', true)).toBeLessThan(0);
  });

  test('80と80を昇順で比較した場合、値は0になる', () => {
    expect(compare(testData2, testData2, 'score', false)).toBe(0);
  });

  test('80と80を降順で比較した場合、値は0になる', () => {
    expect(compare(testData2, testData2, 'score', true)).toBe(0);
  });
});
