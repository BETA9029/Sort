import inquirer from 'inquirer';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { getSortedCsv } from './sort/getSortedCsv.js';

main();

async function main() {
  try {
    const filePath = await inquirer.prompt({
      type: 'input',
      name: 'value',
      message: 'ソートするCSVファイルのパスを入力してください:',
      default: './test_data/test.csv',
      validate: (input) => {
        if (input) {
          return true;
        }
        return 'ファイルパスを入力してください。';
      },
    });

    const records = readFileSync(filePath.value);
    const availableColumns = getRecordsColumns(records);

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'sortKey',
        message: 'ソートの基準となる列名を選択してください:',
        choices: availableColumns,
      },
      {
        type: 'list',
        name: 'isDescending',
        message: '並べ方を選択してください:',
        choices: [
          { name: '昇順', value: false },
          { name: '降順', value: true },
        ],
        default: false,
      },
      {
        type: 'list',
        name: 'sortType',
        message: 'ソートアルゴリズムの種類を選択してください:',
        default: 'quickSort',
        choices: [
          { name: 'クイックソート', value: 'quickSort' },
          { name: 'イントロソート', value: 'introSort' },
        ],
      },
      {
        type: 'input',
        name: 'outputPath',
        message: 'ソート結果を保存したいファイルのファイルパスを入力してください (例: ./test_data/sorted.csv):',
        default: './test_data/sorted.csv',
      },
    ]);

    const sortedCsv = getSortedCsv(records, answers.sortKey, answers.isDescending, answers.sortType);
    fs.writeFileSync(answers.outputPath, sortedCsv, 'utf8');
    console.log(`\n✅ ソート結果を ${answers.outputPath} に保存しました。`);
  } catch (error) {
    console.error(`エラー: ${error.message}`);
    process.exit(1);
  }
}

function readFileSync(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      relax_column_count: false,
    });

    return records;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`指定されたファイルが「${filePath}」が見つかりません`);
    }

    throw error;
  }
}

function getRecordsColumns(records) {
  const firstRecord = records[0];
  return Object.keys(firstRecord);
}
