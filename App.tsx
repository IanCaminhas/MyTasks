import React from 'react';
import {Home} from './src/pages/Home';
import {TasksProvider} from './src/context/TasksContext';

const App = () => {
  /*
      Colocamos o provider juntamente com o componente APP, pois APP é o primeiro a ser renderizado. APP é o primeiro a ser renderizado, sendo que tudo começa a partir de dele.
      Configuramos o provider do nosso contexto no componente APP. No provider precisamos passar a propriedade value.
      Na propriedade value é que vamos colocar a informação que queremos disponibilizar globalmente.
      Aí o componente <Home/> vai ter acesso.

      Esse TasksContext.Provider fica engessado. O que foi feito:
      Peguei o TasksContext.Provider value={{id: '1', title: 'Task01'} e coloquei dentro de TasksContext

      <TasksContext.Provider value={{id: '1', title: 'Task01'}}>
        <Home />
      </TasksContext.Provider>

      Como ficou:
          <TasksProvider>
             <Home />
          </TasksProvider>
          Agora APP não tem contato com o ContextProvider. Isolei o TasksProvider
  );

  */
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
};

export default App;
