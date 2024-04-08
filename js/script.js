const header = document.querySelector(".header"),
  btn = document.querySelector(".btn--mobile-nav");

btn.addEventListener("click", () => {
  header.classList.toggle("open-nav");
});

const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHero);
