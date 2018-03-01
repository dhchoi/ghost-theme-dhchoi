/**
 * Main JS file for theme behaviors.
 */

/* globals (jquery, document) */
(function ($, undefined) {
  "use strict";

  /**
   * Functions related to `index.hbs`.
   */
  $(window).load(function () {
    // Setup PostSquare colors
    var colors = THEME_CONFIG.postSquareColors;
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

    if (THEME_CONFIG.useComments && THEME_CONFIG.disqusShortname) {
      // display comment section if using comments
      $(".post-comments").show();

      // if not auto hiding, load and show comments right away
      if (!THEME_CONFIG.autoHideComments) {
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

  // Arctic Scroll by Paul Adam Davis
  // https://github.com/PaulAdamDavis/Arctic-Scroll
  $.fn.arctic_scroll = function (options) {
    var defaults = {
        elem: $(this),
        speed: 500
      },
      allOptions = $.extend(defaults, options);

    allOptions.elem.click(function (event) {
      event.preventDefault();
      var $this = $(this),
        $htmlBody = $('html, body'),
        offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
        position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
        toMove;

      if (offset) {
        toMove = parseInt(offset);
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove)}, allOptions.speed);
      } else if (position) {
        toMove = parseInt(position);
        $htmlBody.stop(true, false).animate({scrollTop: toMove}, allOptions.speed);
      } else {
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top)}, allOptions.speed);
      }
    });
  };
})(jQuery);
