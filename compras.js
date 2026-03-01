// --- Sistema de compras ---
// O objetivo deste código é simular um sistema de compras simples, onde o usuário pode aplicar um desconto em um produto e atualizar o estoque. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

//Alteracao de tipo de dado na variavel (preco) de string para float
const produto = {
  nome: "Teclado Gamer",
  preco: 150.00 ,
  estoque: 10,
};

function aplicarDesconto(valor) {
  return valor - 20;
}
//Alteracao na valor da funcao de (produto) para (produto.preco)
const precoFinal = aplicarDesconto(produto.preco);

//alteracao de tipo de dado de string "um" para int 1
produto.estoque = produto.estoque - 1;

console.log("Produto: " + produto.nome);
console.log("Preço com desconto: " + precoFinal);
console.log("Estoque atual: " + produto.estoque);

