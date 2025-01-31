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

function numberRaffle(){
    return new Promise((resolve) => {
// getting values 
const quantityNumberValue = Number.parseInt(quantityNumberInput.value)
const fromValue = Number.parseInt(fromInput.value)
const toValue = Number.parseInt(toInput.value)
const repeatNumberValue = repeatNumberInput.checked

// creating numbers array 
const numbers = []

if(repeatNumberValue){
    for(let i = 0; i < quantityNumberValue; i++){
        // formula to generate numbers
        const number = Math.floor(Math.random() * (toValue - fromValue + 1)) + fromValue
        // adding number in numbers array
        numbers.push(number)
    }
}else{
    if(quantityNumberValue > toValue - fromValue + 1){
        alert("A quantidade de números é maior que o intervalo disponível!")
        resolve([])
        return
    }

    while(numbers.length < quantityNumberValue){
        const number =  Math.floor(Math.random() * (toValue - fromValue + 1)) + fromValue
        if(!numbers.includes(number)){
            numbers.push(number)
        }
    }
}
    resolve(numbers)
    })  
}

