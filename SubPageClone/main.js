window.addEventListener('scroll', function() {
    var secondBar = document.querySelector('.second-bar');
    if (window.pageYOffset > 0) {
      secondBar.classList.add('scroll');
    } else {
      secondBar.classList.remove('scroll');
    }
  });
  