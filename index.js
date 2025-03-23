const contents = document.querySelectorAll('.total_section');
const contents1 = document.querySelectorAll('.semi_section');
const contents2 = document.querySelectorAll('.main_title');

function animationWhendisplayed() {
  window.addEventListener('scroll', () => {
    contents.forEach((content) => {
      if(window.innerHeight > content.getBoundingClientRect().top){
        content.classList.add('on');
      }
    })
  })
}

function animationWhendisplayed1() {
  window.addEventListener('scroll', () => {
    contents1.forEach((content) => {
      if(window.innerHeight > content.getBoundingClientRect().top){
        content.classList.add('on');
      }
    })
  })
}

function animationWhendisplayed2() {
  window.addEventListener('scroll', () => {
    contents2.forEach((content) => {
      if(window.innerHeight > content.getBoundingClientRect().top){
        content.classList.add('on');
      }
    })
  })
}

animationWhendisplayed();
animationWhendisplayed1();
animationWhendisplayed2();