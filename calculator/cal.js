class Calculator{
    constructor(previoustext, currenttext){
        this.previoustext = previoustext;
        this.currenttext = currenttext;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,  -1);
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break
            case '%':
                computation = prev % current;
                break;
            default: 
                return
        }

        this.currentOperand  = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplaynumber(number){
        const StringNumber = number.toString();
        const integerDigits = parseFloat(StringNumber.split('.')[0]);
        const decimalDigits = StringNumber.split('.')[1];
        let integerDisplay;
        if(isNaN(integerDigits)){
            integerDigits = ''
        }else{
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if(decimalDigits != null){
            return `${integerDigits}.${decimalDigits}`;
        }
        else{
            return integerDisplay;
        }
    }

    updatedisplay(){
        this.currenttext.textContent = this.getDisplaynumber(this.currentOperand);
        if(this.operation != null){
            this.previoustext.textContent =  `${this.getDisplaynumber(this.previousOperand)} ${this.operation}`;
        } else{
            this.previoustext.textContent = '';
        }
    }
}




const numberbuttons = document.querySelectorAll('[data-number]');
const operationbuttons = document.querySelectorAll('[data-operation]');
const equalsbutton = document.querySelector('[data-equal]');
const deletebutton = document.querySelector('[data-delete]');
const allclearbutton = document.querySelector('[data-allclear]');
const previoustext = document.querySelector('[data-previous]');
const currenttext = document.querySelector('[data-current]');


const calculator = new Calculator(previoustext, currenttext);


numberbuttons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerText);
        calculator.updatedisplay();
    })
})


operationbuttons.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updatedisplay();
    })
})


equalsbutton.addEventListener('click', button => {
    calculator.compute();
    calculator.updatedisplay();
});

allclearbutton.addEventListener('click', button => {
    calculator.clear();
    calculator.updatedisplay();
})


deletebutton.addEventListener('click', button => {
    calculator.delete();
    calculator.updatedisplay();
})