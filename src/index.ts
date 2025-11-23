import {ContaBancaria} from "./ContaBancaria.js";

const conta1 = new ContaBancaria("1234", "Babi")
const conta2 = new ContaBancaria("5268", "Cams")

console.log(`=====Início das operações===== \nSaldo inicial \nConta ${conta1.numeroConta} (${conta1.titular}): R$ ${conta1.saldo} \nConta ${conta2.numeroConta} (${conta2.titular}): R$ ${conta2.saldo}`)

try{
  conta1.depositar(1000)
  conta2.depositar(500)  
  console.log(`\nDepósito realizado! \nSaldo atualizado! \nConta ${conta1.numeroConta} (${conta1.titular}): R$ ${conta1.saldo} \nConta ${conta2.numeroConta} (${conta2.titular}): R$ ${conta2.saldo}`)
} catch(erro) {
  if(erro instanceof Error){
console.error("Ocorreu um erro!", erro.message)
} else{
  console.error("Erro desconhecido!")
}
}

try{
  conta1.sacar(900)
  conta2.sacar(600)
  console.log(`\nSaque realizado! \nSaldo atualizado! \nConta ${conta1.numeroConta} (${conta1.titular}): R$ ${conta1.saldo} \nConta ${conta2.numeroConta} (${conta2.titular}): R$ ${conta2.saldo}`)

} catch(erro) {
  if(erro instanceof Error){
console.error("Ocorreu um erro!", erro.message)
} else{console.error("Erro desconhecido!")
}
}

try{
  conta1.transferir(50, conta2)
  conta2.transferir(125, conta1)
  console.log(`\nTransferência finalizada! \nSaldo atualizado! \nConta ${conta1.numeroConta} (${conta1.titular}): R$ ${conta1.saldo} \nConta ${conta2.numeroConta} (${conta2.titular}): R$ ${conta2.saldo}`)
} catch(erro){
  if(erro instanceof Error){
console.error("Ocorreu um erro!", erro.message)
}else{
 console.error("Erro desconhecido!")
}
}