

$(document).ready(function () {
    
    $('.popup').hide();
 
 
    
 
    /*****************************LearnMore Button for About Section Start Here******************************************/ 
 
   
 
     /*****************************LearnMore Button for About Section Ends Here******************************************/ 
     
     /***********************************Navigation OPEN Button***************************************/ 
 
     $('.navigation__open').on("click", function (e) {
 
       e.preventDefault();
 
       $(this).css({
 
          "opacity":"0",
          "visibility":"hidden",
          "z-index":"2",
          
          "transition": "all 0.8s cubic-bezier(0.86, 0, 0.07, 1)"
       });
 
       $('.navigation__close').css({
 
          "opacity":"1",
          "visibility":"visible",
          "z-index":"305",
          "transform":"rotate(180deg)",
          "transition": "all 0.8s cubic-bezier(0.86, 0, 0.07, 1)"
       });
 
        
       $('.navigation__background').css({
 
          "transform":"scale(80)",
          "transition": "all 0.8s cubic-bezier(0.86, 0, 0.07, 1)"
       });
 
 
       $('.navigation__nav').css({
 
          "opacity":"1",
          "visibility":"visible",
          
          "transform":"translateX(0)",
          "transition": "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);"
       });
 
     });
 
 /***********************************Navigation Close Button***************************************/ 
 
 
     $('.navigation__close').on("click", function (e) {
 
       e.preventDefault();
 
       $(this).css({
 
          "opacity":"0",
          "visibility":"hidden",
          "z-index":"2",
          "transform":"rotate(-180deg)",
          "transition": "all 0.8s cubic-bezier(0.86, 0, 0.07, 1)"
       });
 
       $('.navigation__open').css({
 
          "opacity":"1",
          "visibility":"visible",
          "z-index":"3050",
          
          "transition": "all 0.8s cubic-bezier(0.86, 0, 0.07, 1)"
       });
 
        
       $('.navigation__background').css({
 
          "transform":"scale(1)",
          "transition": "all 0.8s cubic-bezier(0.86, 0, 0.07, 1)"
       });
 
 
       $('.navigation__nav').css({
 
          "opacity":"0",
          "visibility":"hidden",
          
          "transform":"translateX(-40rem)",
          "transition": "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);"
       });
 
        
     });
 /**********POPUP CLOSE********************************/
 
 
    $('.popup__close-link,.popup').on("click", function (e) {
       
       e.preventDefault();
 
     $('.popup').fadeOut(500);
 
     
       
    });
 /************************** HOVER EFFECT ON POPUP CLOSE BUTTON***********************/
 
    $('.popup__close-link').hover(function () {
          
       $(this).css("color",'#e74c3c');
          
       }, function () {
 
          $(this).css("color",'rgba(117, 117, 117, 0.3)');
       }
    );
 /************************** HOVER EFFECT ON Nav OPEN BUTTON***********************/
 
 
 $('.navigation__open, .navigation__close').hover(function () {
 
    
          
    $(this).css({"box-shadow":"0 1.5rem 2.5rem 0 rgba(39,48,54,0.25)"});
 
       
    }, function () {
 
       $(this).css("box-shadow",'0 0.5rem 1.25rem 0 rgba(39,48,54,0.2)');
    }
 );
 
 
 
 
 
 
 
 /*****************POPUP OPEN**************************/
 
 
    $('.card_book').on("click", function (e) {
       e.preventDefault();
     $('.popup').fadeIn(500);
 
    
       
    });
 
     
 /***************************Click photo not hover****************/
 var i = 1;
 
 $('.composition__photo').on("click", function () {
    
       
    
      
 
 });
 
 
/**SCROLL ANIMATION */


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
 
    