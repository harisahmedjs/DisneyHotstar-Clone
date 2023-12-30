
// slider function start

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// slider function end




// start video function 
const videocaerd = [...document.querySelectorAll('.video_cards')]
videocaerd.forEach((item) => {
  item.addEventListener('mouseover', () => {
    let video = item.children[1];
    video.play()
    console.log(video.play());
  })
  item.addEventListener('mouseleave', () => {
    let video = item.children[1];
    video.pause()
  })
})
// end video function 


// card slider function start 
let cardContainers= [...document.querySelectorAll('.movie_container')];
let prebtn = [...document.querySelectorAll('.pre-btn')];
let nxtbtn = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i)=>{
  let comtainerDimensions = item.getBoundingClientRect()
  let containerwidth = comtainerDimensions.width

  nxtbtn[i].addEventListener('click',()=>{
item.scrollLeft+= containerwidth-200
  })
  prebtn[i].addEventListener('click',()=>{
    item.scrollLeft-= containerwidth+200
      })
})
// card slider function end 