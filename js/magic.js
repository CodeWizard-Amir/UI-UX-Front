$(window).on("click", function () {
  $(".loading").addClass("d-none");
  $("html").removeClass("ovhide");
});
$(document).ready(function () {
  var swiper = new Swiper(".mfActorSlider", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // -----------------------------------------

  // ------------------------------------------
  var swiper = new Swiper(".besmslider", {
    loop: true,
    autoplay: {
      spped: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".newestslider", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".bmCatSlider", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".newsSlider", {
    effect: "cube",
    loop: true,
    autoplay: {
      delay: 1500,
    },
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper5 = new Swiper(".adsslider", {
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-125%", 0, -800],
        rotate: [0, 0, -90],
      },
      next: {
        shadow: true,
        translate: ["125%", 0, -800],
        rotate: [0, 0, 90],
      },
    },


  });
  $(".adsslider").hover(function () {
    (this).swiper.autoplay.stop();
  }, function () {
    (this).swiper.autoplay.start();
  })
  // ----------------------------------------------------
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $('header').addClass('fixed_header');
    }
    else {
      $('header').removeClass('fixed_header');
    }
  });
  // ================================================================

  $(".search_show_btn").click(() => {
    const a = $(".s_icon");
    if (a.hasClass("fa-search")) {
      $(".search_form").removeClass("d-none");
      a.removeClass("fa-search");
      a.addClass("fa-close");
    }
    else if (a.hasClass("fa-close")) {
      $(".search_form").addClass("d-none");
      a.removeClass("fa-close");
      a.addClass("fa-search");
    }
  })

  $(".bmf").click(function (e) {
    var thisbtn = $(this).addClass("btnfilcolor");
    $(".bmf").not(thisbtn).removeClass("btnfilcolor");
    var hadaf = $(this).siblings(".bmCatSlider").removeClass("d-none");
    $(".bmCatSlider").not(hadaf).addClass("d-none");
  })




})
