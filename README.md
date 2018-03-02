# Minsper - A Ghost Theme for Personal Blogs

![Ghost](https://img.shields.io/badge/Ghost-1.20.0-brightgreen.svg?style=flat-square)

A minimized and updated version of Casper for personal blogs. A running demo of the theme can be found [here](http://www.dhchoi.com/).

<p align="center">
  <img src="https://github.com/dhchoi/minsper/blob/master/images/screenshot-devices.png?raw=true" alt="Screenshot Mockups"/>
</p>

## Features

* Compatible with the newest version of Ghost (v1.20.0).
* Works for all display sizes.
* No routes to needless individual author pages.
* Updated elements and UX, such as navigation, tags, etc.
* Updated `post` page that helps concentrate on content better.
* Updated `index` page that shows recent posts as tiles.
* Integrates page load progress indicators.
* Integrates Disqus with easy setup.

## Installation

Zip the `theme` folder and upload it within the **Design** panel over at your own Ghost administrator page.

## Hacking

Run a [local version](https://docs.ghost.org/docs/install-local#section-developing-themes) of Ghost and setup the theme within it so that you can easily monitor changes made to the source code. Also, check with any [updates](https://github.com/TryGhost/Ghost/releases) to see if the code will be compatible with future versions of Ghost.

## Configurations

All configuration changes should be done inside the **Blog Header** section from the **Code Injection** panel within Ghost's administrator page. Configs should be added using the following format:
```html
<script>
var THEME_CONFIG = THEME_CONFIG || {};
THEME_CONFIG.postSquareColors = ["#hex-color1", "#hex-color2", ...];
THEME_CONFIG.disqusShortname = "YOUR-DISQUS-SHORTNAME";
THEME_CONFIG.autoLoadComments = true;
</script>
```

### `THEME_CONFIG.postSquareColors`

Config for changing the index page tile colors. Define as many colors as you want. If omitted, only one default color will be used.

### `THEME_CONFIG.disqusShortname`

Config for setting up the comments section using Disqus. Replace the placeholder string with the `disqus_shortname` you've acquired. If omitted or empty, the comments section will not be shown.

### `THEME_CONFIG.autoLoadComments`

Config for setting the loading time point of the comments within the comments section. If omitted or set to `false`, the comments will be loaded and shown right after page load. If set to `true`, the comments will be loaded and shown only after the user clicks the necessary button to open the comments.

## Future Plans

* Adding a dedicated search page.
* Using a pre-processor for stylesheets.
