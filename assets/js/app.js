// Navigation
(function ($) {
  // Wow
  new WOW().init();

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $("nav").addClass("navbar-shadow");
    } else {
      $("nav").removeClass("navbar-shadow");
    }
  });

  //Smooth Scroll
  $("#main-nav a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      //Implement smooth
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        () => (window.location.hash = hash)
      );
    }
  });

  // Typed
  var typed = new Typed(".type", {
    strings: [
      "Web Developer",
      "Mobile Developer",
      "UI/UX Designer",
      "Video Editor",
    ],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 1000,
    loop: true,
    smartBackspace: true,
    cursorChar: "|",
  });

  // Progress bar
  $(".techskills").appear(function () {
    $("#core-java-bar").LineProgressbar({
      percentage: 75,
      height: "20px",
      radius: "15px",
      triggerOnce: false,
    });
    $("#cpp-bar").LineProgressbar({
      percentage: 65,
      height: "20px",
      radius: "15px",
    });
    $("#python-bar").LineProgressbar({
      percentage: 50,
      height: "20px",
      radius: "15px",
    });
    $("#html5-bar").LineProgressbar({
      percentage: 85,
      height: "20px",
      radius: "15px",
    });
    $("#css3-bar").LineProgressbar({
      percentage: 70,
      height: "20px",
      radius: "15px",
    });
    $("#js-bar").LineProgressbar({
      percentage: 60,
      height: "20px",
      radius: "15px",
    });
  });

  // Scroll SPY
  $("body").scrollspy({
    target: "#main-nav",
  });
})(jQuery);
