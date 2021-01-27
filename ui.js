class UI {
    constructor(firstCurrent,secondCurrent){
        this.outputCurrent1 = document.getElementById("outputFirst")
        this.outputCurrent2 = document.getElementById("outputSecond")
        this.outputResult = document.getElementById("outputResult")

        this.firstCurrent = firstCurrent
        this.secondCurrent = secondCurrent
    }
    changeFirst(){
        this.outputCurrent1.textContent = this.firstCurrent.options[this.firstCurrent.selectedIndex].textContent;
    }
    changeSecond(){
        this.outputCurrent2.textContent = this.secondCurrent.options[this.secondCurrent.selectedIndex].textContent;
    }
    displayResult(result){
        this.outputResult.value = result
    }
}