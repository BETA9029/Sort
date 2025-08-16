import { stringify } from 'csv-stringify/sync';
import { quickSort } from './quickSort.js';
import { introSort } from './introSort.js';

function getSortedCsv(records, sortKey, isDescending, sortType) {
  const sortFunction = {
    quickSort: quickSort,
    introSort: introSort,
  };
  const sortedRecords = sortFunction[sortType](records, sortKey, isDescending);

  return stringify(sortedRecords, {
    header: true,
  });
}

export { getSortedCsv };
