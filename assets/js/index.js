// goto top:
$(".dv-go-to-top-icon").each(function () {
  $(this).click(function () {
    return $("html,body").animate({scrollTop: 0}, "slow"), !1
  })
});
// handle search bar in header menu
let isHidden = false;

function showSearchBar() {
  if (!isHidden) {
    $('.dv_form_hidden').css({display: 'block'})
  } else {
    $('.dv_form_hidden').css({display: 'none'})
  }
  isHidden = !isHidden;
}

let open = false;

function openMenu() {
  if (open) {
    $('#navbarSupportedContentMobile').css({width: 0, display: 'none'})
    $('.navbarSupportedContentMobile').css({width: 0, display: 'none'})
    $('.dv_close_menu').css({display: 'none'})
    $('.navbar-toggler').css({display: 'block'})
    $('.dv_bg_menu_overlay').removeClass('px-0 px-lg-2')
    $('.dv_navbar').removeClass('py-0')
    $('.dv-show-menu-in-mobile-view').css({display: 'flex'})
  } else {
    $('#navbarSupportedContentMobile').css({width: '100%', display: 'block'})
    $('.navbarSupportedContentMobile').css({width: '85%', display: 'block'})
    $('.dv-show-menu-in-mobile-view').css({display: 'none'})
    $('.navbar-toggler').css({display: 'none'})
    $('.dv_close_menu').css({display: 'block'})
    $('.dv_bg_menu_overlay').addClass('px-0 px-lg-2')
    $('.dv_navbar').addClass('py-0')
  }
  open = !open;
}

// seprate digits
$(document).ready(function () {
  $.fn.digits = function () {
    return this.each(function () {
      $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
  }
  $('.dv-card-price').digits()
});

let show_about = false;
$('.icon-arrow-down').on('click', () => {
  if (show_about) {
    $('.dv-bg-gray-about-text').css({height: '280px'})
    $('.dv-show-more-about').css({height: '118px'})
    $('.icon-arrow-down').css({transform: 'rotate(0)', top: '85%'})
  } else {
    $('.dv-bg-gray-about-text').css({height: 'auto'})
    $('.dv-show-more-about').css({height: '35px'})
    $('.icon-arrow-down').css({transform: 'rotate(180deg)', top: '55%'})
  }
  show_about = !show_about;
})

// leaflet map
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoicmpkZXZlbG9wZXIiLCJhIjoiY2t4OWhiZXVzMXJzcTJ3bzViZjJ6Z2Y1cCJ9.nEmZAc_kjXBwRMy5ade0UA', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

//Swiper
let banners = new Swiper(".bannerSwiper", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let commentSwiper = new Swiper(".commentSwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

let colleaguesSwiper = new Swiper(".colleaguesSwiper", {
  slidesPerView: 5,
  spaceBetween: 50,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

let concertSwiper = new Swiper(".concertSwiper", {
  slidesPerView: 5,
  spaceBetween: 35,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
