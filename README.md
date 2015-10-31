# Minsper - A Ghost Theme for Single Bloggers

![Ghost](https://img.shields.io/badge/Ghost-0.7.x-brightgreen.svg?style=flat-square)

A minimized and better-designed version of Casper for a single blogger. A running demo of the theme can be found [here](http://www.dhchoi.com/).

## Features

* Compatible with the newest version of Ghost (v0.7.1).
* Works for all display sizes.
* No routes to needless individual author pages.
* Better designed elements, such as navigation, tags, etc.
* Better designed post page that helps concentration on content.
* Dynamic index page that shows tiles of recent posts.
* Integrates page load progress indicators.
* Integrates Disqus with easy setup.

## Installation

Clone the repository inside Ghost's themes directory (`~GHOST-DIRECTORY/content/themes/`) or download the repository and put the root folder inside it.

## Additional Settings

### Changing Index Page Tile Colors

In Ghost's administrator panel, go to the **Code Injection** page and define as many more colors as you want in the blog's header section with the following format:
```html
<script>
THEME_CONFIG.postSquareColors = ["#hex-color1", "#hex-color2", ...];
</script>
```

### Adding Disqus

In Ghost's administrator panel, go to the **Code Injection** page and add the `disqus_shortname` you've acquired in the blog's header section with the following format:
```html
<script>
THEME_CONFIG.disqusShortname = "YOUR-DISQUS-SHORTNAME";
</script>
```
If omitted, the comment section will simply not appear.

## Future Plans

* Creating archive page showing tag compilations (dependent on new Ghost release)
* Adding search functions (dependent on new Ghost release)
* Adding read-time estimations
* Adding favicon support
