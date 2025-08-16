import { compare } from './compare.js';
import { heapSort } from './heapSort.js';
import { insertSort } from './insertSort.js';

/**
 * レコードの配列をイントロソートアルゴリズムでソートする。
 * @param {Array<Object>} records - ソート対象のレコード配列
 * @param {string} sortKey - ソートのキーとなるプロパティ名
 * @param {boolean} [isDescending] - 降順フラグ
 * @returns {Array<Object>} ソート済みの新しい配列
 */

function introSort(records, sortKey, isDescending) {
  const maxDepth = 2 * Math.floor(Math.log2(records.length));
  return introsortUtil(records, maxDepth, sortKey, isDescending);
}

function introsortUtil(records, depthLimit, sortKey, isDescending) {
  const size = records.length;

  if (size <= 16) {
    return insertSort(records, sortKey, isDescending);
  }

  if (depthLimit === 0) {
    return heapSort(records, sortKey, isDescending);
  }

  const pivot = records[records.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < size - 1; i++) {
    if (compare(records[i], pivot, sortKey, isDescending) > 0) {
      left.push(records[i]);
    } else {
      right.push(records[i]);
    }
  }

  return [
    ...introsortUtil(left, depthLimit - 1, sortKey, isDescending),
    pivot,
    ...introsortUtil(right, depthLimit - 1, sortKey, isDescending),
  ];
}

export { introSort };
