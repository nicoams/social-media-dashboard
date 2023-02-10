const html = document.documentElement;
const themeSwitcher = document.querySelector("#toggle");

themeSwitcher.addEventListener("click", () => {
    html.classList.toggle("dark");
})