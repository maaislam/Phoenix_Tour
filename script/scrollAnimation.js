

/*****************************Scroll Animation start for About Section using IntersectionObserver******************************************/ 



$(document).ready(function () {
    

  const faders = document.querySelectorAll(".fade-in");
  const sliderRight = document.querySelectorAll(".rightin");





  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(function(entry){

      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      } else {

        entry.target.classList.remove("appear");
        //entry.target.classList.add("disappear");
        //appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(function(fader){
    appearOnScroll.observe(fader);
  });
  sliderRight.forEach(function(sliderRight){
    appearOnScroll.observe(sliderRight);
  });





});