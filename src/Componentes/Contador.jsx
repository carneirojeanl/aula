import React, {Component} from 'react'

export default class contador extends Component {
    state = {
      numero: 10
    }

    maisUm = () => {
      this.setState({numero:this.state.numero +1})

    }
    menosUm = () => {
      this.setState({numero:this.state.numero -1})

    }

    render() {
        return (

              <div>
                  <div>Número:{this.state.numero}</div>
                  <button onClick={this.maisUm}>Inc</button>
                  <button onClick={this.menosUm}>Dec</button>

              </div>
        )
    }
}

// Aula 29 - Como fazer um contador
// obs: o state de numero pode ser definido no componente ou no index.
// caso seja definido no index deve ser colocado ao lado de numero: this.props.valor e no index
// colocar o valor na renderização.
