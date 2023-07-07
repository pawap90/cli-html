import { parse } from 'parse5';

import { indentify } from './lib/utils.js';
import { getGlobalConfig } from './lib/utils/get-clobal-config.js';
import { renderTag } from './lib/utils/render-tag.js';

const htmlToCli = (rawHTML, theme = {}, options = {}) => {
  const document = parse(rawHTML);

  // console.dir(
  //   filterAst(document),
  //   { depth: null },
  // );

  const globalConfig = getGlobalConfig(document, theme);
  globalConfig.options = options;


  return `\n${indentify(' ')(
    (renderTag(document, globalConfig) || { value: '' }).value,
  )}\n\n`;
};

export default htmlToCli;
