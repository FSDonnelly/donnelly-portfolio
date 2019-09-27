$(window).on('load', function() {
  $('.loader').fadeOut(4000);
});

$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 4000,
    pagination: false
  });
  $('#slides').superslides('next'); // get next slide index
  $('#slides').superslides('prev'); // get previous slide index
  let typed = new Typed('.typed', {
    strings: [
      'Web Developer',
      'Front End Developer',
      'Back End Developer',
      'Web Designer',
      'Web Application Developer',
      'Front End Engineer',
      'Back End Engineer',
      'Website Designer',
      'Full Stack Pro'
    ],
    typeSpeed: 150,
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
  let statsTopOffset = $('.stats-section').offset().top;
  let countUpFinished = false;

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
    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $('.counter').each(function() {
        let element = $(this);
        let endVal = parseInt(element.text());

        element.countup(endVal);
      });
      countUpFinished = true;
    }
  });

  $('[data-fancybox]').fancybox();

  $('.items').isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });

  $('#filters a').click(function() {
    $('#filters .current').removeClass('current');
    $(this).addClass('current');

    let selector = $(this).attr('data-filter');

    $('.items').isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });

  $('#navigation li a').click(function(e) {
    e.preventDefault();

    let targetElement = $(this).attr('href');
    let targetPosition = $(targetElement).offset().top;
    $('html, body').animate({ scrollTop: targetPosition - 150 }, 'slow');
  });

  const nav = $('#navigation');
  const navTop = nav.offset().top;

  $(window).on('scroll', stickyNavigation);

  function stickyNavigation() {
    let body = $('body');
    if ($(window).scrollTop() >= navTop) {
      body.css('padding-top', nav.outerHeight() + 'px');
      body.css('padding-top', nav.innerHeight() + 'px');
      body.addClass('fixedNav');
    } else {
      body.css('padding-top', 0);
      body.removeClass('fixedNav');
    }
  }
});
