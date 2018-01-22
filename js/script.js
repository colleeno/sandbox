$(document).ready(function () {

  $(window).on('scroll',function(){
    parallaxScroll();
console.log('linked')
  })


function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    var faster = 0-(scrolled*.25)
    var slower = 0-(scrolled*.15)
    $('.six-content, .about-short').css('transform','translateY('+faster+'px)')
  }

  $('.navbar-toggle').on('click', function () {
   $('.nav-links').toggleClass('show-nav')
 })

})
