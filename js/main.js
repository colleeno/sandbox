$(document).ready(function () {
  // $('.carousel').carousel({
	// 	interval: 1000
	// })
  console.log('linked')
  // $('.name').animate({'top' : '10px'}, 2000);
  // $('.name').fadeIn('100000').removeClass('hidden');

  $(window).on('scroll',function(){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    var faster = 0-(scrolled*.65)

    $('.one-text').css('transform','translateY('+faster+'px)')
    if(scrolled > 172) {
      console.log ('two')
      $('.transparent').addClass('opaque')
    }
    else {
      $('.transparent').removeClass('opaque')
    }


    console.log(scrolled)
    console.log('im' + faster)

}
})
