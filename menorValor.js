const livros = require('./listaLivros')

function menorValor(arrProdutos,posicaoImicial ){

let maisBarato = posicaoImicial;

    for (let atual = posicaoImicial;atual < arrProdutos.length; atual++){
        if (arrProdutos[atua].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual;
    }
  };
  return maisBarato;
}

module.exports = menorValor;