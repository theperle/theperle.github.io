// Drawer (mobile)
$("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle(280);
  $("body").toggleClass("is-fixed");
});

// Close drawer on nav link click (mobile)
$(".header__nav-link").on("click", function () {
  if (window.innerWidth < 768) {
    $("#js-button-drawer").removeClass("is-checked");
    $("#js-drawer").slideUp(280);
    $("body").removeClass("is-fixed");
  }
});

// Scroll animation
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-on");
        animObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll("[data-anim]").forEach((el) => {
  animObserver.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = window.innerWidth < 768 ? 80 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});
