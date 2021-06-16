$(document).ready(function(){
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 2000,
  });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 665,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }); 
    $('.multiple-items-partners').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    let t=true;
    $('.search').click(function(){
      if(t==true){$('.search-img').attr("src","img/search-plas.png");t=false;}
      else{$('.search-img').attr("src","img/search-img.png");t=true;}
      $('.search-text').toggleClass('dn');
    });
    let tt=true;
    $('.hamburger-menu').click(function(){
      if(tt==true){$('.hamburger-menu').attr("src","img/hamburger-plas.png");tt=false;}
      else{$('.hamburger-menu').attr("src","img/hamburger-header.png"); tt=true;}
      $('.click-menu').toggleClass('dn');
    });
    $(".purchase-box1").hover(function(){
      $(".purchase-box").addClass("z-1");
      $(this).addClass("z-3");
      $(".purchase-box-img1").attr("src","img/online-iconc11.png");
    },
    function(){
      $(this).removeClass("z-3");
      $(".purchase-box-img1").attr("src","img/online-iconc1.png");
    });

    $(".purchase-box2").hover(function(){
      $(".purchase-box").addClass("z-1");
      $(this).addClass("z-3");
      $(".purchase-box-img2").attr("src","img/online-iconc22.png");
    },
    function(){
      $(this).removeClass("z-3");
      $(".purchase-box-img2").attr("src","img/online-iconc2.png");
    });

    $(".purchase-box3").hover(function(){
      $(".purchase-box").addClass("z-1");
      $(this).addClass("z-3");
      $(".purchase-box-img3").attr("src","img/online-iconc33.png");
    },
    function(){
      $(this).removeClass("z-3");
      $(".purchase-box-img3").attr("src","img/online-iconc3.png");
    });
    $(".purchase-box4").hover(function(){
      $(".purchase-box").addClass("z-1");
        $(this).addClass("z-3");
        $(".purchase-box-img4").attr("src","img/online-iconc44.png");
      },
      function(){
        $(this).removeClass("z-3");
        $(".purchase-box-img4").attr("src","img/online-iconc4.png");
      });
      $(".close-menu").click(function(){
        $(".welcome-nav").fadeOut("slow");
        $(".secretly").fadeIn("slow");
      }
      );
      $(".secretly").click(function(){
        $(".welcome-nav").fadeIn("slow");
        $(this).fadeOut("slow");
      });
      $(".information1").hover(function(){
        $(".menu-box-iconc1").removeClass("bg-c-a");
        $(".menu-box-iconc1").addClass("bg-c");
      },
      function(){
        $(".menu-box-iconc1").removeClass("bg-c");
        $(".menu-box-iconc1").addClass("bg-c-a");
      }
      );
      $(".information2").hover(function(){
        $(".menu-box-iconc2").removeClass("bg-c-a");
        $(".menu-box-iconc2").addClass("bg-c");
      },
      function(){
        $(".menu-box-iconc2").removeClass("bg-c");
        $(".menu-box-iconc2").addClass("bg-c-a");
      }
      );
      $(".information3").hover(function(){
        $(".menu-box-iconc3").removeClass("bg-c-a");
        $(".menu-box-iconc3").addClass("bg-c");
      },
      function(){
        $(".menu-box-iconc3").removeClass("bg-c");
        $(".menu-box-iconc3").addClass("bg-c-a");
      }
      );
      document.querySelector(".slick-prev").textContent="Назад";
      document.querySelector(".slick-next").textContent="Вперед";

      $('.slick-prev').focus(function(){
        $(this).addClass("border-n");
      });
      AOS.init();
  });