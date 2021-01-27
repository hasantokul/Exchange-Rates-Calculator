const amountInput = document.getElementById("amount")
const firstSelect = document.getElementById("firstCurrency")
const secondSelect = document.getElementById("secondCurrency")

eventListeners()

const currency = new Currency(firstSelect.options[firstSelect.selectedIndex].textContent,secondSelect.options[secondSelect.selectedIndex].textContent)
const ui = new UI(firstSelect,secondSelect)

function eventListeners(){
    amountInput.addEventListener("input",exchangeAmount)

    firstSelect.onchange = function(){
        currency.changeFirstCurrent(firstSelect.options[firstSelect.selectedIndex].textContent)
        ui.changeFirst()
    }
    secondSelect.onchange = function(){
        currency.changeSecondCurrent(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecond()
    }
}

function exchangeAmount(){
    currency.changeAmount(amountInput.value)
    currency.exchange()
    .then(result => {
        ui.displayResult(result)
    })
    .catch(err => console.log(err))

}