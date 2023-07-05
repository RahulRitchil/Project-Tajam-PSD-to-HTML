var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
document.onreadystatechange = function() {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function(e) {
      lastScrollPosition = window.scrollY;
      
      if (lastScrollPosition > 100)
        navbar.classList.add('navbar-dark');
      else
        navbar.classList.remove('navbar-dark');
    });
  }
  $(document).ready(function(){
    $('.venobox').venobox();
    $('.my-video-links').venobox();
  });
  new VenoBox({
    selector: '.my-video-links',
});
$('.owl-carouse').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});
$(document).ready(function(){
	$('.venobox').venobox();
	$('.my-video-links').venobox();
	$('.my-video-gallery').venobox();
});
$(document).ready(function() {
$('.owl-carousl').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:true,
  autoplay:true,
  autoplayTimeout:6000,
  responsive:{
    0:{
      items:1
      },

    600:{
      items:1
      },

      1000:{
          items:1
      }
  }
});

});
let scrollToTop = document.getElementById("up");

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTop.style.display = "flex";
  } else {
    scrollToTop.style.display = "none";
  }
}
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/564f634590d1bced690e0633/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
