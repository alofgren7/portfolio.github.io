const scrollUp = document.querySelector("#scroll-up");
if (scrollUp) scrollUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
if (burger && ul) {
    burger.addEventListener("click", () => {
        const isOpen = ul.classList.toggle("show");
        burger.setAttribute("aria-expanded", String(isOpen));
    });
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => ul.classList.remove("show"));
    });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
});