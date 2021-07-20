console.log('Hello Petersham.');

var myLazyLoad = new LazyLoad();

$(document).ready(function() {
  if (sessionStorage.modalShown != 1) {
    sessionStorage.modalShown = 1;
    setTimeout(function() {
      $('.modal').modal('show');
    }, 1000);
  }
});