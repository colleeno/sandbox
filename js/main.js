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
    $('.one-text').css('top',(0-(scrolled*.75))+'px');
}
})
