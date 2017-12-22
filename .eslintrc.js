module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },
    "globals": {
        "arguments": true,
        "window": true,
        "Promise": true
    },
    plugins: [
        // 此插件用来识别.html 和 .vue文件中的js代码
        'html',
        // standard风格的依赖包
        "standard",
        "promise"
    ],
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "parser": "babel-eslint", // 让eslint支持es7语法@等
    "rules": {
        "strict": 0, // 让eslint支持es7语法@等
        "no-alert": 2, // 禁用 alert
        "no-console": 0, // 禁用 console
        "no-irregular-whitespace": 2, //禁止tab、空格之外的非法空白
        "array-bracket-spacing": [2, "never"],//禁止或强制在括号内使用空格, 禁止使用不一致的空格，应该遵守格式 [1, 2, 3],也就是,逗号后面一个空格
        "func-call-spacing": 2, // 函数执行需要紧挨着(括号
        "newline-after-var": 1, // 变量定义后增加空行 warn
        "no-mixed-spaces-and-tabs": 2,// 禁止混用tab与空格 禁止空格和 tab 的混合缩进
        "no-trailing-spaces": 2, // 行尾不留空格
        "comma-spacing": 2, // 逗号后非行尾需要加空格
        "spaced-comment": [2, "always"], // 注释后面//后需要增加空格
        "no-unreachable": "error", // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
        "no-dupe-keys": "error", // 禁止对象字面量中出现重复的 key
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": 0, // 字符串引号 "" '' ``
        "semi": [
            "error",
            "never"
        ],
        "no-trailing-spaces": 0, // 无拖尾空格
        "linebreak-style": 0 // 忽略行尾的换行符
    }
};