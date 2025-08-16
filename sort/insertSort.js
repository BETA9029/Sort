import { compare } from './compare.js';
/**
 * レコードの配列を挿入ソートアルゴリズムでソートする。
 * @param {Array<Object>} records - ソート対象のレコード配列
 * @param {string} sortKey - ソートのキーとなるプロパティ名
 * @param {boolean} [isDescending] - 降順フラグ
 * @returns {Array<Object>} ソート済みの新しい配列
 */
function insertSort(records, sortKey, isDescending) {
  const sortedRecords = [...records];
  const recordSize = sortedRecords.length;

  for (let i = 1; i < recordSize; i++) {
    const key = sortedRecords[i];
    let j = i - 1;

    while (j >= 0 && compare(key, sortedRecords[j], sortKey, isDescending) > 0) {
      sortedRecords[j + 1] = sortedRecords[j];
      j--;
    }

    sortedRecords[j + 1] = key;
  }
  return sortedRecords;
}

export { insertSort };
