// Typing Effect
let text = "Full Stack Developer 🚀";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact Form
function sendMessage(e) {
  e.preventDefault();
  alert("Message sent successfully!");
}