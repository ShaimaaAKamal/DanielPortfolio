
$(".blog-carousel").owlCarousel({
    margin:20,
    autoplay:true,
    dots:true,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    loop: true,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2    

        },
        992:{
            items:3        
        }
    }
});
