# MisteriX — Loja Virtual

Projeto de avaliação da disciplina de Web II. Uma loja virtual estática desenvolvida com HTML5, CSS3 e JavaScript puro.

---

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura das páginas
- **CSS3** — estilização com variáveis CSS e Flexbox
- **JavaScript (Vanilla)** — lógica do carrinho e filtros
- **localStorage** — persistência do carrinho no navegador
- **Google Fonts** — fonte Spartan
- **Font Awesome 5.10.0** — ícones

---

## 📂 Estrutura de arquivos

```
LojaVirtual/
├── index.html               # Página inicial (hero + categorias)
├── jaquetas.html            # Listagem de jaquetas
├── calças.html              # Listagem de calças
├── botas.html               # Página de botas (sem estoque)
├── carrinho.html            # Carrinho de compras
├── script.js                # Lógica do carrinho e filtros
├── css/
│   └── styles.css           # Estilos globais com variáveis CSS
├── img/
│   ├── features/            # Imagens dos cards de categoria
│   └── products/            # Imagens dos produtos
│       └── ProdutosJaquetas/
├── produtosjaquetas/        # Páginas de detalhe (8 jaquetas)
│   ├── produto-jaqueta1.html
│   └── ...
└── produtoscalças/          # Páginas de detalhe (8 calças)
    ├── produto-calça1.html
    └── ...
```

---

## 🗺️ Fluxo de navegação

```
index.html  →  jaquetas.html  →  produto-jaquetaN.html  →  carrinho.html
            →  calças.html    →  produto-calçaN.html    →  carrinho.html
            →  botas.html     (sem estoque)
```

---

## 🛒 Funcionalidades

- **Carrinho persistente** — produtos adicionados ficam salvos no `localStorage` mesmo ao fechar o navegador
- **Badge de quantidade** — contador atualizado em tempo real na navbar
- **Seletor de quantidade** — botões +/− na página de detalhe do produto
- **Remoção unitária** — botão "Remover" desconta uma unidade por vez do carrinho
- **Subtotal por item** — calculado automaticamente (preço × quantidade)
- **Filtro por preço** — ordena os produtos por menor ou maior preço
- **Estado vazio do carrinho** — mensagem amigável com botão para voltar à loja
- **Navbar consistente** — mesma barra de navegação em todas as 21 páginas

---

## ⚙️ Funções JavaScript (`script.js`)

| Função | Descrição |
|---|---|
| `atualizarContador()` | Atualiza o badge de quantidade na navbar |
| `adicionarAoCarrinho(nome, preco, imagem, qtd)` | Adiciona ou incrementa item no carrinho |
| `alterarQtd(delta)` | Incrementa/decrementa o input de quantidade nas páginas de detalhe |
| `ordenarPorPreco(ordem, btn)` | Ordena os cards por preço (`'asc'` ou `'desc'`) |

---

## 🎨 Paleta de cores (variáveis CSS)

| Variável | Valor | Uso |
|---|---|---|
| `--cor-fundo` | `#1a1a1a` | Fundo global das páginas |
| `--cor-texto` | `#ffffff` | Texto principal |
| `--cor-cinza` | `#6e6e6e` | Navbar e cards de categoria |
| `--cor-hover` | `#444444` | Hover de botões |
| `--cor-destaque` | `#e63946` | Badge do carrinho |
| `--cor-detalhe-fundo` | `#ffffff` | Fundo das páginas de detalhe e carrinho |
| `--cor-detalhe-texto` | `#1a1a1a` | Texto nas páginas de fundo claro |