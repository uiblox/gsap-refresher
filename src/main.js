import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function init() {
  gsap.set(".part3", {
    y: () => {
      return -document.querySelector(".pen-top").clientHeight + 22;
    },
    scrollTrigger: {
      id: "pen-body",
      trigger: ".part3",
      start: "top bottom-=270px",
      end: `+=${document.querySelector(".pen-top").clientHeight + 22}`,
      pin: true,
    //   markers: true,
      pinSpacing: false,
    },
  });

  const offsets = [547, 722, 842];
  const targets = [".part4", ".part5", ".part6"];
  const allParts = gsap.utils.toArray('.part')

  offsets.forEach((offset, i) => {
    gsap.set(`${targets[i]}`, { y: `-${offset}` });

    gsap.to(`${targets[i]}`, {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".pen-body",
        start: "top bottom-=640px",
        end: `+=${offset}`,
        scrub: true,
        // markers: true,
      },
    });
  });

  allParts.forEach((part, i) => {
    gsap.set(part, {
      scrollTrigger: {
        trigger: part,
        start: i === 3 ? `top+=${document.querySelector(".pen-top").clientHeight + 22}` : "top center",
        end: `bottom+=${200}`,
        toggleClass: "fade-in",
        scrub: true,
        // markers: true
      },
    });
  });
}

window.addEventListener("load", function () {
  init();
});
