document.querySelector(".sort-form").addEventListener("submit", (e) => {
    e.preventDefault()
    numberRaffle().then(showResults)
})

// putting event in the reset button 
document.getElementById("btn-reset").addEventListener("click", () =>{
    document.getElementById("form-container").style.display = "block"
    document.getElementById("result").style.display = "none"
})

const quantityNumberInput = document.getElementById("number")
const fromInput = document.getElementById("from")
const toInput = document.getElementById("to")
const repeatNumberInput = document.getElementById("toggle")

