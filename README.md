# Minsper - A Ghost Theme for Personal Blogs

![Ghost](https://img.shields.io/badge/Ghost-0.7.x-brightgreen.svg?style=flat-square)

A minimized and better-designed version of Casper for personal blogs. A running demo of the theme can be found [here](http://www.dhchoi.com/).

## Features

* Compatible with the newest version of Ghost (v0.7.9).
* Works for all display sizes.
* No routes to needless individual author pages.
* Better designed elements, such as navigation, tags, etc.
* Better designed post page that helps concentration on content.
* Dynamic index page that shows tiles of recent posts.
* Integrates page load progress indicators.
* Integrates Disqus with easy setup.

## Installation

Clone the repository inside Ghost's themes directory (`~GHOST-DIRECTORY/content/themes/`) or download the repository and put the root folder inside it.

## Configurations

All configuration changes should be done inside the **Blog Header** section from the **Code Injection** panel.
The panel can be find within Ghost's administrator page. 

### Appearance

#### Changing Index Page Tile Colors

Define as many more colors as you want in the following format and add the following script:
```html
<script>
THEME_CONFIG.postSquareColors = ["#hex-color1", "#hex-color2", ...];
</script>
```

### Comments

#### Enabling/Disabling the Comment Section

Set the `useComments` variable to the desired value and add the following script:
```html
<script>
THEME_CONFIG.useComments = false;
</script>
```
If omitted, the default value will be `true` and related elements (e.g. comment toggle button) will be displayed.

#### Toggling AutoHide for Comments

Set the `autoHideComments` variable to the desired value and add the following script:
```html
<script>
THEME_CONFIG.autoHideComments = false;
</script>
```
If omitted, the default value will be `true` and the comment body will be hidden until the user clicks the comment toggle button.

#### Adding Disqus

Add the `disqus_shortname` you've acquired with the following format:
```html
<script>
THEME_CONFIG.disqusShortname = "YOUR-DISQUS-SHORTNAME";
</script>
```
If omitted, the comment body will simply not appear. In this case, it is better to set `useComments = false` since the comment toggle button would no longer be needed.


## Future Plans

* Creating archive page showing tag compilations (dependent on new Ghost release)
* Adding search functions (dependent on new Ghost release)
* Adding read-time estimations
* Adding favicon support
