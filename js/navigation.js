document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const section = document.querySelector(this.getAttribute('href'));
      const topOffset = section.offsetTop;
  
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    });
  });