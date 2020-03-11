import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Contador from './Componentes/Contador'
// import ComponenteClasse from './Componentes/ComponenteClasse'
// import ComponenteComFuncao from './Componentes/ComponenteComFuncao'
// import Pai from './Componentes/Pai'
// import Filho from './Componentes/Filho'
// import Familia from './Componentes/Familia'
// import Membro from './Componentes/Membro'
// import FamiliaSilva from './Componentes/FamiliaSilva'
{/*// import PrimeiroComponente from  './Componentes/PrimeiroComponente'
// import MultiElementos from './Componentes/MultiElementos'*/}
{/*import {CompA,CompB} from './Componentes/DoisComponentes'*/}


const elemento = document.getElementById('root');
ReactDOM.render(
   <div>
          <Contador/>
          {/*<ComponenteClasse />*/}
          {/*<Pai />*/}
          {/*<Filho />*/}
          {/*<ComponenteComFuncao />*/}
          {/*// <Familia sobrenome="Dias">*/}
          {/*//     <Membro nome= "Ana"/>*/}
          {/*<Membro nome= "Mariana"/>*/}
          {/*// </Familia>*/}


          {/*<FamiliaSilva />*/}
          {/*<MultiElementos />*/}
           {/*<CompA valor="olá, eu sou A"/>
            <CompB valor="B na área"/>*/}
         {/*<PrimeiroComponente valor="Bom dia!" />*/}
    </div>

  , elemento)

// const jsx = <h1>Olá React! </h1>
// ReactDOM.render(jsx, elemento)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
