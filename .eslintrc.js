module.exports = {
    root: true,
    env: {
        node: true,
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'airbnb',
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
};
