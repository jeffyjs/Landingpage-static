
var keys = [
  "New",
  "New",
  "Buds",
  "BudsZ",

];

var slider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: ".product-links",
    clickable: true,
    renderBullet: function(index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    }
  }
});

//price slide

slider.on("slideChange", function() {
  // console.log("");
  gsap.to(".slide-text span", 0.2, {
    x: "-100px"
  });
  gsap.to(".slide-number span", 0.2, {
    x: "-100px"
  });
  gsap.to(".slide-detail span", 0.5, {
    x: "-1000px"
  });
  gsap.to(".slide-detail-facts div", 0.5, {
    x: "-1000px"
  });
  gsap.to(".swiper-slide-active", 0.5, {
    scale: 0.85
  });

});


slider.on("slideChangeTransitionEnd", function() {
  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 0
  });
  gsap.to(".slide-text span", 0.2, {
    x: 0,
    delay: 0.1
  });
  gsap.to(".slide-text span", 0, {
    x: "100px"
  });

  gsap.to(".slide-number span", 0.2, {
    x: 0
  });
  gsap.to(".slide-number span", 0, {
    x: "100px"
  });

  gsap.to(".slide-detail span", 0.2, {
    x: 0
  });

  gsap.to(".slide-detail-facts div", 0.5, {
    x: 0
  });

  gsap.to(".swiper-slide-active", 0.5, {
    scale: 1,
    ease: Power4.easeOut
  });

  gsap.to(".swiper-slide-active .slide-text", 0, {
    autoAlpha: 1
  });
  gsap.to(".swiper-slide-active .slide-number", 0, {
    autoAlpha: 1
  });

  gsap.to(".swiper-slide-next .slide-text", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-text", 0, {
    autoAlpha: 0
  });

  gsap.to(".swiper-slide-next .slide-number", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-number", 0, {
    autoAlpha: 0
  });
});



gsap.to(".swiper-slide-next .slide-text", 0, {
  autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-text", 0, {
  autoAlpha: 0
});

gsap.to(".swiper-slide-next .slide-number", 0, {
  autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-number", 0, {
  autoAlpha: 0
});

gsap.to(".swiper-slide", 0, {
  scale: 0.85
});

gsap.to(".swiper-slide-active", 0, {
  scale: 1
});
