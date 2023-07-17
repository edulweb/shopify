$('.trending__container').slick({
    dots: false,
    infinite: true,
    centerPadding: '30px',
    prevArrow:'<ion-icon class="slick-prev" name="arrow-back-circle-outline" />',
    nextArrow:'<ion-icon class="slick-next" name="arrow-forward-circle-outline" />',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
$('.brands').slick({
    dots: false,
    infinite: true,
    centerPadding: '30px',
    prevArrow:'<ion-icon class="slick-prev" name="arrow-back-circle-outline" />',
    nextArrow:'<ion-icon class="slick-next" name="arrow-forward-circle-outline" />',
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
$('.gallery').slick({
    dots: false,
    infinite: true,
    centerPadding: '30px',
    prevArrow:'<ion-icon class="slick-prev" name="arrow-back-circle-outline" />',
    nextArrow:'<ion-icon class="slick-next" name="arrow-forward-circle-outline" />',
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  