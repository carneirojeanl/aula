import React from 'react'

const aprovados = ['Paula','Roberto','Gustavo','Julia']

export default props => {
    const gerarItens = itens => {
      return itens.map(item=> <li>{item}</li>)


    }
    return (
      <ul>
          {gerarItens(aprovados)}
      </ul>
    )
}


    {/*Aula 23
    como gerar uma lista com intens usando o maps;
    1- primeiro fazer a lista de itens.
    2- depois fazer uma função normal.
    3- Em seguida fazer uma função dentro da outra para fazer com que cada item receba uma determinada ação.
    4- essa ação será a função MAP.
    5- Cada item irá receber uma ação em linha para fazer a lista.
    6- no final deve fazer um return e juntar a função criada com o seu array.
    7- depois disso ir no index e importar.
    8- ir na div do index e renderizar. */}
