window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("header").style.backgroundColor = "#29A19C";
  }
  else {
    document.querySelector("header").style.backgroundColor = "transparent";
    var elems = document.querySelectorAll(".text li");
    var index = 0, length = elems.length;
    for (; index < length; index++) {
      elems[index].style.color = "white";
    }
  }

}
document.querySelector(".instagram-header").onclick = function () {
  window.location.href = "https://instagram.com/fooute.de/";
}
document.querySelector(".instagram-footer").onclick = function () {
  window.location.href = "https://instagram.com/fooute.de/";
}
document.querySelector(".twitter-header").onclick = function () {
  window.location.href = "https://twitter.com/fooute/";
}
document.querySelector(".twitter-footer").onclick = function () {
  window.location.href = "https://twitter.com/fooute/";
}
document.querySelector(".facebook-header").onclick = function () {
  window.location.href = "https://facebook.com/fooute.de/";
}
document.querySelector(".facebook-footer").onclick = function () {
  window.location.href = "https://facebook.com/fooute.de/";
}
document.getElementById("google").onclick = function () {
  window.location.href = "https://play.google.com/";
}
document.getElementById("apple").onclick = function () {
  window.location.href = "https://www.apple.com/app-store/";
}

let el = document.getElementById('cardone')
let el2 = document.getElementById('cardtwo')
let el3 = document.getElementById('cardthree')

const heightOne = el.clientHeight
const widthOne = el.clientWidth

const heightTwo = el2.clientHeight
const widthTwo = el2.clientWidth

const heightThree = el3.clientHeight
const widthThree = el3.clientWidth

el.addEventListener('mousemove', handleMove)
el2.addEventListener('mousemove', handleMoveSecond)
el3.addEventListener('mousemove', handleMoveThird)

function handleMove(e) {

  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 5 * ((xVal - widthOne / 2) / widthOne)
  const xRotation = -5 * ((yVal - heightOne / 2) / heightOne)
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  el.style.transform = string
}
function handleMoveThird(e) {

  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 5 * ((xVal - widthThree / 2) / widthThree)
  const xRotation = -5 * ((yVal - heightThree / 2) / heightThree)
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  el3.style.transform = string
}
function handleMoveSecond(e) {

  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 5 * ((xVal - widthTwo / 2) / widthTwo)
  const xRotation = -5 * ((yVal - heightTwo / 2) / heightTwo)
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  el2.style.transform = string
}

el.addEventListener('mouseout', function () {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})
el2.addEventListener('mouseout', function () {
  el2.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})
el3.addEventListener('mouseout', function () {
  el3.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})



