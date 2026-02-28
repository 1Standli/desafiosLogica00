// --- Sistema de compras ---
// O objetivo deste código é simular um sistema de compras simples, onde o usuário pode aplicar um desconto em um produto e atualizar o estoque. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

const produto = {
  nome: "Teclado Gamer",
  preco: "150,00",
  estoque: 10,
};

function aplicarDesconto(valor) {
  return valor - 20;
}

const precoFinal = aplicarDesconto(preco);

produto.estoque = produto.estoque - "um";

console.log("Produto: " + produto.nome);
console.log("Preço com desconto: " + precoFinal);
console.log("Estoque atual: " + produto.estoque);
