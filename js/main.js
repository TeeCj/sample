<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for one-page navigation
    var links = document.querySelectorAll(".onepage-menu a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
      e.preventDefault();
      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        var offset = targetElement.offsetTop;
        scrollTo(offset, 1000);
      }
    }

    function scrollTo(to, duration) {
      var start = window.pageYOffset;
      var change = to - start;
      var currentTime = 0;
      var increment = 20;

      var animateScroll = function() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      animateScroll();
    }

    Math.easeInOutQuad = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    // "Back to top" button
    var backToTop = document.getElementById("back-to-top");
    if (backToTop) {
      backToTop.addEventListener("click", function(e) {
        e.preventDefault();
        scrollTo(0, 1000);
      });
    }
  });
</script>
