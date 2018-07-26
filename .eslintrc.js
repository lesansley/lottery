module.exports = {
  "plugins": [
      "react"
  ],
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "mocha":true
  },
  "extends": [
      "eslint:recommended", 
      "plugin:react/recommended"
  ],
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "rules": {
      "generator-star-spacing": "off", // allow async-await
      "indent": ["error", 2],
      "no-mixed-spaces-and-tabs": "error",
      "semi": ["error", "always"],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ]
  }
};