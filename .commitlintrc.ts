import fs from 'fs';
import path from 'path';
import type { UserConfig } from '@commitlint/types';

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'));

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', packages],
    'footer-max-line-length': [0],
  },
};

export default config;
