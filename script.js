const bodyTag = document.querySelector("body")
const darkModeToggle = document.querySelector("a.dark-mode-toggle")

darkModeToggle.addEventListener("click", function() {
    bodyTag.classList.toggle("dark-mode")
})