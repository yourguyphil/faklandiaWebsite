(function($) {
  'use strict';

  /*-------------------------------------------------------------------------------
  Preloader
	-------------------------------------------------------------------------------*/
  $(window).on('load', function() {
    $('.ct-preloader').addClass('hidden');
  });

  /*-------------------------------------------------------------------------------
  Aside Menu
	-------------------------------------------------------------------------------*/
  $(".aside-trigger").on('click', function() {
    $(".main-aside").toggleClass('open');
  });
  $(".main-aside .menu-item-has-children > a").on('click', function(e) {
    var submenu = $(this).next(".submenu");
    e.preventDefault();

    submenu.slideToggle(200);
  })

  /*-------------------------------------------------------------------------------
  Cart Trigger
  -------------------------------------------------------------------------------*/
  $(".cart-trigger").on('click', function(e) {
    $("body").toggleClass('cart-open');
  });

  /*-------------------------------------------------------------------------------
  Search Trigger
  -------------------------------------------------------------------------------*/
  $(".search-trigger").on('click', function(e) {
    $(".search-form-wrapper").toggleClass('open');
  });

  /*-------------------------------------------------------------------------------
  Sticky Header
	-------------------------------------------------------------------------------*/
  var header = $(".can-sticky");
  var headerHeight = header.innerHeight();

  function doSticky() {
    if (window.pageYOffset > headerHeight) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }
  doSticky();

  /*-------------------------------------------------------------------------------
  Aside Scroll
	-------------------------------------------------------------------------------*/
  function initAsideScrollbar() {
    var scrollHeight = $('.main-aside').innerHeight() - $(".main-aside .navbar-brand").innerHeight(); // Calculate the height of the scroll container
    var calculatedHeight = isNaN(scrollHeight) ? "auto" : scrollHeight;
    $('.aside-scroll').slimScroll({
      height: calculatedHeight,
      position: "right",
      size: "5px",
      color: "#212222",
      opacity: 1,
      wheelStep: 5,
      touchScrollStep: 50,
    });
  }
  initAsideScrollbar();

  /*-------------------------------------------------------------------------------
  Cart Scroll
  -------------------------------------------------------------------------------*/
  function initCartScrollbar() {
    var scrollHeight = $('.cart-sidebar').innerHeight() - $(".cart-sidebar .cart-sidebar-header").innerHeight() - $(".cart-sidebar .cart-sidebar-footer").innerHeight() - 40; // Calculate the height of the scroll container
    var calculatedHeight = isNaN(scrollHeight) ? "auto" : scrollHeight;
    $('.cart-sidebar-scroll').slimScroll({
      height: calculatedHeight,
      position: "right",
      size: "5px",
      alwaysVisible: true,
      color: "#E1901B",
      railVisible: true,
      railColor: '#212222',
      opacity: 1,
      wheelStep: 5,
      touchScrollStep: 50,
    });
  }
  initCartScrollbar();

  /*-------------------------------------------------------------------------------
  Tooltips & Popovers
  -------------------------------------------------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();

  $('[data-toggle="popover"]').popover({
    trigger: 'focus'
  })

  /*-------------------------------------------------------------------------------
  Magnific Popup
  -------------------------------------------------------------------------------*/
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
  $('.popup-vimeo').magnificPopup({
    type: 'iframe'
  });
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });
  $('.gallery-thumb').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
  });

  /*-------------------------------------------------------------------------------
  Banner Slider (Home 1)
  -------------------------------------------------------------------------------*/
  $('.banner-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    draggable: false,
    asNavFor: '.banner-slider-nav'
  });
    $('.banner-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.banner-slider-main',
    dots: false,
    focusOnSelect: true
  });

  /*-------------------------------------------------------------------------------
  Banner Slider (Home 2)
  -------------------------------------------------------------------------------*/
  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  /*-------------------------------------------------------------------------------
  Banner Slider (Home 3)
  -------------------------------------------------------------------------------*/
  $(".banner-slider-3").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $('.banner-3 .slider-prev'),
    nextArrow: $('.banner-3 .slider-next'),
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true
        }
      },
    ]
  });

  /*-------------------------------------------------------------------------------
  Testimonials Slider (Home 1)
  -------------------------------------------------------------------------------*/
  $(".ct-testimonials-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.testimonials .slider-prev'),
    nextArrow: $('.testimonials .slider-next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Product Slider (Home 2)
  -------------------------------------------------------------------------------*/
  $(".ct-product-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.products .slider-prev'),
    nextArrow: $('.products .slider-next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Masonry
  -------------------------------------------------------------------------------*/
  $('.masonry').imagesLoaded(function() {
    var isotopeContainer = $('.masonry');
    isotopeContainer.isotope({
      itemSelector: '.masonry-item',
    });
  });

  /*-------------------------------------------------------------------------------
  Add / subtract quantity
  -------------------------------------------------------------------------------*/


  /*-------------------------------------------------------------------------------
  Product List/Grid Toggle
  -------------------------------------------------------------------------------*/
  $(".toggle-grid").on('click', function(){
    $(".view-toggler i").removeClass('active');
    $(this).addClass('active');
    $('.ct-product').removeClass('product-list');
    $('.ct-product').parent().removeClass('col-md-12').addClass('col-md-6');
  })
  $(".toggle-list").on('click', function(){
    $(".view-toggler i").removeClass('active');
    $(this).addClass('active');
    $('.ct-product').addClass('product-list');
    $('.ct-product').parent().removeClass('col-md-6').addClass('col-md-12');
  });

  //On scroll events
  $(window).on('scroll', function() {

    doSticky();

  });

  //On resize events
  $(window).on('resize', function() {

    initAsideScrollbar();
    initCartScrollbar();

  });

})(jQuery);
