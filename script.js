document.addEventListener("DOMContentLoaded", function () {
  // Typing animation in header
  const headerText = "Tolu – Cybersecurity Analyst & Web Developer";
  const header = document.querySelector("header h1");
  let i = 0;

  function typeWriter() {
    if (i < headerText.length) {
      header.innerHTML += headerText.charAt(i);
      i++;
      setTimeout(typeWriter, 70);
    }
  }

  if (header) {
    header.innerHTML = "";
    typeWriter();
  }

  // Form submission confirmation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      setTimeout(() => {
        alert("✅ Message sent! I’ll get back to you shortly.");
      }, 300);
    });
  }

  // Load particles.js if available and enabled
  const particlesContainer = document.getElementById("particles-js");
  if (particlesContainer && window.particlesJS) {
    particlesJS.load("particles-js", "particles.json", function () {
      console.log("✅ particles.js config loaded.");
    });
  }
});
