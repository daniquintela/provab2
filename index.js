// Função que verifica se o número é primo ou não e lista os números primos de 0-1000
function numeroPrimo(number){
    var number = parseInt(prompt('Digite um número'))

    if (number <= 1){
        return "Não é um número primo"
    }

    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return "Não é um numero primo"
        }
    }
  return "É um número primo"
}

function listarPrimos(primos){
    var primos = [];

    for (var number = 2; number <= 1000; number++) {
      var divisores = 0;
  
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          divisores++;
        }
      }
  
      if (divisores === 0) {
        primos.push(number)
      }
    }
    return primos
  }

console.log(listarPrimos())
console.log(numeroPrimo())


// Função que valida uma senha de acordo com as especificações
function validarSenha(senha){
    if (senha.length < 8){
        return false
    }
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
    if (!regexMaiuscula.test(senha) || !regexMinuscula.test(senha) || !regexNumero.test(senha)){
        return false
    }

    return true
}

const senha = prompt('Digite a sua senha')

if (validarSenha(senha)){
    console.log('Senha válida')
} else{
    console.log('Senha inválida')
}



// Função para gerar fatorial de um número e fatorial de 0-10
function fatorialNumero(){
    var number = parseInt(prompt("Digite um número"));

    if(isNaN(number)  || number < 0) {
        return "Digite um número válido"
    }
    var fatorial = 1

    for (var i = number; i > 1; i--){
        fatorial *= i;
    }
    return fatorial
}

function exibirFatorial(number) {
    var fatorial = 1;
  
    for (var i = number; i > 1; i--) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  for (var j = 1; j <= 10; j++) {
    console.log("Fatorial de " + j + ": " + exibirFatorial(j));
  }
  

console.log(fatorialNumero())



// Funçaõ para verificar se um número é um quadrado perfeito
function quadradoPerfeito(){
    var number = parseInt(prompt("Digite um número"));

    if(Number.isInteger(Math.sqrt(number))){
        return "É um quadrado perfeito"
    } else{
        return "Não é um quadrado perfeito"
    }
}

console.log(quadradoPerfeito())
