// Animate SVG drawing and fill with GSAP
gsap.registerPlugin(SplitText);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
let popup = document.createElement('div');
const caseStudies = [
    {
        projectName:"Project name1",
        whatIuse:"What I use",
        FetchingProblem:"orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis" ,
        soliution:"orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam"

    },
    {
        projectName:"Project name1",
        whatIuse:"What I use",
        FetchingProblem:"orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis" ,
        soliution:"orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam"

    },
    {
        projectName:"Project name1",
        whatIuse:"What I use",
        FetchingProblem:"orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis" ,
        soliution:"orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam"

    },
    {
        projectName:"Project name1",
        whatIuse:"What I use",
        FetchingProblem:"orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis" ,
        soliution:"orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam"

    },
    {
        projectName:"Project name1",
        whatIuse:"What I use",
        FetchingProblem:"orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis" ,
        soliution:"orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam"

    },
    {
        projectName:"Project name1",
        whatIuse:"What I use",
        FetchingProblem:"orem ipsum dolor sit amet consectetur adipisicing elit Et rem quisquam explicabo ullam eligendi quibusdam similique commodi voluptates facilis officiis" ,
        soliution:"orem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae esse quisquam"

    }
]
let slider_track = document.querySelectorAll('.slider_track');
let slider_track2 = document.querySelectorAll('.slider_track2');

let html = '';
caseStudies.forEach((data , index) => {
  html += `
    <div class="box" onClick ="handleCaseStydiesItem(${index})">
      <h3 class="projectName">${data.projectName}</h3>
      <h4 class="whatIuse">${data.whatIuse}</h4>
      <p class="describe_txt"><b>Fetching Problem</b>${data.FetchingProblem}</p>
      <p class="describe_txt"><b>soliution</b>${data.soliution}</p>
    </div>
  `;
});
slider_track.forEach((elem)=>{
    elem.innerHTML = html;
});
slider_track2.forEach((elem)=>{
    elem.innerHTML = html;
})
function handleCaseStydiesItem(index){
  let itemdata = caseStudies[index];
  
  popup.classList.add('itemWarpper')
  let html = `
  
    <div class="itemCardWarpper">
      <div class="close" onclick="dismisItemWarpper()">X</div>
      <div class="itemImage"></div>
      <div class="projectName">${itemdata.projectName}</div>
      <div class="whatIuse">${itemdata.whatIuse}</div>
      <div class="feacthingProblem">${itemdata.FetchingProblem}</div>
      <div class="solution">${itemdata.soliution}</div>
    </div>
  `
  popup.innerHTML= html;
  document.body.appendChild(popup);
  
}
function dismisItemWarpper(){
  console.log("ki re vab ki?");
  
  popup.innerHTML= "";
  document.body.removeChild(popup);
}

// ==exprement==
let exprement_box = document.querySelectorAll('.exprement_box');
exprement_box.forEach((elem , idx) => {
  elem.style.top = 0,
  elem.style.left = `${idx * 20}%`;
  elem.style.zIndex = `${idx}`;
});




document.addEventListener("DOMContentLoaded", function () {
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
      ease: "power2.out"
    });
    // ===remove the ovelay===
    gsap.to("#startOverlay", {
      opacity:0,
      x:"-100%",
      duration: 1,
      delay:1,
      ease: "power2.out"
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
  for(let i = 0; i < 200; i++) {
    const cursorLine = document.createElement("div");
    cursorLine.classList.add("cursor-line");
    cursor.appendChild(cursorLine);
  }

  document.addEventListener("mousemove", (e) => {
    gsap.to(".cursor-line", {
      x: e.clientX,
      y: e.clientY,
      scale: (i, target)=>{
        return 1+(i*(2/200))
      },
      duration:0.2,
      stagger:-0.0015,
    });
  });


  // ===draw text===
  gsap.to("#myName", {
    strokeDashoffset: 0,
    duration: 5,
    ease: "power2.out",
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
      delay:1,
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
          delay:1,
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
  gsap.to(left_col,{
    opacity:1,
    delay:2,
    duration:5,
  })
  gsap.to(right_col,{
    opacity:1,
    delay:2,
    duration:5,
  })

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
bigtext.forEach((texts)=>{
  SplitText.create(texts, {
  type: "words, chars",
  onSplit(self) {
    gsap.from(self.chars, {
      duration: 1, 
      y: 100, 
      autoAlpha: 0, 
      stagger: 0.05
    });
  }
});
})
document.querySelectorAll(".bigtext").forEach((texts) => {
  SplitText.create(texts, {
    type: "words, chars",
    onSplit(self) {
      gsap.from(self.chars, {
        duration: 1,
        y: 140,
        autoAlpha: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: texts,
          start: "top 100%",
          end: "top 70%",
          scrub: true,
        }
      });
    }
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
      alignOrigin: [0.5, 0.5]
    }
  });
