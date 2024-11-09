let nameProduct=document.querySelector(".names-product");
let listIcon=document.querySelector("#list");
let mainTL = false;
let animationMenu=gsap.timeline({
    paused:true
});
animationMenu.to(nameProduct, {
    opacity: 1,
    y: 0,
    ease: "back.out(2)",
   duration:.9


  });
 listIcon.addEventListener("click", (e) => {
  
      if (!mainTL) {
        mainTL = true;
        animationMenu.play();
      } else {
        mainTL = false;
    animationMenu.reverse();
      }
    
  });
  
window.addEventListener('resize', function() {
    
    if (window.innerWidth > 767) {
nameProduct.style.transform = 'translateY(-140%)';
mainTL = false;
animationMenu.reverse();
  }
  });