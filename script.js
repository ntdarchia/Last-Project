$(function(){
    $('.multiple-items').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay : true,
     autoplaySpeed: 2000,
     arrows: true,
     dots:true,
     responsive: [
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
     ]
   });    
 });