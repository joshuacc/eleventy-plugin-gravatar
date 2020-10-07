# Eleventy Plugin for Gravatar

This plugin adds a `gravatarUrl` filter which allows you to easily convert an email address into the associated Gravatar image URL. It also allows you to specify what size image you would like to use.

## Installing the Plugin

In your Eleventy project: `npm install --save-dev eleventy-plugin-gravatar`

In your `.eleventy.js` configuration file, import the plugin, and pass it to Eleventy's `addPlugin` method:

```js
const gravatarPlugin = require('eleventy-plugin-gravatar');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(gravatarPlugin);
};
```

## Usage Examples

Examples for Liquid and Nunjucks templates are provided below. For other templating languages, consult the documentation for Eleventy or your template language.

### Liquid

```liquid
<!-- Default avatar size -->
<img src="{{ authorEmail | gravatarUrl }}" />

<!-- Avatar of 15x15 pixels -->
<img src="{{ authorEmail | gravatarUrl: 15}}" />
```

### Nunjucks

```nunjucks
<!-- Default avatar size -->
<img src="{{ authorEmail | gravatarUrl }}" />

<!-- Avatar of 15x15 pixels -->
<img src="{{ authorEmail | gravatarUrl(15) }}" />
```