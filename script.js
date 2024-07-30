// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     // loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.next',
//       prevEl: '.prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,

        // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  });