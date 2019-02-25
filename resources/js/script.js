$(document).ready(function() {


    /* For the sticky navigation */
    $('.js--section-form').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });


    /* Scroll on buttons */
    $('.js--runloadtestphp').click(function () {
       $.ajax({type: 'POST', url: 'putcpuloadload.php'});
    });

    $('.js--terminstancelambda').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
    });


    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 2000);
            return false;
          }
        }
      });
    });


    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});
