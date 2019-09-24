$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 4000,
    pagination: false
  });
  $('#slides').superslides('next'); // get next slide index
  $('#slides').superslides('prev'); // get previous slide index
  let typed = new Typed('.typed', {
    strings: ['Web Developer', 'Student', 'Gamer', 'Programmer'],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    item: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  let skillsTopOffset = $('.skills-section').offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find('.percent')
            .text(Math.round(percent));
        }
      });
    }
  });
});
