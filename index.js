const glob = require('fast-glob');

const src = './test-data';
const subdirName = 'temp';

const run = async () => {
  const files = await glob('*/', { cwd: src, absolute: true, ignore: subdirName });
  console.log(files);
}

run();
