const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu after clicking a link (mobile)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");   // fade IN
        } else {
          entry.target.classList.remove("show"); // fade OUT
        }
      });
    },
    {
      threshold: 0.08, 
    }
  );

  cards.forEach((card) => {
    card.classList.add("card-animate"); // initial hidden state
    observer.observe(card);
  });
});
