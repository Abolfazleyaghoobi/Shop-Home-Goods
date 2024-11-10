let nameProduct=document.querySelector(".names-product");
let listIcon=document.querySelector("#list");
let iconMenuMobile=document.querySelector(".icon-menu-mobile")
let lineOne=document.getElementById("lineOne");
let lineTwo=document.getElementById("lineTwo");
let lineThree=document.getElementById("lineThree");
console.log(iconMenuMobile.children.length);
lineOne.style.top="-1px";
// this part is 
let lineAnime=gsap.timeline({
  paused:true
})
lineAnime
.from([lineOne,lineTwo],{
  rotate:0,
  duration:1
})

.to(lineThree,{
  opacity:0
},"-=1")

let lineAnimeFalage=false;



// this  part is menu site 
let mainTL = false;
let animationMenu=gsap.timeline({
    paused:true
});
animationMenu.to(nameProduct, {
    opacity: 1,
    y: 0,
    ease: "back.out(1)",
   duration:.9


  });
  iconMenuMobile.addEventListener("click", () => {
  
  
      if (!mainTL) {
        mainTL = true;
        animationMenu.play();
      } else {
        mainTL = false;
    animationMenu.reverse();
      }
   
      if (!lineAnimeFalage) {
        lineAnimeFalage = true;
        lineAnime.play();
      } else {
        lineAnimeFalage = false;
    lineAnime.reverse();
      }

  });
  
window.addEventListener('resize', function() {
    
    if (window.innerWidth > 767) {
nameProduct.style.transform = 'translateY(-140%)';
mainTL = false;
animationMenu.reverse();
lineAnimeFalage = false;
lineAnime.reverse();
  }
  });
    
    
    
