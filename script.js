// Mouse tracker (custom cursor)
document.addEventListener("DOMContentLoaded", function() {
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
});
console.log("Script loaded successfully!");

document.addEventListener("DOMContentLoaded", function() {
    gsap.fromTo(".bannerLogo_container", 
        { x: -300, scale: 0.3, opacity: 0 }, 
        { 
            x: 300, // Move to original position
            scale: 1,
            opacity: 1,
            duration: .8,
            ease: "power1.in"
        }
    );
});

function showAboutMe() {
    gsap.to("#slideDown", {
        y: "100%",
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
    });
    gsap.to("#slideUp", {
        y:"-100%",
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
    });
    
}
function hideAboutMe() {
    gsap.to("#slideDown", {
        y: "0%",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    });
    gsap.to("#slideUp", {
        y:"0%",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    });
}
gsap.fromTo("#angle1",
    { attr: { fill: "transparent" }, opacity: 0 }, 
    { 
        attr: { fill: "transparent" },
        opacity: 1, 
        duration: 1, 
        ease: "power1.inOut" 
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
        ease: "power1.inOut"
    });
}
setTimeout(() => {
    drawSvgPath("#path2", 2);
}, 100);