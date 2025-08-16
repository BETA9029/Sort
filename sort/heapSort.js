import { compare } from './compare.js';

/**
 * レコードの配列をヒープソートアルゴリズムでソートする。
 * @param {Array<Object>} records - ソート対象のレコード配列
 * @param {string} sortKey - ソートのキーとなるプロパティ名
 * @param {boolean} [isDescending] - 降順フラグ
 * @returns {Array<Object>} ソート済みの新しい配列
 */
function heapSort(records, sortKey, isDescending) {
  if (records.length <= 1) {
    return records;
  }

  const heap = [...records];
  const recordSize = records.length;

  for (let parentIndex = Math.floor(recordSize / 2) - 1; parentIndex >= 0; parentIndex--) {
    heapify(heap, parentIndex, recordSize, sortKey, isDescending);
  }

  for (let heapSize = recordSize - 1; heapSize > 0; heapSize--) {
    [heap[0], heap[heapSize]] = [heap[heapSize], heap[0]];
    heapify(heap, 0, heapSize, sortKey, isDescending);
  }

  return heap;
}

function heapify(array, parentIndex, heapSize, sortKey, isDescending) {
  let largest = parentIndex;
  const left = 2 * parentIndex + 1;
  const right = 2 * parentIndex + 2;

  if (left < heapSize && compare(array[largest], array[left], sortKey, isDescending) > 0) {
    largest = left;
  }
  if (right < heapSize && compare(array[largest], array[right], sortKey, isDescending) > 0) {
    largest = right;
  }
  if (largest === parentIndex) {
    return;
  }
  [array[parentIndex], array[largest]] = [array[largest], array[parentIndex]];
  heapify(array, largest, heapSize, sortKey, isDescending);
}

export { heapSort };
