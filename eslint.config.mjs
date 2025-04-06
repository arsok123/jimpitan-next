import eslintPlugin from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  eslintPlugin.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
