console.log('Hello Petersham.');

var myLazyLoad = new LazyLoad();

// $(document).ready(function() {
//   if (sessionStorage.modalShown != 1) {
//     sessionStorage.modalShown = 1;
//     setTimeout(function() {
//       $('.modal').modal('show');
//     }, 1000);
//   }
// });

$(document).ready(function() {
  if (sessionStorage.bannerShown != 1) {
    sessionStorage.bannerShown = 1;
    setTimeout(function() {
      $('.banner').collapse('show');
    }, 1000);
  }
});