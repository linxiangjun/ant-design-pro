const { strictEslint } = require('@umijs/fabric');
const { rules } = strictEslint;

module.exports = {
  ...strictEslint,
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  rules: {
    ...rules,
    'space-before-function-paren': 0,
  },
};
