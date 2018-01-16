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
    var faster = 0-(scrolled*.45)
    // var slower = 365-(scrolled*.25)

    $('.one-text').css('transform','translateY('+faster+'px)')
    if(scrolled > 172) {
      console.log ('two')
      $('.transparent').addClass('opaque')
    }
    else {
      $('.transparent').removeClass('opaque')
    }
    // $('.white-bold').css('transform','translateY('+slower+'px)')

    // console.log(scrolled)
    // console.log('im' + faster)
    var waypoint = new Waypoint({
      element: document.getElementById('waypoint'),
      handler: function(direction) {
        console.log('Scrolled to waypoint!')
        $('.white-bold').addClass('slide')
        // console.log(direction)
        if (direction == 'down'){
          $('.white-bold').removeClass('slideout').addClass('slidein')
        }
        else {
          $('.white-bold').removeClass('slidein').addClass('slideout')
        }
      }
    })
  }

  var waypointTwo = new Waypoint({
    element: document.getElementById('waypointTwo'),
    handler: function(direction) {
      if (direction == 'down') {
        $('.five-bg').addClass('scale')
      }
      else {
        $('.five-bg').removeClass('scale')
      }

     } })


})
