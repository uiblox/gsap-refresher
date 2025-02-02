import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger)

function init(){
  
  const parallax = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: ".bcg-parallax",
      start: 'top bottom',
      scrub: true
    }
  })

  parallax
    .from('.content-wrapper', { duration: 0.4, autoAlpha: 0}, 0.4)
    .from('.bcg', { duration: 2, y: '-30%'}, 0)
  
  // gsap.set('#project02', {scrollTrigger: {
  //   trigger: "#project02",
  //   start: 'top bottom-=150',
  //   end: "bottom center-=150",
  //   toggleClass: 'active',
  //   markers: true
  // }})

  // .to("#intro img", {opacity: 0, scrollTrigger: {
  //   trigger: '#intro',
  //   start: 'top top',
  //   end: "bottom center",
  //   scrub: true,
  //   markers: true
  // }})   
}

window.addEventListener('load', function(){
    init();
});