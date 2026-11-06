// Veloura mobile navigation
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector("#nav");

  if (!menuButton || !navigation) return;

  menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
});
