import React from 'react'
import Filho from './Filho'

export default props => {
      const notificarSaida =
      lugar => alert(`Liberado para ${lugar}`)

      return (
        <div>
          <Filho notificarSaida={notificarSaida} />

        </div>

      )

}

// Aula 24
// No componente pai deve ser feita a importação do componente filho para que aconteça a interação.
// é criada uma função que vai determinar um lugar.
// Esse lugar será notificado atraves de um alert que terá a msg de Liberado para o lugar que foi notificado pelo filho.
// para finalizar fazer um rturn  para juntar a função do pai com o do filho por meio de uma div.
