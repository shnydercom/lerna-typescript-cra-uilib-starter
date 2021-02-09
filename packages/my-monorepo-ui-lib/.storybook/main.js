/**
 * changes to default:
 * fix #1: fixing (Error: "version" is a required argument.): https://github.com/storybookjs/storybook/issues/13255#issuecomment-740713924
 */
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx", //fix #1, previous: "../stories/**/*.stories.mdx"
    "../src/**/*.stories.@(js|jsx|ts|tsx)" //fix #1, previous: "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-create-react-app" //fix #1
  ]
}