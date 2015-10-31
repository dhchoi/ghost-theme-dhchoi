/**
 * Main JS file for theme behaviors
 */

/* globals jQuery, document */
(function ($, undefined) {
  "use strict";

  $(window).load(function () {
    // Setup PostSquare Colors
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

  var $document = $(document);

  $document.ready(function () {
    var $postContent = $(".post-content");
    $postContent.fitVids();

    $(".scroll-down").arctic_scroll();

    $("#menu-button, .nav-cover, .nav-close").on("click", function (e) {
      e.preventDefault();
      $("body").toggleClass("nav-opened nav-closed");
    });

    $("section.post-content a").attr("target","_blank");
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
