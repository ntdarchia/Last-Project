var func = {
  showMenu: function() {
    var menuBlock = $('#menuBlock'),
        body = $('body');
    menuBlock.css({'display': 'block'});
    menuBlock.find('.menu').show('slide');
    body.css({'overflow-y': 'hidden'});
  },
  hideMenu: function() {
    var menuBlock = $('#menuBlock'),
        body = $('body');
    menuBlock.find('.menu').hide('slide', function() {
      menuBlock.css({'display': 'none'});
    });
    body.css({'overflow-y': 'auto'});
  }
}

$(document).ready(function() {
  var options = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay : false,
    autoplaySpeed: 2000,
    arrows: true,
    dots:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
   };
  $('.multiple-items').slick(options);
});

 //Add smooth scrolling to all links
 $(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});




