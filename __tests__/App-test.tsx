import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

//Instrução do Jest para a criação de cada teste na aplicação. Posso it ou test. Todos os dois fazem a mesma coisa.
//Passamos dois parâmetros: nome do teste('renders correctly') e uma função
it('renders correctly', () => {
  //Vou testar a renderização do app
  //olha o tanto de coisas que posso usar do render. Estou desestruturando
  /*
    Dentro do render, temos alguns recursos interessantes. Podemos pegar um debugger.
    O debugger vai fazer um print de toda a estrutura hierárquica dos componentes que são renderizados.
  */
  const {debug} = render(<App />);

  //debug();
});
