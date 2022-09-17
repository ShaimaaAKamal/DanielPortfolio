
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
let navLinks=document.querySelectorAll('.navbar-nav .nav-link');
let navs=document.querySelectorAll('.navbar-nav .nav-link');
let ul=document.querySelector(".navbar-nav")
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let Home,About,Services,Works,Clients,Blog,Contact;

function resiz(){

     Home=document.getElementById("Home").offsetTop;
     About=document.getElementById("About").offsetTop ;
     Services=document.getElementById("Services").offsetTop;
     Works=document.getElementById("Works").offsetTop;
     Clients=document.getElementById("Clients").offsetTop;
     Blog=document.getElementById("Blog").offsetTop;
     Contact=document.getElementById("Contact").offsetTop;
}

resiz();


window.addEventListener('resize',(e)=>{
    resiz();
})



navLinks.forEach((link,i)=>{   
    link.addEventListener('click',(e)=>{
        navs.forEach((li,j)=>{
            if(i == j)
            {   
                li.classList.add('active');
            }
            else
            {   
                li.classList.remove('active');
            }
        })
    })
})

window.addEventListener('scroll',(e)=>{
    let offset=window.pageYOffset;
    HandleScroll(offset);
    window.localStorage.setItem('offset', JSON.stringify(offset));
})

window.addEventListener('load',(e)=>{
   let offset= JSON.parse(window.localStorage.getItem('offset'));
   HandleScroll(offset)
    
})

function LinkScroll(i,j,link){
    if(i==j)
    link.classList.add('active')
    else
    link.classList.remove('active')
}

function HandleScroll(offset){
    if(offset>=Home && offset <(About-100)){
        navLinks.forEach((link,i)=>{
            LinkScroll(i,0,link)
        })
    }
    else if (offset>=(About-100) && offset <(Services-100)){
        navLinks.forEach((link,i)=>{
            LinkScroll(i,1,link)
        })
    }
    else if (offset>=(Services-100) && offset <(Works-100)){
            navLinks.forEach((link,i)=>{
                LinkScroll(i,2,link)
            })
   }
   else if (offset>=(Works-100) && offset <(Clients-100)){
    navLinks.forEach((link,i)=>{
        LinkScroll(i,3,link)
    })
}
else if (offset>=(Clients-100) && offset < (Blog-100)){
    navLinks.forEach((link,i)=>{
        LinkScroll(i,4,link)
    })}
else if (offset>=(Blog-100) && offset < (Contact -100)){
        navLinks.forEach((link,i)=>{
            LinkScroll(i,5,link)
        })}
else{
      navLinks.forEach((link,i)=>{
    LinkScroll(i,6,link)
})}
    
    if(offset >= vh){      
        nav.classList.remove('position-absolute','text-white');
        ul.classList.remove('text-links')
        nav.classList.add("fixedNav","shadow-sm");
        let activeLink=document.querySelectorAll('.navbar .nav-link.active')[0]
        activeLink.classList.remove("activeLinkWhite");
        activeLink.classList.add('activeLinkBlack');
    }
    else{
        nav.classList.remove("fixedNav","shadow-sm");
        ul.classList.add('text-links')
        nav.classList.add('position-absolute','text-white');
        let activeLink=document.querySelectorAll('.navbar .nav-link.active')[0]
        activeLink.classList.remove("activeLinkBlack");
        activeLink.classList.add('activeLinkWhite');

    }
}

