var controller = new ScrollMagic.Controller()

$('#detail-parallax-container').each(function () {
  var tl = new TimelineMax()
  var tl2 = new TimelineMax()
  var tl3 = new TimelineMax()
  var child = $(this).find('.child-1')
  var child2 = $(this).find('.child-2')
  var child3 = $(this).find('.child-3')
  tl.to(child, 0.5, { top: -60, ease: Linear.easeNone })
  tl2.to(child2, 0.5, { top: -180, ease: Linear.easeNone })
  tl3.to(child3, 0.5, { bottom: 170, ease: Linear.easeNone })

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.4,
    duration: '100%'
  })
    .setTween(tl)
    .addTo(controller)
  var scene2 = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.4,
    duration: '100%'
  })
    .setTween(tl2)
    .addTo(controller)
  var scene3 = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.4,
    duration: '100%'
  })
    .setTween(tl3)
    .addTo(controller)
})
