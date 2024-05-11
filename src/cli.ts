import { program } from 'commander';
import { writeFileSync } from 'fs';
import path from 'path';
import { createDataURL } from './blockies';

// Usage:
// npx blockies-typed --output image.png --seed this_is_my_seed

program
  .name('blockies-typed')
  .description('Generate blocky images')
  .option('-o, --output <output>', 'Output file')
  .option('-s, --seed <seed>', 'Seed for random generation')
  .parse(process.argv);

const options = program.opts();
console.log(options);
const data = createDataURL({ seed: options.seed });
writeFileSync(path.join(process.cwd(), options.output), data);
