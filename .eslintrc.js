module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react"],
	rules: {
		"no-unused-vars": "off",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
