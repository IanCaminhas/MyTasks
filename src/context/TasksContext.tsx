import React from 'react';

interface IProps {
  children: React.ReactElement;
}

//O tipo de informação que vai ter o contexto
export interface ITasksContext {
  id: string;
  title: string;
}

/*
Colocamos {} como default value...O typescript não suporta. Como contormar isso ?
falando que {} é do tipo ITasksContext... Isso aqui é para forçar a barra
*/
export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TasksProvider: React.FunctionComponent<IProps> = ({
  children,
}: IProps) => {
  /*children são os componentes filhos recebidos via props... Assim, os outros componentes não
  tem acesso às implementações do Context.
  */
  return (
    <TasksContext.Provider value={{id: '1', title: 'Task01'}}>
      {children}
    </TasksContext.Provider>
  );
};
