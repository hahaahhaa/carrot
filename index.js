const contents = document.querySelectorAll('.total_section');

function animationWhendisplayed() {
  window.addEventListener('scroll', () => {
    contents.forEach((content) => {
      if(window.innerHeight > content.getBoundingClientRect().top){
        content.classList.add('on');
      }
    })
  })
}

animationWhendisplayed();