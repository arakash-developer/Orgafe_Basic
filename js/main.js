
// mobile menu hide
let navbar = document.querySelectorAll(".nav-link");
let collapse = document.querySelector(".collapse.navbar-collapse");

navbar.forEach(function (item) {
  item.addEventListener("click", function () {
    collapse.classList.remove("show");
  });
});

// faq section accoding hide and show
function faq(btn, act, collapse) {
  var flag = 0;
  btn.addEventListener("click", my2);
  function my2() {
    if (flag == 0) {
      act.classList.remove("fa-plus");
      act.classList.add("fa-minus");
      collapse.classList.add("show");
      flag = 1;
    } else {
      act.classList.remove("fa-minus");
      act.classList.add("fa-plus");
      collapse.classList.remove("show");
      flag = 0;
    }
  }
}

let btn1 = document.querySelector(".act_1");
let btn2 = document.querySelector(".act_2");
let btn3 = document.querySelector(".act_3");
let btn4 = document.querySelector(".act_4");
let act1 = document.querySelector(".act_1 i");
let act2 = document.querySelector(".act_2 i");
let act3 = document.querySelector(".act_3 i");
let act4 = document.querySelector(".act_4 i");

let collapse1 = document.querySelector("#collapseOne");
let collapse2 = document.querySelector("#collapseTwo");
let collapse3 = document.querySelector("#collapseThree");
let collapse4 = document.querySelector("#collapseFour");

faq(btn1, act1, collapse1);
faq(btn2, act2, collapse2);
faq(btn3, act3, collapse3);
faq(btn4, act4, collapse4);

// Counter Section
var count = document.querySelectorAll(".mycount");
var inc = [];

function intervalfunc() {
  for (let i = 0; i < count.length; i++) {
    inc.push(1);
    // console.log(inc);
    if (inc[i] != count[i].getAttribute("max-data")) {
      inc[i]++;
      count[i].innerHTML = inc[i];
    }
  }
}

var deal = document.getElementById("deal");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    // console.log("ok");
    nav.classList.add("scroll-on");
    upbutton.classList.add("upbutton_show");
  } else {
    // console.log("Not ok");
    nav.classList.remove("scroll-on");
    upbutton.classList.remove("upbutton_show");
  }
  setInterval(() => {
    var topElem = deal.offsetTop;
    var bottomElem = deal.offsetTop + deal.clientHeight;
    var topScreen = window.pageYOffset;
    var btmscreen = window.pageYOffset + window.innerHeight;
    if (btmscreen > topElem && topScreen < bottomElem) {
      intervalfunc();
    } else {
      // console.log("nnnn");
    }
  }, 1000);
};

// navbar scroll shadow show
let nav = document.querySelector(".navigation-wrap");
let upbutton = document.querySelector(".upbutton");

// Cursor
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (event) {
  let x = event.clientX;
  let y = event.clientY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

// active menu by scroll
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

console.log(navLinks);
console.log(section);

let winsc = window;
winsc.addEventListener("scroll", function () {
  section.forEach(function (sec) {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach(function (links) {
        links.classList.remove("active_link");
        document
          .querySelector(".nav-link[href*=" + id + "]")
          .classList.add("active_link");

        // console.log("active");
      });
    }
  });
});
