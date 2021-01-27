class Currency {

    constructor(firstCurrent,secondCurrent){
        this.firstCurrent = firstCurrent
        this.secondCurrent = secondCurrent
        this.amount = null

        this.url = "https://api.exchangeratesapi.io/latest?base="
    }
    exchange(){
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrent)
            .then(response => response.json())
            .then(data => {
                const parity = data["rates"][this.secondCurrent];
                const amount2 = Number(this.amount);

                let total = parity * amount2;
                
                resolve(total);

            })
            .catch(err => reject(err))
        })
    }

    changeFirstCurrent(newFirstCurrent){
        this.firstCurrent = newFirstCurrent
    }

    changeSecondCurrent(newSecondCurrent){
        this.secondCurrent = newSecondCurrent
    }

    changeAmount(amount){
        this.amount = amount
    }
}