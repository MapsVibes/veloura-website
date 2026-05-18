// ===== THEME (shared across all pages) =====
(function initTheme(){
  const saved = localStorage.getItem("velouraTheme");
  if(saved === "dark") document.body.classList.add("dark");
})();

function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem("velouraTheme", document.body.classList.contains("dark") ? "dark" : "light");
}

// ===== MOBILE MENU =====
function toggleMobileMenu(){
  const menu = document.getElementById("mobileMenu");
  if(!menu) return;
  menu.classList.toggle("show");
}

// ===== INTRO (home only) =====
function runIntro(){
  const intro = document.getElementById("intro");
  if(!intro) return;
  setTimeout(() => { intro.style.display = "none"; }, 2600);
}

// ===== CART COUNT PILL (shared) =====
function getCart(){
  return JSON.parse(localStorage.getItem("velouraCart") || "[]");
}
function setCart(cart){
  localStorage.setItem("velouraCart", JSON.stringify(cart));
}
function cartCount(){
  const cart = getCart();
  return cart.reduce((sum, i) => sum + i.qty, 0);
}
function updateCartPill(){
  const pill = document.getElementById("cartCountPill");
  if(!pill) return;
  const n = cartCount();
  pill.textContent = String(n);
  pill.style.display = n > 0 ? "grid" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  runIntro();
  updateCartPill();

  const themeBtn = document.getElementById("themeBtn");
  if(themeBtn){
    themeBtn.addEventListener("click", toggleTheme);
  }

  const mobileBtn = document.getElementById("mobileBtn");
  if(mobileBtn){
    mobileBtn.addEventListener("click", toggleMobileMenu);
  }
});
