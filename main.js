function hello(){
    alert("Hello World!")
}

function sum(){
    const num1 = Number(prompt("Digite um número"))
    const num2 = Number(prompt("Digite outro número"))
    const result = num1 + num2
    alert(`A soma dos dois número é de: ${result}`)
}

function isNumber(){
    const a = 5
    if(typeof a == 'number'){
        alert("É um número")
    } else {
        alert("Não é um número")
    }
}

function isString(){
    const a = 5
    if(typeof a == 'string'){
        alert("É uma string")
    } else {
        alert("Não é uma string")
    }
}

function isBoolean(){
    const a = 5
    if(typeof a == 'boolean'){
        alert("É um boolean")
    } else {
        alert("Não é um boolean")
    }
}

function sub(){
    const num1 = Number(prompt("Digite um número"))
    const num2 = Number(prompt("Digite outro número"))
    const result = num1 - num2
    alert(`A subtração dos dois número é de: ${result}`)
}


function mul(){
    const num1 = Number(prompt("Digite um número"))
    const num2 = Number(prompt("Digite outro número"))
    const result = num1 * num2
    alert(`A Multiplicação dos dois número é de: ${result}`)
}


function div(){
    const num1 = Number(prompt("Digite um número"))
    const num2 = Number(prompt("Digite outro número"))
    const result = num1 / num2
    alert(`A divisão dos dois número é de: ${result}`)
}

function isEven(){
    const num = Number(prompt("Digite um número"))
    if (num % 2 === 0){
        alert("O número é par")
    } else {
        alert("O número é ímpar")
    }
}

function isOdd(){
    const num = Number(prompt("Digite um número"))
    if (num % 2 !== 0){
        alert("O número é ímpar")
    } else {
        alert("O número é par")
    }
}





