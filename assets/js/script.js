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
      threshold: 0.2, // 20% visible triggers animation
    }
  );

  cards.forEach((card) => {
    card.classList.add("card-animate"); // initial hidden state
    observer.observe(card);
  });
});
