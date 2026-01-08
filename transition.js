// fade in on load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// intercept link clicks
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    // ignore external links
    if (!href || href.startsWith("http")) return;

    e.preventDefault();
    document.body.classList.remove("loaded");

    setTimeout(() => {
      window.location.href = href;
    }, 400); // match CSS duration
  });
});
