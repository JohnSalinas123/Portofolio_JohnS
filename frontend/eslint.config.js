import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import reactHooks from "eslint-plugin-react-hooks";
import jest from "eslint-plugin-jest";

export default [
	{
		languageOptions: {
			globals: globals.browser,
			ecmaVersion: "latest",
			sourceType: "module",
		},
		settings: { react: { version: "18.2" } },
	},
	pluginJs.configs.recommended,
	pluginReactConfig,
	reactHooks.configs.recommended,
	{
		plugins: {
			"react-refresh": {
				rules: {
					"react-refresh/only-export-components": [
						"warn",
						{ allowConstantExport: true },
					],
				},
			},
			jest: {
				rules: jest.configs.recommended.rules,
			},
		},
		overrides: [
			{
				files: ["**/*.test.js", "**/*.test.jsx"],
				env: { jest: true },
			},
		],
	},
];
