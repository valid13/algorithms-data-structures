import globals from "globals";
import jsPlugin from "@eslint/js";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";

export default [
  // { files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"] },
  { languageOptions: { globals: globals.browser } },
  jsPlugin.configs.recommended,
  jsxA11yPlugin.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
];
