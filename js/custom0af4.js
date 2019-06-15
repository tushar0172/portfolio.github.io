$(document).ready(function() {
  $(".button-collapse").sideNav({
    closeOnClick: true,
    draggable: true
  });
  $(".parallax").parallax();
  $(".scrollspy").scrollSpy({
    getActiveElement: function(id) {
      return 'li:has(a[href="#' + id.substring(2) + '"])';
    },
    activeClass: "active"
  });

  $("#portfolio-selector-card").on("click", function() {
    $("#portfolio-selector-card").addClass("active");
    $("#portfolio-selector-timeline").removeClass("active");
    $(".portfolio-timeline").hide();
    $("#portfolio-card").show();
  });
  $("#portfolio-selector-timeline").on("click", function() {
    $("#portfolio-selector-timeline").addClass("active");
    $("#portfolio-selector-card").removeClass("active");
    $("#portfolio-card").hide();
    $(".portfolio-timeline").show();
  });
  try {
    AOS.init({
      once: true,
      delay: 500
    });
  } catch (ignore) {}
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          var distanceToCover = Math.abs(
            $(document).scrollTop() - target.offset().top
          );
          var timeToScroll = distanceToCover / 7 + 300;
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            timeToScroll,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
