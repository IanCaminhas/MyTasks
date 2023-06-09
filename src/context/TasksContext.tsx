import React from 'react';

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
