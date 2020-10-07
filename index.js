const md5 = require('md5');

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter('gravatarUrl', (email, size) => {
    const hash = md5(email.trim());
    const sizeParam = size ? `?s=${size}` : '';
    return `https://www.gravatar.com/avatar/${hash}${sizeParam}`;
  });
}