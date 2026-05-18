// ===== CULTURE VIEW MORE
const loadBtn = document.getElementById("loadMoreBtn");
const hiddenCards = document.querySelectorAll(".hidden-card");

let shown = false;

loadBtn.addEventListener("click", () => {

  hiddenCards.forEach(card => {
    card.style.display = shown ? "none" : "flex";
  });

  loadBtn.textContent = shown
    ? "View More"
    : "Show Less";

  shown = !shown;
});