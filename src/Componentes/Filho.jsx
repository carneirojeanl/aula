import React from 'react'

export default props =>
    <div>
          <button

              onClick={()=> props.notificarSaida('shopping')}>
              <h1>Vou sair</h1>

          </button>
    </div>


// Aula 24 - Comunicação entre Componentes
// Nesse exercicio é ensinado como ter uma interação entre dois componentes.
// No componente filho tem a criação de uma função com um botão que ao clicar notifica a saida para o shopping ou outro lugar. 
