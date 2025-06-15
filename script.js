// Animate SVG drawing and fill with GSAP
gsap.registerPlugin(SplitText);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// ===button effect===
let svgList = [
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="blue"><path d="m480-193 85-85 57 56L480-80 338-222l57-56 85 85ZM193-480l85 85-56 57L80-480l142-142 56 57-85 85Zm574 0-85-85 56-57 142 142-142 142-56-57 85-85ZM480-767l-85 85-57-56 142-142 142 142-57 56-85-85Z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="green"><path d="M380-80q-24.75 0-42.37-17.63Q320-115.25 320-140v-180H140q-24.75 0-42.37-17.63Q80-355.25 80-380v-440q0-24.75 17.63-42.38Q115.25-880 140-880h440q24.75 0 42.38 17.62Q640-844.75 640-820v180h180q24.75 0 42.38 17.62Q880-604.75 880-580v440q0 24.75-17.62 42.37Q844.75-80 820-80H380Zm0-60h440v-440H580v-240H140v440h240v240Zm100-340Z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="yellow"><path d="M160-80v-237q0-20 9.5-38t26.5-29l58-39q5.67 83.33 20.67 145.33 15 62 47 134L160-80Zm207-80q-33-70-50-144t-17-149q0-125 49.5-235.5T480-856q81 57 130.5 167.5T660-453q0 74.67-17 148.5T593-160H367Zm113-286.67q30.33 0 51.83-21.5t21.5-51.83q0-30.33-21.5-51.83T480-593.33q-30.33 0-51.83 21.5T406.67-520q0 30.33 21.5 51.83t51.83 21.5ZM800-80l-161.67-63.67q32-72 47-134T706-423l58 39q17 11 26.5 29t9.5 38v237Z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="orange"><path d="M236-40q-48.67 0-82.33-33.67Q120-107.33 120-156t33.67-82.33Q187.33-272 236-272q14 0 25 2.67 11 2.66 22 7.66L358.67-356q-22-25.67-32.34-58.33-10.33-32.67-5-67l-107.66-36.34q-15.67 25-40.67 39.34Q148-464 116-464q-48.67 0-82.33-33.67Q0-531.33 0-580t33.67-82.33Q67.33-696 116-696t82.33 33.67Q232-628.67 232-580v5.33l108.33 37.34q18.67-33.34 46.84-53Q415.33-610 450-617v-115q-39-11-62.5-42.83Q364-806.67 364-844q0-48.67 33.67-82.33Q431.33-960 480-960t82.33 33.67Q596-892.67 596-844q0 37.33-24 69.17Q548-743 510-732v115q34.67 7 63.17 26.67 28.5 19.66 47.16 53L728-574.67V-580q0-48.67 33.67-82.33Q795.33-696 844-696t82.33 33.67Q960-628.67 960-580t-33.67 82.33Q892.67-464 844-464q-32 0-57.5-14.33-25.5-14.34-40.17-39.34l-107.66 36.34Q644-447 634-414.5T601.33-356L677-262q11-5 22-7.5t25-2.5q48.67 0 82.33 33.67Q840-204.67 840-156t-33.67 82.33Q772.67-40 724-40t-82.33-33.67Q608-107.33 608-156q0-20 5.83-36.83 5.84-16.84 16.17-31.84L554.33-319q-35 19-74.83 19t-74.83-19L330-224q10.33 15 16.17 31.5Q352-176 352-156q0 48.67-33.67 82.33Q284.67-40 236-40Z"/></svg>',
  '<svg width="60"height="57"viewBox="0 0 60 57" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M30.6413 28.6074C30.6413 28.6074 23.9055 11.5363 31.228 5.78222C37.7975 0.619942 47.044 0.634953 53.2364 6.48854C62.2214 14.9817 30.6413 28.6074 30.6413 28.6074ZM30.6413 28.6074C30.6413 28.6074 37.2252 44.5684 30.6413 50.5776C24.1809 56.4741 13.9249 56.4741 7.46456 50.5776C-1.75954 42.1587 30.6413 28.6074 30.6413 28.6074ZM30.6413 28.6074C30.6413 28.6074 47.0113 23.3074 53.2364 29.1279C59.5878 35.0664 59.5879 44.6391 53.2364 50.5776C44.2336 58.9952 30.6413 28.6074 30.6413 28.6074ZM30.6413 28.6074C30.6413 28.6074 14.1947 34.7609 7.46456 29.1279C0.178478 23.0295 0.178483 11.8806 7.46456 5.78222C17.2633 -2.41917 30.6413 28.6074 30.6413 28.6074Z"stroke="url(#paint0_linear_97_24)"stroke-width="3"/><defs><linearGradient id="paint0_linear_97_24" x1="7.84049" y1="57.2015" x2="56.2134" y2="1.12634" gradientUnits="userSpaceOnUse"><stop offset="0.0180505" stop-color="#FFF701" /><stop offset="0.191153" stop-color="#FB00FF" /><stop offset="0.70735" stop-color="#0075B0" /><stop offset="0.805086" stop-color="#00C7FF" /><stop offset="0.860128" stop-color="#00D4C6" /><stop offset="1" stop-color="#00FF09" /></linearGradient></defs></svg>',
];

let aboutme = document.querySelector(".aboutme");

// Create container only once
let svgCon = document.createElement("div");
svgCon.classList.add("svg-container");
svgCon.style.opacity = "1";
svgList.forEach((svg) => {
  svgCon.innerHTML += svg;
});
aboutme.appendChild(svgCon);

let allSVGicon = svgCon.querySelectorAll("svg");
let positions = [
  { x: -10, y: -50 },
  { x: 10, y: -60 },
  { x: -50, y: -70 },
  { x: 50, y: -50 },
  { x: 20, y: -80 },
];
aboutme.addEventListener("mouseenter", () => {
  gsap.killTweensOf(allSVGicon);
  gsap.set(allSVGicon, {
    opacity: 0,
    x: 0,
    y: 0,
    scale: 0,
  });

  let tl = gsap.timeline();

  allSVGicon.forEach((icon, i) => {
    const { x, y } = positions[i] || { x: 0, y: 0 };

    tl.to(
      icon,
      {
        opacity: 1,
        scale: 1.5,
        x,
        y,
        duration: 0.6,
        ease: "power2.out",
      },
      i * 0.2
    ).to(
      icon,
      {
        opacity: 0,
        scale: 1.5,
        x,
        y: 300,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2"
    );
  });
});

// aboutme.addEventListener("mouseleave", () => {
//   allSVGicon.forEach((icon, i) => {
//     gsap.to(icon, {
//       opacity: 0,
//       x: 0,
//       y: 0,
//       scale: 0,
//       duration: 0.5,
//       ease: "power2.in"
//     });
//   });
// });

// ===case studies=======
let popup = document.createElement("div");
const caseStudies = [
  {
    id: 1,
    projectName: "Simple Homepage",
    whatIuse: "Use HTML5 CSS3",
    FetchingProblem:
      "orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis",
    soliution:
      "orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam",
    source: "http://github.com/pronobiswas",
    livelink: "https://react-roter-dom.vercel.app/",
  },
  {
    id: 2,
    projectName: "Multipage with Navigation",
    whatIuse: "Use HTML5 SCSS",
    FetchingProblem:
      "orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis",
    soliution:
      "orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam",
    source: "http://github.com/pronobiswas",
    livelink: "https://react-roter-dom.vercel.app/",
  },
  {
    id: 3,
    projectName: "Multipage with Form",
    whatIuse: "HTML5 CSS3 JavaScript",
    FetchingProblem:
      "orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis",
    soliution:
      "orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam",
    source: "http://github.com/pronobiswas",
    livelink: "https://react-roter-dom.vercel.app/",
  },
  {
    id: 4,
    projectName: "Number Gussing Game",
    whatIuse: "HTML5 BootStrap JavaScript",
    FetchingProblem:
      "orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis",
    soliution:
      "orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam",
    source: "http://github.com/pronobiswas",
    livelink: "https://react-roter-dom.vercel.app/",
  },
  {
    id: 5,
    projectName: "PortFolio",
    whatIuse: "ReactJs Tailwind CSS",
    FetchingProblem:
      "orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis",
    soliution:
      "orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam",
    source: "http://github.com/pronobiswas",
    livelink: "https://react-roter-dom.vercel.app/",
  },
  {
    id: 6,
    projectName: "Ecommarce Site",
    whatIuse: "React JS Express JS",
    FetchingProblem:
      "orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis",
    soliution:
      "orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam",
    source: "http://github.com/pronobiswas",
    livelink: "https://react-roter-dom.vercel.app/",
  },
  {
    id: 7,
    projectName: "Theme Customization",
    whatIuse: "Wordpress",
    FetchingProblem:
      "orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis",
    soliution:
      "orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam",
    source: "http://github.com/pronobiswas",
    livelink: "https://react-roter-dom.vercel.app/",
  },
];
let slider_track = document.querySelectorAll(".slider_track");
let slider_track2 = document.querySelectorAll(".slider_track2");

let html = "";
caseStudies.forEach((data, index) => {
  html += `
    <div class="box" onClick ="handleCaseStydiesItem(${index})">
      <h3 class="projectName">${data.projectName}</h3>
      <h4 class="whatIuse">${data.whatIuse}</h4>
      <p class="describe_txt"><b>Fetching Problem</b>${data.FetchingProblem}</p>
      <p class="describe_txt"><b>soliution</b>${data.soliution}</p>
    </div>
  `;
});
slider_track.forEach((elem) => {
  elem.innerHTML = html;
});
slider_track2.forEach((elem) => {
  elem.innerHTML = html;
});
function handleCaseStydiesItem(index) {
  let itemdata = caseStudies[index];

  popup.classList.add("itemWarpper");
  let html = `
  
    <div class="itemCardWarpper">
      <div class="close" onclick="dismisItemWarpper()">X</div>
      <div class="itemImage"></div>
      <div class="descBox projectName">
      <h5>Project NAme</h5>
       <p>${itemdata.projectName}</p>
       </div>
      <div class="descBox whatIuse">
      <h5>What I Use</h5>
      <p>${itemdata.whatIuse}</p>
      </div>
      <div class="descBox feacthingProblem">
      <h5>Featching Problems</h5>
      <p>${itemdata.FetchingProblem}</p>
      </div>
      <div class="descBox solution">
      <h5>Solution</h5>
      <p>${itemdata.soliution}</p>
      </div>
      <div class="descBox sourceCode">
      <h5>Source</h5>
      <p>${itemdata.source}</p>
      </div>
      <div class="descBox liveLink">
      <h5>Live Link</h5>
      <p>${itemdata.livelink}</p>
      </div>
    </div>
  `;
  popup.innerHTML = html;
  document.body.appendChild(popup);
}
function dismisItemWarpper() {
  popup.innerHTML = "";
  document.body.removeChild(popup);
}

// ==exprement==
let exprement_box = document.querySelectorAll(".exprement_box");
exprement_box.forEach((elem, idx) => {
  (elem.style.top = 0), (elem.style.left = `${idx * 20}%`);
  elem.style.zIndex = `${idx}`;
});

document.addEventListener("DOMContentLoaded", function () {
  // let smoother = ScrollSmoother.create({
  //   smooth: 5,
  //   effects: true,
  //   normalizeScroll: true
  // });

  const svg = document.querySelector("#headersvg");
  if (!svg) return;

  const paths = svg.querySelectorAll("#headersvg path");
  paths.forEach((path, i) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.fillOpacity = 0;
    // Animate stroke drawing
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 0.5,
      delay: i * 0.15,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(path, {
          fillOpacity: 1,
          duration: 0.6,
          ease: "power1.inOut",
        });
      },
    });
  });
  // ===draw the ovelayText===
  gsap.to("#startOverlay text", {
    strokeDashoffset: 0,
    duration: 5,
    ease: "power2.out",
  });
  // ===remove the ovelay===
  gsap.to("#startOverlay", {
    opacity: 0,
    x: "-100%",
    duration: 1,
    delay: 1,
    ease: "power2.out",
  });
});
// pronob biswas

// Mouse tracker (custom cursor)
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(SplitText);
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  // Create 200 lines inside the cursor
  for (let i = 0; i < 200; i++) {
    const cursorLine = document.createElement("div");
    cursorLine.classList.add("cursor-line");
    cursor.appendChild(cursorLine);
  }

  document.addEventListener("mousemove", (e) => {
    gsap.to(".cursor-line", {
      x: e.clientX,
      y: e.clientY,
      scale: (i, target) => {
        return 1 + i * (2 / 200);
      },
      duration: 0.2,
      stagger: -0.0015,
    });
  });

let myNames = document.getElementById("myNames");

// Track previous mouse position
let lastMouseX = 0;
let lastMouseY = 0;
let dirX = 1;
let dirY = 1;
let charColor =["red","Aqua","Blue","BlueViolet","Chartreuse","Crimson","DeepPink","Gold","yellow","green",]

document.addEventListener("mousemove", (e) => {
  dirX = e.clientX > lastMouseX ? 1 : -1;
  dirY = e.clientY > lastMouseY ? 1 : -1;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});

// Split text into characters
SplitText.create(myNames, {
  type: "chars",
  onSplit(self) {
    self.chars.forEach((char) => {
      char.style.display = "inline-block"; // Required for transform

      // Animate on hover in the direction of the mouse
      char.addEventListener("mouseenter", () => {
        gsap.to(char, {
          x: dirX * 100,
          y: dirY * 100,
          color:charColor[Math.floor(Math.random() * 10)],
          autoAlpha: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      // Reset on mouse leave
      char.addEventListener("mouseleave", () => {
        gsap.to(char, {
          x: 0,
          y: 0,
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.inOut",
        });
      });
    });
  },
});



  // =====split text====
  SplitText.create("#myTitle", {
    type: "words, chars",
    onSplit(self) {
      gsap.from(self.chars, {
        color: "rgb(255, 255, 255)",
        duration: 0.8,
        x: -100,
        autoAlpha: 0,
        stagger: 0.1,
      });
    },
  });
});
// move banner logo
document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    ".bannerLogo_container",
    { x: -300, scale: 0.3, opacity: 0 },
    {
      x: 300,
      scale: 1,
      opacity: 1,
      delay: 1,
      duration: 0.8,
      ease: "power1.in",
    }
  );
});
// move angle
gsap.fromTo(
  "#angle1",
  { attr: { fill: "transparent" }, opacity: 0 },
  {
    attr: { fill: "transparent" },
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
  }
);

// show aboutme content
function showAboutMe() {
  const aboutme = document.getElementById("aboutMe");
  const header = document.querySelector("header");
  aboutme.style.display = "block";
  header.style.zIndex = "-1";
  aboutme.style.zIndex = "99999";
  aboutme.style.opacity = "0";
  gsap.to(aboutme, {
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
  });

  gsap.to(".aboutContent", {
    y: "0%",
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
  });

  gsap.to(".aboutContact", {
    y: "0%",
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
  });
  const tabsvg = document.getElementById("tab");
  let paths = document.querySelectorAll("#tab path");
  let rects = document.querySelectorAll("#tab rect");
  const aboutSvg = document.querySelector("#aboutSvg");
  if (!aboutSvg) return;
  const aboutSvgPaths = document.querySelectorAll("#aboutSvg path");
  const talkAboutmeh2 = document.querySelectorAll(".talkAboutme h2");
  const talkAboutmeh3 = document.querySelectorAll(".talkAboutme h3");
  const talkAboutmeh4 = document.querySelectorAll(".talkAboutme h4");
  const talkAboutmeSpan = document.querySelectorAll(".talkAboutme span");
  const talkAboutmeP = document.querySelectorAll(".talkAboutme p");
  const talkAboutmeLi = document.querySelectorAll(".talkAboutme li");
  // ==draw the tab==
  function drawSvgPath(paths, duration = 2, delay = 2) {
    paths.forEach((idx) => {
      const length = idx.getTotalLength();
      idx.style.strokeDasharray = length;
      idx.style.strokeDashoffset = length;
      gsap.to(idx, {
        strokeDashoffset: 0,
        duration: duration,
        delay: delay,
        ease: "power1.inOut",
      });
    });
  }
  drawSvgPath(paths, 2, 1);
  drawSvgPath(rects, 1, 1);

  // ==draw the header footer svg==
  aboutSvgPaths.forEach((path, i) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.fillOpacity = 0;
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 0.5,
      delay: i * 0.15,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(path, {
          fillOpacity: 1,
          duration: 0.6,
          ease: "power1.inOut",
        });
      },
    });
  });

  function removebgColor(elements) {
    console.log(elements);

    elements.forEach((elm) => {
      gsap.to(elm, {
        backgroundColor: "transparent",
        duration: 3,
        delay: 1,
      });
    });
  }
  removebgColor(talkAboutmeLi);
  removebgColor(talkAboutmeh2);
  removebgColor(talkAboutmeh3);
  removebgColor(talkAboutmeh4);
  removebgColor(talkAboutmeSpan);
  removebgColor(talkAboutmeP);

  const descriptionTitle = document.querySelector(".description h4");
  const descriptionTxt = document.querySelectorAll(".description p");

  SplitText.create(".description h4", {
    type: "words, chars ,lines",
    onSplit(self) {
      gsap.from(self.chars, {
        duration: 2,
        y: 100,
        autoAlpha: 0,
      });
    },
  });
  descriptionTxt.forEach((eachline) => {
    SplitText.create(eachline, {
      type: "words, chars ,lines",
      onSplit(self) {
        gsap.from(self.lines, {
          duration: 2,
          y: 100,
          delay: 1,
          autoAlpha: 0,
          stagger: 0.02,
        });
      },
    });
  });
}
// hide about me
function hideAboutMe() {
  const aboutme = document.getElementById("aboutMe");
  const header = document.querySelector("header");
  header.style.zIndex = "999";
  gsap.to(".aboutContent", {
    y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
  });

  gsap.to(".aboutContact", {
    y: "100%",
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
  });

  gsap.to(aboutme, {
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power1.inOut",
    onComplete: () => {
      aboutme.style.display = "none";
      aboutme.style.zIndex = "-1";
    },
  });
}

// ====animate sprate icon===
document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".icon1", {
    scale: 1.5,
    duration: 2,
    yoyo: true,
    ease: "linear",
  });
  gsap.to(".icon2", {
    rotate: 360,
    duration: 5,
    repeat: -1,
    ease: "linear",
  });
  gsap.to(".icon3", {
    rotate: 360,
    duration: 3,
    repeat: -1,
    ease: "linear",
  });
  gsap.to(".icon17", {
    y: 80,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "bounce.out",
  });
  gsap.to(".icon18", {
    y: 100,
    duration: 2.5,
    yoyo: true,
    repeat: -1,
    ease: "bounce.out",
  });
  gsap.to(".icon19", {
    y: 85,
    yoyo: true,
    duration: 3,
    repeat: -1,
    ease: "bounce.out",
  });
  let left_col = this.documentElement.querySelector(".left_col");
  let right_col = this.documentElement.querySelector(".right_col");
  left_col.style.opacity = 0;
  right_col.style.opacity = 0;
  gsap.to(left_col, {
    opacity: 1,
    delay: 2,
    duration: 5,
  });
  gsap.to(right_col, {
    opacity: 1,
    delay: 2,
    duration: 5,
  });
});
// =====move sprate icon with mouse move===
let banner = document.getElementById("banner");
banner.addEventListener("mousemove", function (e) {
  const icons = document.querySelectorAll(".sprateIcon");
  icons.forEach((icon, i) => {
    const speed = 0.05 + i * 0.02;
    gsap.to(icon, {
      x: (e.clientX - window.innerWidth / 2) * speed,
      y: (e.clientY - window.innerHeight / 2) * speed,
      duration: 0.6,
      ease: "power2.out",
    });
  });
});

// ====handle form=====
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".pro_input");

  inputs.forEach((input) => {
    const label = input.parentElement.querySelector(".pro_label");

    // Function to update label position based on value
    const updateLabel = () => {
      if (input.value.trim() !== "") {
        label.style.top = "-3px";
        label.style.fontSize = "13px";
        label.style.color = "#ffffff";
      } else {
        label.style.top = "20px";
        label.style.fontSize = "16px";
        label.style.color = "#ffffff";
      }
    };

    // Initialize on page load
    updateLabel();

    // Bind events
    input.addEventListener("input", updateLabel);
    input.addEventListener("blur", updateLabel);
  });
});

window.addEventListener("load", () => {
  const wrapper = document.querySelector(".slider_wrapper");
  const wrapper2 = document.querySelector(".slider_wrapper2");
  const track = document.querySelector(".slider_track");
  const trackWidth = track.offsetWidth;

  gsap.to(wrapper, {
    x: `-${trackWidth}px`,
    duration: 20,
    ease: "none",
    repeat: -1,
  });
});
window.addEventListener("load", () => {
  const wrapper2 = document.querySelector(".slider_wrapper2");
  const track2 = document.querySelector(".slider_track2");
  const trackWidth2 = track2.offsetWidth;

  gsap.to(wrapper2, {
    x: `-${trackWidth2}px`,
    duration: 20,
    ease: "none",
    repeat: -1,
  });
});

// Make sure GSAP and ScrollTrigger are loaded

window.addEventListener("load", () => {
  const wrapper = document.querySelector(".exprement_wrapper");
  const section = document.getElementById("exprement");
  const totalWidth = wrapper.scrollWidth;
  const viewportWidth = window.innerWidth;

  gsap.to(wrapper, {
    x: () => viewportWidth - totalWidth,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: () => `+=${totalWidth - viewportWidth}`,
      scrub: true,
    },
  });
});

let bigtext = document.querySelectorAll(".bigtext");
bigtext.forEach((texts) => {
  SplitText.create(texts, {
    type: "words, chars",
    onSplit(self) {
      gsap.from(self.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    },
  });
});
document.querySelectorAll(".bigtext").forEach((texts) => {
  SplitText.create(texts, {
    type: "words, chars",
    onSplit(self) {
      gsap.from(self.chars, {
        duration: 1,
        y: 240,
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: texts,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      });
    },
  });
});

gsap.to("#circle", {
  duration: 10,
  repeat: -1,
  ease: "power2.inOut",
  motionPath: {
    path: "#myPath",
    align: "#myPath",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});
