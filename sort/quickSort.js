import { compare } from './compare.js';

/**
 * レコードの配列をクイックソートアルゴリズムでソートする。
 * @param {Array<Object>} records - ソート対象のレコード配列
 * @param {string} sortKey - ソートのキーとなるプロパティ名
 * @param {boolean} [isDescending] - 降順フラグ
 * @returns {Array<Object>} ソート済みの新しい配列
 */
function quickSort(records, sortKey, isDescending = false) {
  if (records.length <= 1) {
    return records;
  }

  const pivot = records[records.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < records.length - 1; i++) {
    if (compare(records[i], pivot, sortKey, isDescending) > 0) {
      left.push(records[i]);
    } else {
      right.push(records[i]);
    }
  }

  return [...quickSort(left, sortKey, isDescending), pivot, ...quickSort(right, sortKey, isDescending)];
}

export { quickSort };
