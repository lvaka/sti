$(document).ready(function () {
  $('.partner-list').slick({
    autoplay: true,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
})
