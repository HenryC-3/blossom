/**
 * prettier plugins can't auto load by default https://prettier.io/docs/en/plugins.html#using-plugins
 * because of pnpm bug https://github.com/pnpm/pnpm/issues/4700#issuecomment-1121834982
 */
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')], // prettier plugins has to be declared here
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'none',
  bracketSameLine: true
}
