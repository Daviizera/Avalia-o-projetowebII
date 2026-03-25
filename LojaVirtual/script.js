/*script.js — Lógica do carrinho de compras e filtro de preços da MisteriX */

/* Atualiza o badge de contador no ícone do carrinho.
   Lê o carrinho do localStorage e soma as quantidades. */
function atualizarContador() {
  var carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  var total = carrinho.reduce(function(soma, item) { return soma + item.quantidade; }, 0);
  var badge = document.getElementById('contador-carrinho');
  if (badge) {
    badge.textContent = total > 0 ? total : '';
    badge.style.display = total > 0 ? 'inline-block' : 'none';
  }
}

/* Adiciona um produto ao carrinho.
   Se o produto já existir, incrementa a quantidade.
   Salva no localStorage e exibe um alerta de confirmação.
   'imagem' deve ser o caminho relativo à raiz (ex: img/products/...).
   'qtd' é a quantidade desejada (padrão: 1). */
function adicionarAoCarrinho(nome, preco, imagem, qtd) {
  qtd = Math.max(1, parseInt(qtd) || 1);
  var carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  var item = carrinho.find(function(i) { return i.nome === nome; });
  if (item) {
    item.quantidade += qtd;
  } else {
    carrinho.push({ nome: nome, preco: preco, quantidade: qtd, imagem: imagem || '' });
  }
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarContador();
  alert(nome + ' adicionado ao carrinho!');
}

/* Incrementa ou decrementa o input de quantidade na página de detalhe.
   Não permite valor menor que 1. */
function alterarQtd(delta) {
  var input = document.getElementById('qtd-produto');
  if (!input) return;
  input.value = Math.max(1, parseInt(input.value) + delta);
}

/* Ordena os cards de produto por preço dentro de #products-container.
   'ordem' aceita 'asc' (menor → maior) ou 'desc' (maior → menor).
   Marca o botão clicado como ativo. */
function ordenarPorPreco(ordem, btn) {
  var container = document.getElementById('products-container');
  if (!container) return;
  var cards = Array.from(container.querySelectorAll('.product-link'));
  cards.sort(function(a, b) {
    var pa = parseFloat(a.querySelector('p').textContent.replace(/[R$\s.]/g, '').replace(',', '.'));
    var pb = parseFloat(b.querySelector('p').textContent.replace(/[R$\s.]/g, '').replace(',', '.'));
    return ordem === 'asc' ? pa - pb : pb - pa;
  });
  cards.forEach(function(card) { container.appendChild(card); });
  document.querySelectorAll('.filtro-preco button').forEach(function(b) { b.classList.remove('ativo'); });
  btn.classList.add('ativo');
}

/* Inicializa o contador do carrinho assim que a página termina de carregar. */
document.addEventListener('DOMContentLoaded', atualizarContador);
