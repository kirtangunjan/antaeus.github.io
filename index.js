
document.querySelector("#option2 h2").addEventListener("mouseenter",function(){
  console.log("yes")
  document.querySelector("#image1").style.height="100%"
})
document.querySelector("#option2 h2").addEventListener("mouseleave",function(){
  console.log("yes")
  document.querySelector("#image1").style.height="0%"
})
document.querySelector("#option3 h2").addEventListener("mouseenter",function(){
  console.log("yes")
  document.querySelector("#image2").style.height="100%"
})
document.querySelector("#option3 h2").addEventListener("mouseleave",function(){
  console.log("yes")
  document.querySelector("#image2").style.height="0%"
})
document.querySelector("#option4 h2").addEventListener("mouseenter",function(){
  console.log("yes")
  document.querySelector("#image3").style.height="100%"
})
document.querySelector("#option4 h2").addEventListener("mouseleave",function(){
  console.log("yes")
  document.querySelector("#image3").style.height="0%"
})




gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  direction: "horizontal",
  lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
  multiplier: 1.4, // Effect Multiplier
  reloadOnContextChange: true,
  touchMultiplier: 2,
  smoothMobile: 0,
  mobile: {
    smooth: true,
  },
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

gsap.from("#title h1 span",{
    y:"100%",
    stagger:0.09,
    duration:1.2,
    ease:"circ.out",
    delay:0.5
})
gsap.from("#nav",{
    y:"-100%",
    // stagger:0.09,
    duration:0.9,
    ease:Expo
})
gsap.from("#bottomnav h3 span",{
    y:"100%",
    stagger:0.2,
    duration:0.9,
    ease:"circ.out",
    delay:1,
})
gsap.to("#bottomnav i",{
    opacity:1,
    delay:1.7,
})
gsap.to(".circle",{
    delay:1,
    stagger:0.6,
    opacity:1,
    duration:1,
})
gsap.from("#title2 h1 span",{
    scrollTrigger:{
        scroller: ".smooth-scroll",
        // markers:true,
        trigger:"#home",
        start:"center",
        endTrigger: "#second",
        end:"top top",
        onUpdate: self => console.log(self.direction)
    },
    y:"100%",
    duration:0.6,
    stagger:0.1,
})
gsap.to("#line",{
    scrollTrigger:{
        scroller: ".smooth-scroll",
        // markers:true,
        trigger:"#home",
        start:"bottom",
        endTrigger: "#second",
        end:"top top",
        onUpdate: self => console.log(self.direction)
    },
   width:"100%",
   duration:1.2,
})
gsap.to("#seconddis h3",{
    scrollTrigger:{
        scroller: ".smooth-scroll",
        // markers:true,
        trigger:"#home",
        start:"bottom",
        endTrigger: "#second",
        end:"top top",
        onUpdate: self => console.log(self.direction)
    },
  opacity:1
})
gsap.to(".boarder",{
  scrollTrigger:{
      scroller: ".smooth-scroll",
      // markers:true,
      trigger:"#second",
      start:"bottom",
      endTrigger: "#third",
      end:"top top",
      onUpdate: self => console.log(self.direction)
  },
 width:"100%",
 duration:1.2,
})
gsap.to(".boarder2",{
  scrollTrigger:{
      scroller: ".smooth-scroll",
      // markers:true,
      trigger:"#third",
      start:"center",
      // endTrigger: "fourth",
      end:"bottom bottom",
      onUpdate: self => console.log(self.direction)
  },
 width:"100%",
 duration:1.2,
})
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.


document.querySelector("#navmiddle").addEventListener("click",function(){
  console.log("yes")
  // document.querySelector("#main").style.display="none";
  document.querySelector("#m1").style.width="50%"
  document.querySelector("#m2").style.height="100vh"
  // document.querySelector("#m1").style.display="block"
  
})
