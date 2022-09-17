
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

let nav=document.getElementsByClassName("navbar")[0]
let activeLink=document.querySelectorAll('.navbar .nav-link.active')[0]
let ul=document.querySelector(".navbar-nav")
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
window.addEventListener('scroll',(e)=>{
    if(window.pageYOffset >= vh){      
        nav.classList.remove('position-absolute','text-white');
        ul.classList.remove('text-links')
        nav.classList.add("fixedNav","shadow-sm");
        activeLink.classList.remove("activeLinkWhite");
        activeLink.classList.add('activeLinkBlack');
    }
    else{
        nav.classList.remove("fixedNav","shadow-sm");
        ul.classList.add('text-links')
        nav.classList.add('position-absolute','text-white');
        activeLink.classList.remove("activeLinkBlack");
        activeLink.classList.add('activeLinkWhite');

    }
})

