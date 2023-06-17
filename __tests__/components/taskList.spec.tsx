import {act, render, renderHook} from '@testing-library/react-native';
import {TasksProvider, useTaskList} from '../../src/context/TasksContext';
import {TaskList} from '../../src/components/TaskList';

describe('TaskList component', () => {
  //primeiro eu preciso adicionar a tarefa no contexto para depois remover.
  it('verifica se um item é removido da lista de tarefas', async () => {
    render(<TaskList />, {
      wrapper: TasksProvider,
    });

    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    });

    const data = {id: 'Task01', title: 'Task01'};
    //adionar a tarefa no contexto
    await act(() => result.current.addTask(data));

    //estou verificando a task da posição 0.
    //estou testando para ver se foi adicionado. A tarefa Task01 foi adicionada ?
    //Etou testando se o título da tarefa adicionada é 'Task01'
    expect(result.current.tasks[0].title).toEqual('Task01');

    //depois que eu inseri, agora vou precisar remover
    //Agora estou testando a remoção da inserida task no contexto
    await act(() => result.current.removeTask('Task01'));
    //Depois que removi, a lista está vazia ?
    expect(result.current.tasks.length).toEqual(0);
  });
});
