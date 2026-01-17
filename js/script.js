const searchInput = document.querySelector("[data-search]")
const cards = document.querySelectorAll(".resource-cards .card")

searchInput.addEventListener("input", e => {
    const value = e.target.value
    cards.forEach(card => {
    const isVisible =
        card.querySelector(".header").textContent.toLowerCase().includes(value) ||
        card.querySelector(".body").textContent.toLowerCase().includes(value)
    card.classList.toggle(".hide", !isVisible)
    })
})
