// Animate SVG drawing and fill with GSAP
document.addEventListener("DOMContentLoaded", function() {
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
                    ease: "power1.inOut"
                });
            }
        });
    });
});
// pronob biswas


// Mouse tracker (custom cursor)
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(SplitText);
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Optional: cursor scale on click
  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
  });
  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
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
        duration: .8,
        x: -100,
        autoAlpha: 0,
        stagger: 0.1,
      });
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    ".bannerLogo_container",
    { x: -300, scale: 0.3, opacity: 0 },
    {
      x: 300,
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power1.in",
    }
  );
});

function showAboutMe() {
    let aboutme = document.getElementById("aboutMe");
    aboutme.style.zIndex = "99999"
  gsap.to(".aboutContent", {
    y: "0",
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
  });
  gsap.to(".aboutContact", {
    y: "0",
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
  });
}
function hideAboutMe() {
  gsap.to(".aboutContact", {
    y: "100%",
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
  });
  gsap.to("#slideUp", {
    y: "0%",
    opacity: 0,
    duration: 1,
    ease: "power1.inOut",
  });
}
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
function drawSvgPath(selector, duration = 2) {
  const path = document.querySelector(selector);
  if (!path) return;
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: duration,
    ease: "power1.inOut",
  });
}
setTimeout(() => {
  drawSvgPath("#path2", 2);
}, 100);
