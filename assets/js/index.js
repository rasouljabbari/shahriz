// seprate digits
$(document).ready(function () {
  $.fn.digits = function () {
    return this.each(function () {
      $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
  }
  $('.dv-card-price').digits()
});

let show_password = false;
let isHidden = false;
let open = false;
let show_about = false;
let show_orders = false;
let show_chart = false;
// goto top:
$(".dv-go-to-top-icon").each(function () {
  $(this).click(function () {
    return $("html,body").animate({scrollTop: 0}, "slow"), !1
  })
});

// handle search bar in header menu

function showSearchBar() {
  if (!isHidden) {
    $('.dv_form_hidden').css({display: 'block'})
  } else {
    $('.dv_form_hidden').css({display: 'none'})
  }
  isHidden = !isHidden;
}

function openMenu() {
  if (open) {
    $('#navbarSupportedContentMobile').css({width: 0, display: 'none'})
    $('.navbarSupportedContentMobile').css({width: 0, display: 'none'})
    $('.dv_close_menu').css({display: 'none'})
    $('.navbar-toggler').css({display: 'block'})
    $('.dv_bg_menu_overlay').removeClass('px-0 px-lg-2')
    $('.dv_navbar').removeClass('py-0')
    $('.dv-show-menu-in-mobile-view').css({display: 'flex'})

    $('.dv-panel-menu-bg').css({width: 0, display: 'none'})
  } else {
    $('#navbarSupportedContentMobile').css({width: '100%', display: 'block'})
    $('.navbarSupportedContentMobile').css({width: '85%', display: 'block'})
    $('.dv-show-menu-in-mobile-view').css({display: 'none'})
    $('.navbar-toggler').css({display: 'none'})
    $('.dv_close_menu').css({display: 'block'})
    $('.dv_bg_menu_overlay').addClass('px-0 px-lg-2')
    $('.dv_navbar').addClass('py-0')

    $('.dv-panel-menu-bg').css({width: '100%', display: 'block'})
  }
  open = !open;
}

function showChart(value) {
  if ($(`#${value}`).hasClass('dv-fade')) {
    $(`#${value}`).removeClass('dv-fade')
    $(`#${value}`).addClass('dv-show')
  } else {
    $(`#${value}`).removeClass('dv-show')
    $(`#${value}`).addClass('dv-fade')
  }
}

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

$('.dv-selected-sons-result , .dv-selected-tickets-result').on('click', () => {
  if (show_orders) {
    $('.dv-selected-sons-result').css({height: '30px'})
    $('.dv-selected-tickets-result').css({height: '25px'})
    $('.dv-selected-sons-result-body').css({height: '0', display: 'none'})
    $('.dv-arrow-top-icon').css({transform: 'rotate(0)'})
  } else {
    $('.dv-selected-sons-result').css({height: 'auto'})
    $('.dv-selected-tickets-result').css({height: 'auto'})
    $('.dv-selected-sons-result-body').css({height: 'auto', display: 'block'})
    $('.dv-arrow-top-icon').css({transform: 'rotate(180deg)'})
  }
  show_orders = !show_orders;
})


$('.dv-show-password-icon').on('click', function () {
  if (show_password) {
    $('#password').attr('type', 'password')
  } else {
    $('#password').attr('type', 'text')
  }
  show_password = !show_password
})

$('#videoModal').on('hidden.bs.modal', function () {
  $('#source_video')[0].pause();
});

// rate star
const ratingStars = [...document.getElementsByClassName("dv-rate-star")];

function executeRating(stars) {
  const starClassActive = "icon-star dv-rate-star dv-card-gold-start";
  const starClassInactive = "icon-star dv-rate-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      let value = parseInt(stars.indexOf(star)) + 1
      if (value > 5) {
        $('#rateValue').val(value - 5)
      } else {
        $('#rateValue').val(value)
      }
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}

executeRating(ratingStars);


//Swiper
let banners = new Swiper(".bannerSwiper", {
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
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
      slidesPerView: 1,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 70,
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




$(document).mouseup(function (e) {
  let container = $("#navbarSupportedContentMobile");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.hide();
  }
});


