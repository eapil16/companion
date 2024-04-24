
'use strict';
function changeTimezone(date, ianatz) {
	var invdate = new Date(date.toLocaleString('en-US', {
		timeZone: ianatz
	}));

	var diff = invdate.getTime() - date.getTime();

	return new Date(date.getTime() - diff);
};
document.addEventListener('DOMContentLoaded', () => {

	$('.menu-toggle-cont').click(function (e) {
   e.preventDefault();
    if (!$(this).hasClass('menu-toggle-cont_active')) { 
      $(this).addClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideDown(300); 
      $('body').addClass('hidd'); 
    } else { 
      $(this).removeClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideUp(300);
      $('body').removeClass('hidd');
    } 
  }); 

	const swiper1 = new Swiper(".main-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    pagination: {
      el: ".main-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-next",
      prevEl: ".main-prev",
    },
  });
  
  const swiper2 = new Swiper(".present-slider", {
    allowTouchMove: true,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 16,
    speed: 800,
    navigation: {
      nextEl: ".present-slider-next",
      prevEl: ".present-slider-prev",
    },
    pagination: {
      el: ".present-pagination",
      clickable: true,
    },
    breakpoints: {
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 2,
        }
    }
  });

  const swiper3 = new Swiper(".new-items", {
    allowTouchMove: true,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 16,
    speed: 800,
    navigation: {
      nextEl: ".new-items-next",
      prevEl: ".new-items-prev",
    },
    pagination: {
      el: ".new-items-pagination",
      clickable: true,
    },
    breakpoints: {
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 2,
        }
    }
  });

  const swiper4 = new Swiper(".hits-slider", {
    allowTouchMove: true,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 16,
    speed: 800,
    navigation: {
      nextEl: ".hits-slider-next",
      prevEl: ".hits-slider-prev",
    },
    pagination: {
      el: ".hits-slider-pagination",
      clickable: true,
    },
    breakpoints: {
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 2,
        }
    }
  });
  

  const swiperPromotions = new Swiper(".promotions-blocks", {
    allowTouchMove: true,
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 16,
    speed: 800,
    pagination: {
      el: ".promotions-pagination",
      clickable: true,
    },
    breakpoints: {
        1400: {
          slidesPerView: 4,
          loop: false,
        },
        1200: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        }
    }
  });

  const swiperServiceCatalog = new Swiper(".service-catalog", {
    allowTouchMove: true,
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 16,
    speed: 800,
    pagination: {
      el: ".service-catalog-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".service-catalog-next",
      prevEl: ".service-catalog-prev",
    },
    breakpoints: {
        1400: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        }
    }
  });

  const swiperServices = new Swiper(".services-slider", {
    allowTouchMove: true,
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 16,
    speed: 800,
    pagination: {
      el: ".services-slider-pagination",
      clickable: true,
    },
    breakpoints: {
        1400: {
          slidesPerView: 4,
          loop: false,
        },
        1200: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        }
    }
  });

  const swiperBrand = new Swiper(" .brands-slider", {
    allowTouchMove: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 50,
    speed: 800,
    // pagination: {
    //   el: ".service-catalog-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".brands-slider-next",
      prevEl: ".brands-slider-prev",
    },
    breakpoints: {
        1400: {
          slidesPerView: 8,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 16,
        }
    }
  });
 

  document.querySelector('body').addEventListener('click', e => {
    if (e.target.closest('.slide-item__favorites')) {
      e.target.closest('.slide-item__favorites').classList.toggle('active');
      if (e.target.closest('.product-act__flex_favorites')) {
        e.target.closest('.product-act__flex_favorites').classList.toggle('active')
      }
    }
    if (e.target.closest('.button-in-basket')) {
      e.target.closest('.button-in-basket').classList.add('active');
    }
  });

  $('.filter-item').each(function() {
		var $block = $(this);
		var $blockButton = $(this).find('.toggle-filter-item');
		$blockButton.on('click.toggle', function() {
			var $btn = $(this);
			var $data = $block.find('.filter-item__body');
			$btn.toggleClass('no-active');
			$data.slideToggle(400);
		});
	});

  const cards = document.querySelectorAll('.slide-item');
  const indentBlocks = document.querySelectorAll('.indent-block');
  if (window.innerWidth > 991) {
    cards.forEach(element => {
      element.addEventListener('mouseenter', e => {
        cards.forEach(el => {
          el.classList.remove('active')
        });
        indentBlocks.forEach(el => el.style.zIndex = 1);
        const hetght = element.querySelector('.slide-item__content_full').offsetHeight;
      
        element.classList.add('active');
        if (element.closest('.indent-block')) {
          element.closest('.indent-block').style.zIndex = 5;
        }
        element.querySelector('.slide-item__content').style.height = `${hetght + 30}px`;
      });
    });

    cards.forEach(element => {
      element.addEventListener('mouseleave', e => {
        const heightBlock = element.offsetHeight;
        cards.forEach(el => {
          el.classList.remove('active')
          el.style.height = `${heightBlock}px`;
        });
        indentBlocks.forEach(el => el.style.zIndex = 1);
        element.classList.remove('active');
        element.querySelector('.slide-item__content').style.height = `${heightBlock}px`;
      });
    });
  }
  window.addEventListener('scroll', e => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('sticky');
    } else {
      document.querySelector('.header').classList.remove('sticky');
    }
  });

  $('.catalog-button').click(function (e) {
    $(this).toggleClass('active'); 
    $('.menu-catalog').slideToggle(); 
    $('body').toggleClass('open-menu'); 
  });

  $('.region-block__close').click(function (e) {
    $('.region-block').slideToggle(); 
  });

  $('.message-close').click(function (e) {
    $('.message').slideToggle(); 
    document.querySelector('body').classList.remove('with-message');
  });

  $('.filter-button').click(function (e) {
    $('.filter').slideToggle(); 
    $('body').addClass('hidd'); 
  });

  $('.filter-caption__close').click(function (e) {
    $('.filter').slideUp(); 
    $('body').removeClass('hidd'); 
  });

  $('.more-brands').click(function (e) {
    $('.all-brands').slideToggle(); 
  });

  $('.all-brands__back').click(function (e) {
    $('.all-brands').slideUp(); 
  });

  $('.all-characteristics').click(function (e) {
    $('.product-filter').addClass('show'); 
    $('body').addClass('hidden'); 
  });

  $('.product-filter__close').click(function (e) {
    $('.product-filter').removeClass('show');  
    $('body').removeClass('hidden'); 
  });

  let ps ;
  let psColor ;

  let psFilter;

  if (document.querySelector('.product-filter__content')) {
    ps = new
      PerfectScrollbar('.product-filter__content', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    }); 
  };
  

  if (document.querySelector('#brandBlock')) {
    ps = new
      PerfectScrollbar('#brandBlock', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    }); 
  };

  if (document.querySelector('#colorsBlock')) {
    ps = new
      PerfectScrollbar('#colorsBlock', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    }); 
  };

  

  $('.menu-catalog__close').click(function (e) {
    $('.catalog-button').removeClass('active'); 
    $('.menu-catalog').slideUp(); 
    $('body').removeClass('open-menu'); 
    $('.menu-catalog').removeClass('hidd'); 
    const menuMainMobile = document.querySelectorAll('.main-menu__item');
    const mainSubMenuMobile = document.querySelectorAll('.main-menu-submenu');
    menuMainMobile.forEach(el => el.classList.remove('active-mobile'));
    mainSubMenuMobile.forEach(el => el.classList.remove('active-mobile'));
  });

  if (window.innerWidth > 992) {
    
    const menuMain = document.querySelectorAll('.main-menu__item');
    const mainSubMenu = document.querySelectorAll('.main-menu-submenu');
    menuMain.forEach(element => {
      element.addEventListener('mouseenter', e => {
        const target = element.querySelector('.main-menu-submenu');
        if (target) {
          menuMain.forEach(el => el.classList.remove('active'));
          mainSubMenu.forEach(el => el.classList.remove('active'));
          element.classList.add('active');
          target.classList.add('active');
        }
      });
    })

  } else {
    const menuMainMobile = document.querySelectorAll('.main-menu__item');
    const mainSubMenuMobile = document.querySelectorAll('.main-menu-submenu');
    menuMainMobile.forEach(element => {
      element.addEventListener('click', e => {
        const target = element.querySelector('.main-menu-submenu');
        if (target) {
          e.preventDefault();
          menuMainMobile.forEach(el => el.classList.remove('active-mobile'));
          mainSubMenuMobile.forEach(el => el.classList.remove('active-mobile'));
          element.classList.add('active-mobile');
          target.classList.add('active-mobile');
          document.querySelector('.menu-catalog').classList.add('hidd');
          
        }
      });
    })

    document.querySelector('body').addEventListener('click', e => {
      if (e.target.closest('.main-menu__item__back')) {
        menuMainMobile.forEach(el => el.classList.remove('active-mobile'));
        mainSubMenuMobile.forEach(el => el.classList.remove('active-mobile'));
        document.querySelector('.menu-catalog').classList.remove('hidd')
      }
    });
    if (ps) {
      ps.destroy();
    }
    if (psColor) {
      psColor.destroy();
    }
    if (psFilter) {
      psFilter.destroy();
    }
  }

  jQuery(function($){
    $(".phone").mask("+7 (9 9 9) 9 9 9 - 9 9 - 9 9");
  });

  jQuery(function($){
    $(".phonecompressed").mask("+7 (999) 999 - 99 - 99");
  });

  $('select').styler({
    onSelectOpened: function() {
      if (document.querySelector('.filter-content__block')) {
        $(this).parent().css('background', '#F5F5F9');
      }
    },
    onSelectClosed: function() {
      if (document.querySelector('.filter-content__block')) {
        $(this).parent().css('background', '#fff');
      }
    }
  });

  const mess = document.querySelector('.message');
  if (mess) {
    document.querySelector('body').classList.add('with-message');
  }

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 3,
    freeMode: true,
    speed: 800,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6,
      },
    }
  });
  const swipersmall = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    navigation: {
      nextEl: ".text-page__slider-next",
      prevEl: ".text-page__slider-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  if (document.querySelector('.item-timer')) {
    const x = new Date("2024-05-15T10:00:00");
    var deadline = changeTimezone(x, "Europe/Ulyanovsk");
    let timerId = null;
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
  }
	
  const registration = document.querySelectorAll('.radiobox-box input')

  if (registration.length > 0) {
    registration.forEach(el => {
      el.addEventListener('change', e => {
        registration.forEach(element => {
          if (element.checked) {
            if (element.value === 'retail') {
              document.querySelector('.registration-block__content_legal').classList.add('hidden');
            } else {
              document.querySelector('.registration-block__content_legal').classList.remove('hidden');
            }
          }
        })
      })
    })
  }

  $('.orders-current').each(function() {
		var $block = $(this);
		var $blockButton = $(this).find('.orders-current__caption_dropdown');
		$blockButton.on('click.toggle', function() {
			var $btn = $(this);
			var $data = $block.find('.orders-current__content');
			$btn.toggleClass('active');
			$data.slideToggle(400);
		});
	});

  /* Локализация datepicker */
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);

  $("#datepicker").datepicker();
  $("#datepickerend").datepicker();
  
  const swiper5 = new Swiper(".mySwiper4", {
    loop: false,
    spaceBetween: 'auto',
    freeMode: true,
    speed: 800,
    slidesPerView: 7,
    watchSlidesProgress: true,
    breakpoints: {
      576: {
        slidesPerView: 6,
      },
    }
  });
  const swiper6 = new Swiper(".mySwiper3", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    navigation: {
      nextEl: ".text-page__slider-next",
      prevEl: ".text-page__slider-prev",
    },
    pagination: {
      el: ".mySwiper3-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: swiper5,
    },
  });

  if (document.querySelector('.product')) {
    document.querySelector('.footer').classList.add('footer-product')
  }

  const promoInput = document.querySelector('.form-control__promocode');
  if (promoInput) {
    promoInput.addEventListener('input', e => {
      if (promoInput.value === '') {
        document.querySelector('.basket-sidebar__promocode .button').setAttribute('disabled', 'disabled')
      } else {
        document.querySelector('.basket-sidebar__promocode .button').removeAttribute('disabled')
      }
    })
  }

  const checkboxes = document.querySelectorAll('.basket-block .chekbox input[type="checkbox"]');
  const mainCheckbox = document.getElementById('clearItems');

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
          const atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

          if (atLeastOneChecked) {
            mainCheckbox.removeAttribute('disabled');
          } else {
            mainCheckbox.setAttribute('disabled', 'disabled');
            mainCheckbox.checked = false;
          }
      });
  });

  const inputWay = document.querySelectorAll('.radiobox-way input');

  if (inputWay.length > 0) {
    const bocksDelivery = document.querySelectorAll('.order-processing__item_delivery');
    const bocksCourier = document.querySelectorAll('.order-processing__item_courier');
    const bocksIndependently = document.querySelectorAll('.order-processing__item_independently');
 
    inputWay.forEach(el => {
      el.addEventListener('change', e => {
        if (e.target.value === 'orderIndependently') {
          bocksCourier.forEach(el => el.classList.remove('show'));
          bocksDelivery.forEach(el => el.classList.remove('show'));
          bocksIndependently.forEach(el => el.classList.add('show'));
        } 
        if (e.target.value === 'orderСourier') {
          bocksCourier.forEach(el => el.classList.add('show'));
          bocksDelivery.forEach(el => el.classList.remove('show'));
          bocksIndependently.forEach(el => el.classList.remove('show'));
        } 
        if (e.target.value === 'orderDelivery') {
          bocksCourier.forEach(el => el.classList.remove('show'));
          bocksDelivery.forEach(el => el.classList.add('show'));
          bocksIndependently.forEach(el => el.classList.remove('show'));
        } 
      })
    });
  }

  if (document.querySelector('.catalog-item')) {
		const blockHeiht = () => {
			const collBrands = document.querySelectorAll('.catalog-item');
		
			collBrands.forEach(element => {
				element.addEventListener("mouseenter", (e) => {
          if (e.target.querySelector('.catalog-item__content')) {
            const height = e.target.querySelector('.catalog-item__text').clientHeight +  e.target.querySelector('.catalog-item__image').clientHeight;
            const heightBlock = e.target.clientHeight;
      
            if (heightBlock < height) {
              e.target.querySelector('.catalog-item__content').style.height = `${height + 70}px`
              e.target.style.zIndex = 10;
              e.target.classList.add('active');
              e.target.querySelector('.more-link').classList.add('hidd-link');
            }
          }
				});
				element.addEventListener("mouseleave", (e) => {
          if (e.target.querySelector('.catalog-item__content')) {
            const height = e.target.clientHeight;
                  e.target.querySelector('.catalog-item__content').style.height = `${height}px`
            e.target.style.zIndex = 5;
            e.target.classList.remove('active');
            e.target.querySelector('.more-link').classList.remove('hidd-link');
          }
				});
			});
		};	
		
		if (window.innerWidth > 767) {
			blockHeiht();
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth > 767) {
				blockHeiht();
			}
		});
	}

  // 24 04 2024

  let sliderps ;

  if (document.querySelector('.product-slider__small_content')) {
    sliderps = new
      PerfectScrollbar('.product-slider__small_content', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    }); 
  };
  // end 24 04 2024

});
