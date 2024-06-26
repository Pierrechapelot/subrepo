module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:unicorn/recommended",
    "plugin:import/recommended",
    "prettier"
  ],
  "plugins": ["node", "prettier", "unicorn", "import"],
  "rules": {
    "array-callback-return": "error",
    "prettier/prettier": "error",
    "block-scoped-var": "error",
    "eqeqeq": [2, "allow-null"],
    "no-var": "error",
    "prefer-const": "error",
    "eol-last": "error",
    "prefer-arrow-callback": "error",
    "no-constant-condition": [
      "error",
      {
        "checkLoops": false
      }
    ],
    "no-trailing-spaces": "error",
    "quotes": [
      "warn",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "no-restricted-properties": [
      "error",
      {
        "object": "describe",
        "property": "only"
      },
      {
        "object": "it",
        "property": "only"
      }
    ],
    "node/no-unpublished-import": "off"
  }
}
