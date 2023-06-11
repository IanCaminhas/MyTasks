import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

interface IProps {
  children: React.ReactElement;
}

export interface ITask {
  id: string;
  title: string;
}

//O tipo de informação que vai ter o contexto
export interface ITasksContext {
  tasks: ITask[];
  addTask(task: ITask): void; //método para adicionar tarefa ao contexto.
}

//'@MyTasks:Tasks' é a chave. @MyTasks - nome da aplicação.... :Tasks -> a chave que vai estar sendo armazenada
const tasksData = '@MyTasks:Tasks';

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
  const [data, setData] = React.useState<ITask[]>([]);
  //quando o componente for carregado, buscar as informações lá no estado. Posso pensar assim para buscar do banco de dados, quando existir
  React.useEffect(() => {
    async function loadtasks() {
      const taskList = await AsyncStorage.getItem(tasksData);

      if (taskList) {
        setData(JSON.parse(taskList));
      }
    }

    loadtasks();
  }, []);

  const addTask = async (task: ITask) => {
    // console.log('addTask action.');
    try {
      //...data significa para pegar os mesmes elementos e acrescentar task(nova task)
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  //const tasks = [{id: '1', title: 'Task01'}];

  /*children são os componentes filhos recebidos via props... Assim, os outros componentes não
  tem acesso às implementações do Context.
  */
  return (
    <TasksContext.Provider value={{tasks: data, addTask}}>
      {children}
    </TasksContext.Provider>
  );
};

export function useTaskList(): ITasksContext {
  const context = React.useContext(TasksContext);

  //Esse useTaskList(Hook) só pode ser chamado num componente que estiver dentro de um provider
  if (!context) {
    throw new Error('useTaskList deve ser usado em um tasksProvider');
  }

  return context;
}
