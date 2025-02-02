import { gsap } from "gsap";
import { Tween } from "gsap/gsap-core";

/* Timelines */

const onStart = () => {
  console.log("started")
}

const onDone = () => {
  console.log("done")
}

const onUpdated = () => {
  console.log("animation runs 60 frames per second")
}

const timeline = gsap.timeline({
  duration: 1,
  paused: true,
  onStart: onStart,
  onComplete: onDone,
  onUpdate: onUpdated
})


// Option 1: create seperate tweens and add then to the timelines
// const tween = gsap.from(
// ...
// )

// timeline.add(tween)

// Option 2: directly add tweens to the timeline
// You do not need delays when you use a timeline unless you need a gap
timeline
.from('body', {backgroundColor: "#FFF", ease: 'none'})
.fromTo(['h1', '.intro'], {opacity: 0, y: -20}, {opacity: 1, y:0, ease: 'power1.out',stagger: 0.2})
.from(['img', 'h2'], {opacity: 0, ease: 'none'})
.fromTo('ul li', { opacity: 0, y: -20}, {opacity: 1, y: 0, ease: 'power1.out', stagger: 0.2})


const playButton = document.getElementById("btnPlay")
const pauseButton = document.getElementById("btnPause")
const resumeButton = document.getElementById("btnResume")
const reverseButton = document.getElementById("btnReverse")
const speedUpButton = document.getElementById("btnSpeedUp")
const slowDownButton = document.getElementById("btnSlowDown")
const seekButton = document.getElementById("btnSeek")
const progressButton = document.getElementById("btnProgress")
const restartButton = document.getElementById("btnRestart")


playButton.addEventListener('click', () => timeline.play())
pauseButton.addEventListener('click', () => timeline.pause())
resumeButton.addEventListener('click', () => timeline.resume())
reverseButton.addEventListener('click', () => timeline.reverse())
speedUpButton.addEventListener('click', () => timeline.timeScale(2))
slowDownButton.addEventListener('click', () => timeline.timeScale(0.5))
seekButton.addEventListener('click', () => timeline.seek(1))
progressButton.addEventListener('click', () => timeline.progress(0.5))
restartButton.addEventListener('click', () => timeline.restart())

// window.onload = () => {
//   // gsap.to('header', { duration: 3, y: 100})

//   // gsap.to('h2', { duration: 3, delay: 2, background: 'lime'})

//   // gsap.to('ul li', { duration: 3, y: 100})

//   // gsap.to('ul', { duration: 0.7, ease: Power3, x: 100})

//   // -1 = infinite
//   // gsap.from('ul li', { duration: 0.7, stagger: 0.3, repeat: -1, ease: Power2.easeOut, x: -100})

//   // gsap.from('ul li:last-child', { duration: 0.7, repeat: -1, repeatDelay: 0.2, ease: Power2.easeOut, x: -100, yoyo: true})

//   // gsap.fromTo('header', {x: -40}, {x: 40, repeat: 2, duration: 1, ease: Power3.easeInOut, yoyo: true})

//   // gsap.set('ul', {y: 100})

//   gsap.fromTo("body", {background: "#b1dec7"}, {background: "#76c897", duration: 2})
//   gsap.fromTo("h1", {opacity: 0, y: -30}, {opacity: 1, y: 0, duration: 1})
//   gsap.fromTo(".intro", {opacity: 0}, {opacity: 1, duration: 1, stagger: 1})
//   gsap.fromTo("img", {opacity: 0}, {opacity: 1, duration: 1, stagger: 2})
//   gsap.fromTo("ul li", {opacity: 0, y: -100}, {opacity: 1, y: 0, duration: 1, stagger: 0.2})
// }