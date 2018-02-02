# Minsper - A Ghost Theme for Personal Blogs

![Ghost](https://img.shields.io/badge/Ghost-1.20.0-brightgreen.svg?style=flat-square)

A minimized and better-designed version of Casper for personal blogs. A running demo of the theme can be found [here](http://www.dhchoi.com/).

## Features

* Compatible with the newest version of Ghost (v1.20.0).
* Works for all display sizes.
* No routes to needless individual author pages.
* Better designed elements, such as navigation, tags, etc.
* Better designed post page that helps concentration on content.
* Dynamic index page that shows tiles of recent posts.
* Integrates page load progress indicators.
* Integrates Disqus with easy setup.

## Installation

Zip the repository and upload the theme at your own Ghost console page within the **Design** panel.

## Hacking

Run a [local version](https://docs.ghost.org/docs/install-local#section-developing-themes) of Ghost and setup the theme within it so that you can easily monitor changes made to the source code. Also, check with the [changelog](https://themes.ghost.org/v1.20.0/docs/changelog) to see if the code will be compatible with any future Ghost version.

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
