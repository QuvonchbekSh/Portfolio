
// === Dark Mode Toggle with LocalStorage ===
const toggleBtn = document.getElementById("darkModeToggle");
const icon = toggleBtn?.querySelector("i");

// Dark rejimni tiklash
function setInitialDarkMode() {
  const isDark = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark-mode", isDark);
  icon.className = isDark ? "fas fa-moon" : "fas fa-sun";
}

// Rejimni o‘zgartirish
toggleBtn?.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  icon.className = isDark ? "fas fa-moon" : "fas fa-sun";
  localStorage.setItem("darkMode", isDark); // Tanlovni saqlash
});

setInitialDarkMode(); // Boshlanishda rejimni o‘rnatish


// === Smooth Scrolling for Navbar Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === Contact Form Submit (demo) ===
const contactForm = document.querySelector("form");
contactForm?.addEventListener("submit", e => {
  e.preventDefault();
  console.log("Forma yuborildi!");
  alert("Xabaringiz yuborildi (namuna holatda)");
  contactForm.reset();
});

// === Navbar Scroll Shadow Effect ===
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar?.classList.toggle("scrolled", window.scrollY > 100);
});

// === Hamburger Menu Toggle ===
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

// === Reklama bo‘limi uchun: Ad-box link click ===
document.querySelectorAll(".ad-box").forEach(box => {
  box.addEventListener("click", () => {
    const link = box.getAttribute("data-link");
    if (link) window.open(link, "_blank");
  });
});


