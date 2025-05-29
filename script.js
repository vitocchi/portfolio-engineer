document.addEventListener("DOMContentLoaded", () => {
  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ヘッダーの背景色をスクロール位置に応じて変更
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    }
  });
});
