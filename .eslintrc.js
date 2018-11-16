// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
    },
    extends: [
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/essential', 
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
    ],
    // required to lint *.vue files
    plugins: [
      'vue'
    ],
    // 全局变量
    globals: {
      wx: false
    },
    // add your custom rules here
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      'no-unused-expressions': 'off',
      'strict': 0,
      'brace-style': 0, // 语句括号换行
      'no-alert': 2,
      'no-console': 0, // 禁用 console
      'no-irregular-whitespace': 2, //禁止tab、空格之外的非法空白
      'array-bracket-spacing': [2, 'never'],//禁止或强制在括号内使用空格, 禁止使用不一致的空格，应该遵守格式 [1, 2, 3],也就是,逗号后面一个空格
      'func-call-spacing': 2, // 函数执行需要紧挨着(括号
      'no-mixed-spaces-and-tabs': 2,// 禁止混用tab与空格 禁止空格和 tab 的混合缩进
      'no-trailing-spaces': 2, // 行尾不留空格
      'comma-spacing': 2, // 逗号后非行尾需要加空格
      'spaced-comment': [2, 'always'], // 注释后面//后需要增加空格
      'no-unreachable': 'error', // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
      'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
      'indent': [
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'windows'
      ],
      'quotes': 0, // 字符串引号 '' '' ``
      'semi': [
        'error',
        'never'
      ],
      'no-trailing-spaces': 0, // 无拖尾空格
      'linebreak-style': 0, // 忽略行尾的换行符
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  }
  