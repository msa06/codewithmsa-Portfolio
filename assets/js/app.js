// Navigation
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("nav").addClass("shrink");
      $("nav").removeClass("navbar-light");
      $("nav").addClass("navbar-dark");

      // alert("Scrolling beyond 50");
    } else {
      $("nav").removeClass("shrink");
      $("nav").removeClass("navbar-dark");
      $("nav").addClass("navbar-light");
    }
  });

  //Smooth Scroll
  $("#main-nav a").on("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      //Implement smooth
      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top
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
      "Video Editor"
    ],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    smartBackspace: true
  });

  // Progress bar
  $("#core-java-bar").LineProgressbar({
    percentage: 75,
    height: "20px",
    radius: "15px",
    triggerOnce: false
  });
  $("#cpp-bar").LineProgressbar({
    percentage: 65,
    height: "20px",
    radius: "15px"
  });
  $("#python-bar").LineProgressbar({
    percentage: 50,
    height: "20px",
    radius: "15px"
  });
  $("#html5-bar").LineProgressbar({
    percentage: 85,
    height: "20px",
    radius: "15px"
  });
  $("#css3-bar").LineProgressbar({
    percentage: 70,
    height: "20px",
    radius: "15px"
  });
  $("#js-bar").LineProgressbar({
    percentage: 60,
    height: "20px",
    radius: "15px"
  });

  // Scroll SPY
  $("body").scrollspy({
    target: "#main-nav"
  });
});
