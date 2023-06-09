import React from 'react';
import {Home} from './src/pages/Home';
import {TasksContent} from './src/context/tasksContent';

const App = () => {
  /*
      Colocamos o provider juntamente com o componente APP, pois APP é o primeiro a ser renderizado. APP é o primeiro a ser renderizado, sendo que tudo começa a partir de dele.
      Configuramos o provider do nosso contexto no componente APP. No provider precisamos passar a propriedade value.
      Na propriedade value é que vamos colocar a informação que queremos disponibilizar globalmente.
      Aí o componente <Home/> vai ter acesso
  */
  return (
    <TasksContent.Provider value={{id: '1', title: 'Task01'}}>
      <Home />
    </TasksContent.Provider>
  );
};

export default App;
