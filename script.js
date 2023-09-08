//     window.addEventListener('load',()=>{
//      const fname=localStorage.getItem('FN');
//      const lname=localStorage.getItem('LN');
//      const about=localStorage.getItem('ABOUT');
//      const pname1=localStorage.getItem('Pname1');
// 	 const Pd1=localStorage.getItem('PD1');
//      const pname2=localStorage.getItem('Pname2');
// 	 const Pd2=localStorage.getItem('PD2');
//      const pname3=localStorage.getItem('Pname3');
// 	 const Pd3=localStorage.getItem('PD3');
//      const pic=localStorage.getItem('pic');
//      document.getElementById('1').innerHTML=fname;
//      document.getElementById('2').innerHTML=lname;
//      document.getElementById('3').innerHTML=about;
//      document.getElementById('4').innerHTML=pname1;
//      document.getElementById('5').innerHTML=pname2;
//      document.getElementById('6').innerHTML=pname3;
//      document.getElementById('7').innerHTML=Pd1;
//      document.getElementById('8').innerHTML=Pd2;
//      document.getElementById('9').innerHTML=Pd3;
//      document.getElementById('profpic').setAttribute('src',pic);

//      //download

// document.getElementById("download").addEventListener('click', function(){
//     console.log('click');
// })

//          document.getElementById("download").addEventListener("click", () => {
//             const downloaded = this.document.querySelector('.downloadable');
//             var opt = {
//                 margin: 0,
//                 filename: 'myportfolio1.pdf',
//                 image: { type: 'jpeg', quality: 0.98 },
//                 html2canvas: { scale: 2 },
//                 jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
//             };
//             html2pdf().from(downloaded).set(opt).save();
//         })

//    })

"use strict";

// const alone = new Audio("I_Prevail_-_Alone_CeeNaija.com_.mp3");
// const deepEnd = new Audio("I_Prevail_-_ Deep_End_CeeNaija.com_.mp3");
// const anchor = new Audio("Skillet_-_Anchor_CeeNaija.com_.mp3");
// const youAndI = new Audio('You-And-I(PagalWorld).mp3');
// const cantForget = new Audio("My_Darkest_Days_-_Can_t_Forget_You_(mp3.pm).mp3");
// const nightChanges = new Audio("Night-Changes(PaglaSongs)(1).mp3");\

let songIndex = 1;
let audioElement = new Audio("song1.mp3");
let masterPlay = document.querySelector("#master-play");
let progress_bar = document.querySelector("#progressbar");
let gif = document.querySelector("#gif");
let songItems = document.querySelectorAll(".song-item-play");
const prev = document.querySelector("#previous");
const next = document.querySelector("#after");
const maincontainer = document.querySelector(".container");

const video = document.querySelector("#video");

let songs = [
  { songName: "alone", filepath: "song1.mp3" },
  { songName: "deepEnd", filepath: "song2.mp3" },
  { songName: "cant Forget you", filepath: "song3.mp3" },
  { songName: "night Changes", filepath: "song4.mp3" },
  { songName: "anchor", filepath: "song5.mp3" },
  { songName: "youAndI", filepath: "song6.mp3" },
];

masterPlay.addEventListener("click", function (element) {
  console.log("click");
  if (audioElement.paused || audioElement.currentTime <= 0) {
    // let id = Number(element.target.id);
    document.querySelector("#video-home").muted = true;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    document.querySelector("#song-playing").innerText =
      songs[songIndex - 1].songName;

    //change background
    maincontainer.style.transition = "background 1s ease-in";
    maincontainer.style.background =
      "linear-gradient(to top, rgba(0,0,0,0.5)50%, rgba(0,0,0,0.5)50%), url(index.gif)";
    maincontainer.style.backgroundPosition = "center";
    maincontainer.style.backgroundSize = "cover";
    maincontainer.style.backgroundRepeat = "no-repeat";
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
    makeAllPlays();
  }
});

audioElement.addEventListener("timeupdate", function () {
  console.log("timeupdate");
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  progress_bar.value = progress;
});

progress_bar.addEventListener("change", function () {
  audioElement.currentTime = (progress_bar.value * audioElement.duration) / 100;
});

const makeAllPlays = function () {
  Array.from(document.querySelectorAll(".song-item-play")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
      maincontainer.style.transition = "background 1s ease-in";
      maincontainer.style.background =
        "linear-gradient(to top, rgba(0,0,0,0.5)50%, rgba(0,0,0,0.5)50%), url(https://imgs.search.brave.com/rhsZhzDvRY1C0VY13_y1_kgikoPRC3ZA_d-ypweV8no/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI5NDcz/MTUuanBn)";
      maincontainer.style.backgroundPosition = "center";
      maincontainer.style.backgroundSize = "cover";
      maincontainer.style.backgroundRepeat = "no-repeat";
    }
  );
};

songItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    let id = Number(e.target.id);
    songIndex = id;
    // console.log('click2')
    makeAllPlays();
    element.classList.add("fa-pause-circle");
    element.classList.remove("fa-play-circle");
    audioElement.src = `song${id}.mp3`;
    audioElement.currentTime = 0;
    document.querySelector("#video-home").muted = true;
    audioElement.play();
    document.querySelector("#song-playing").innerText =
      songs[songIndex - 1].songName;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    maincontainer.style.transition = "background 1s ease-in";
    maincontainer.style.background =
      "linear-gradient(to top, rgba(0,0,0,0.5)50%, rgba(0,0,0,0.5)50%), url(index.gif)";
    maincontainer.style.backgroundPosition = "center";
    maincontainer.style.backgroundSize = "cover";
    maincontainer.style.backgroundRepeat = "no-repeat";
  });
});

next.addEventListener("click", function () {
  if (songIndex >= 6) songIndex = 1;
  else songIndex += 1;
  audioElement.src = `song${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  document.querySelector("#song-playing").innerText =
    songs[songIndex - 1].songName;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
});

prev.addEventListener("click", function () {
  if (songIndex <= 1) songIndex = 6;
  else songIndex -= 1;
  audioElement.src = `song${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  document.querySelector("#song-playing").innerText =
    songs[songIndex - 1].songName;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
});

//handle modal window
const nav = document.querySelector(".nav");
const container = document.querySelector(".container");
const bottom = document.querySelector(".bottom");
const sign_in = document.querySelector("#sign-in");
const sign_up = document.querySelector("#sign-up");
const submit = document.querySelectorAll(".submit");
const modal = document.querySelector(".modal");
const modal_content_1 = document.querySelector("#modal-content1");
const modal_content_2 = document.querySelector("#modal-content2");
const modal_anchor = document.querySelector("#modal-anchor");
const corousel = document.querySelector(".corousel");

sign_in.addEventListener("click", function () {
  console.log("signin");
  container.classList.add("blur");
  bottom.classList.add("blur");
  nav.classList.add("blur");
  corousel.classList.add("blur");

  modal.classList.remove("hidden");
  modal_content_1.classList.remove("hidden");
  audioElement.pause();
});
sign_up.addEventListener("click", function () {
  console.log("signup");
  container.classList.add("blur");
  bottom.classList.add("blur");
  nav.classList.add("blur");
  corousel.classList.add("blur");

  modal.classList.remove("hidden");
  modal_content_2.classList.remove("hidden");
  audioElement.pause();
});

submit.forEach(function (e) {
  e.addEventListener("click", function () {
    container.classList.remove("blur");
    bottom.classList.remove("blur");
    nav.classList.remove("blur");
    corousel.classList.remove("blur");

    modal.classList.add("hidden");
    modal_content_2.classList.add("hidden");
    modal_content_1.classList.add("hidden");
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    audioElement.play();
  });
});

modal_anchor.addEventListener("click", function () {
  console.log("signup");
  container.classList.add("blur");
  bottom.classList.add("blur");
  nav.classList.add("blur");
  corousel.classList.add("blur");

  modal.classList.remove("hidden");
  modal_content_2.classList.remove("hidden");
});

window.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key == "Escape") {
    container.classList.remove("blur");
    bottom.classList.remove("blur");
    nav.classList.remove("blur");
    corousel.classList.remove("blur");

    modal.classList.add("hidden");
    modal_content_2.classList.add("hidden");
    modal_content_1.classList.add("hidden");

    if (audioElement.play) {
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      audioElement.play();
    }
  }
});

//pause on spacebar
document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.code === "Space") {
    console.log("click");
    if (audioElement.paused || audioElement.currentTime <= 0) {
      // let id = Number(element.target.id);
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      gif.style.opacity = 1;
      maincontainer.style.transition = "background 1s ease-in";
      maincontainer.style.background =
        "linear-gradient(to top, rgba(0,0,0,0.5)50%, rgba(0,0,0,0.5)50%), url(index.gif)";
      maincontainer.style.backgroundPosition = "center";
      maincontainer.style.backgroundSize = "cover";
      maincontainer.style.backgroundRepeat = "no-repeat";
    } else {
      audioElement.pause();
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
      gif.style.opacity = 0;
      maincontainer.style.transition = "background 1s ease-in";
      maincontainer.style.background =
        "linear-gradient(to top, rgba(0,0,0,0.5)50%, rgba(0,0,0,0.5)50%), url(https://imgs.search.brave.com/rhsZhzDvRY1C0VY13_y1_kgikoPRC3ZA_d-ypweV8no/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI5NDcz/MTUuanBn)";
      maincontainer.style.backgroundPosition = "center";
      maincontainer.style.backgroundSize = "cover";
      maincontainer.style.backgroundRepeat = "no-repeat";
      gif.style.opacity = "0";
      //  makeAllPlays();
    }
  }
});

let click = 0;
video.addEventListener("click", function () {
  if (click == 0) click = 1;
  else click = 0;
  if (click == 1) {
    if (audioElement.play) {
      audioElement.pause();
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
      gif.style.opacity = 0;
      maincontainer.style.transition = "background 1s ease-in";
      maincontainer.style.background =
        "linear-gradient(to top, rgba(0,0,0,0.5)50%, rgba(0,0,0,0.5)50%), url(https://imgs.search.brave.com/rhsZhzDvRY1C0VY13_y1_kgikoPRC3ZA_d-ypweV8no/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI5NDcz/MTUuanBn)";
      maincontainer.style.backgroundPosition = "center";
      maincontainer.style.backgroundSize = "cover";
      maincontainer.style.backgroundRepeat = "no-repeat";
      gif.style.opacity = "0";
    }
    document.querySelector("#video-home").muted = false;
  } else {
    document.querySelector("#video-home").muted = true;
  }
});

//  make songs download
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "d") {
    event.preventDefault(); // Prevent default browser behavior

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = audioElement.src;
    link.download = songs[songIndex - 1].songName + ".mp3";

    // Append the link element to the document
    //document.body.appendChild(link);

    // Simulate a click on the link element
    link.click();

    // Remove the link element from the document
    // document.body.removeChild(link);
  }
});
