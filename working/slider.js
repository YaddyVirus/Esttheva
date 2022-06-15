var slider = tns({
    container: '.my-slider',
    items: 6,
    autoplay: true,
    autoplayTimeout: 2000,
    gutter: 20,
    autoplayButtonOutput: false,
    controls: false,
    navPosition: 'bottom',
    nav: false,
    mouseDrag: true,
    arrowKeys: true,
    responsive: {
      300: {
        items: 2,
        gutter: 50,
        center: true,
        fixedWidth: 250,
      },
      700: {
        items: 3,
        gutter: 50,
        center: true,
        fixedWidth: 250,
      },
      1440: {
        items: 3,
        gutter: 50,
        fixedWidth: 250,
        center: true,
      }
    }
  });