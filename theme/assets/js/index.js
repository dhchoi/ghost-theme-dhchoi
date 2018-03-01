/**
 * Main file for theme behaviors.
 */

 // THEME_CONFIG should've been defined through code injection within Ghost's administrator page
(function ($, THEME_CONFIG) {
  "use strict";

  /**
   * Functions related to `index.hbs`.
   */
  $(window).load(function () {
    // Setup PostSquare colors
    var colors = THEME_CONFIG.postSquareColors ? THEME_CONFIG.postSquareColors : ["#779ecb"];
    var $postSquares = $(".post-square");
    $.each($postSquares, function (index, value) {
      $(value).css("background", colors[Math.floor(Math.random() * colors.length)]);
    });

    // Setup Masonry
    $('.post-grid').masonry({
      transitionDuration: '0s',
      itemSelector: '.post-grid-u',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  });

  /**
   * Functions related to `post.hbs`
   */
  $(document).ready(function () {
    $(".post-content").fitVids();
    $(".scroll-down").arctic_scroll();
    $("#menu-button, .nav-cover, .nav-close").on("click", function (e) {
      e.preventDefault();
      $("body").toggleClass("nav-opened nav-closed");
    });
    $("section.post-content a").attr("target", "_blank");

    // Setup comments section
    var dsq = null;
    var $commentsBody = $(".comments-body");
    var $commentsBtn = $(".comments-btn");
    var loadDisqus = function () {
      /*** DON'T EDIT BELOW THIS LINE ***/
      var dsq = document.createElement('script');
      dsq.type = 'text/javascript';
      dsq.async = true;
      dsq.src = '//' + THEME_CONFIG.disqusShortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      
      return dsq;
    }

    if (THEME_CONFIG.disqusShortname) {
      // display comment section if using comments
      $(".post-comments").show();

      // if auto loading, load and show comments right away
      if (THEME_CONFIG.autoLoadComments) {
        dsq = loadDisqus();
        $commentsBody.show();
        $commentsBtn.text("Close Comments");
      }

      // set click listener on comment open/close button
      $(".comments-btn").click(function (event) {
        event.preventDefault();

        if ($commentsBody.is(":visible")) {
          $commentsBody.hide();
          $commentsBtn.text("Open Comments");
        }
        else {
          $commentsBody.show();
          $commentsBtn.text("Close Comments");
        }

        // lazy load comments only for first time
        if (!dsq) {
          dsq = loadDisqus();
        }
      });
    }
  });
})(window.jQuery, window.THEME_CONFIG);
