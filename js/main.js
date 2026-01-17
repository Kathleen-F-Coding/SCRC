const searchInput = document.querySelector("[data-search]")

let cards = []

searchInput.addEventListener("input", e => {
    const value = e.target.value
    cards.forEach(card => {
    const inVisible =
     card-header.toLowerCase().includes(value) 
     card-body.toLowerCase().includes(value)
    card.element.classList.toggle("hide", !isVisible)
    })
})