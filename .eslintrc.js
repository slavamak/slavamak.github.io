module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  plugins: ["react", "prettier", "simple-import-sort"],
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: {
    "import/no-unresolved": [2, { ignore: ["^(all|part):"] }],
    "no-underscore-dangle": "off",
    "prettier/prettier": "error",
    "react/jsx-props-no-spreading": [
      "error",
      {
        html: "ignore",
        custom: "enforce",
        explicitSpread: "enforce",
        exceptions: [""],
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
}
