/**
 * 2つのレコードを比較する内部関数。
 * @param {Object} a - 比較対象のレコードA
 * @param {Object} b - 比較対象のレコードB
 * @returns {number} aがbより小さい場合は負の値、大きい場合は正の値、等しい場合は0を返す。
 */
function compare(a, b, sortKey, isDescending) {
  const valA = a[sortKey];
  const valB = b[sortKey];

  if (Date.parse(valA) && Date.parse(valB)) {
    return isDescending ? Date.parse(valA) - Date.parse(valB) : Date.parse(valB) - Date.parse(valA);
  }
  if (isNaN(valA) && isNaN(valB)) {
    return isDescending ? String(valA).localeCompare(String(valB)) : String(valB).localeCompare(String(valA));
  }
  return isDescending ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
}
export { compare };
