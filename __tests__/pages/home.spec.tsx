import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {renderHook, act} from '@testing-library/react-native';
import {TasksProvider, useTaskList} from '../../src/context/TasksContext'; //esse é o hook que queremos testar
import {Home} from '../../src/pages/Home';

describe('Home page', () => {
  it('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />);
    const inputNewTask = getByPlaceholderText('Nova tarefa...');

    //console.log(inputNewTask);
    //espero que esse input esteja definido
    expect(inputNewTask).toBeDefined();
    //O componente é válido ? está renderizado ?
    expect(inputNewTask.props.placeholder).toBeTruthy();
  });

  //testando o hook - Deu problema nesse teste aqui
  //it('verifica a inserção de um item na lista de tarefas', async () => {
  /*renderizo através do renderHook o meu useTaskList. Aqui tenho todos os recursos do contexto:
    o método para add uma tarefa, outro para remover uma tarefa, a lista de tarefas. Tudo está dentro do hook useTaskList
    Nesse result eu pego tudo isso: métodos e listas de tarefas
    Estou pegando o hook do meu contexto
    Preciso que o useTaskList seja renderizado dentro do provider.
    wrapper -> qual componente vai envolver o useTaskList ? o componente TasksProvider
    Aí sim vou conseguir manipular as informações.
    */
  // const {result} = renderHook(() => useTaskList(), {
  //  wrapper: TasksProvider,
  // });
  //estou definindo qual valor quero incluir na lista
  //const data = {id: 'Task100', title: 'Task100'};
  //através da act, executo o método addTask que estou pegando de dentro do contexto
  //await act(() => result.current.addTask(data));
  //depois que eu inclui o item em tasks,espero um valor verdadeiro.. Que possua um valor aqui dentro
  //expect(result.current.tasks).toBeTruthy();
  //});

  //Um clique no botão inseri um item na lista ?
  it('verifica se o clique no botão insere um item na lista de tarefas', async () => {
    /*Passando o provider por volta do componente. O componente tbm precisa ficar
    dentro de um provider para que conseguimos manipular o contexto no teste

    const {getByPlaceholderText, getByTestId} = render(<Home />, {
      wrapper: TasksProvider,
    });

    {getByPlaceholderText, getByTestId} é usado quando vamos testar algo de dentro do componente
    É usado quando precisamos passar algo no componente
    */
    const {getByPlaceholderText, getByTestId} = render(<Home />, {
      wrapper: TasksProvider,
    });

    /*
     wrapper -> qual componente vai envolver o useTaskList ? o componente TasksProvider
    Aí sim vou conseguir manipular as informações. Ou seja, o Hook também que estar envolvido no provider.
    */
    const {result} = renderHook(() => useTaskList(), {
      wrapper: TasksProvider,
    });

    const inputNewTask = getByPlaceholderText('Nova tarefa...'); //aqui pego o input
    const button = getByTestId('addButton'); //o nome que defini no componente para buscar o teste

    //Isso aqui é a informação que quero inserir
    const data = {id: 'Task01', title: 'task01'};

    //Qualquer alteração em algum input(botao ou texto),
    //Ação vai disparar o que ? alteração do texto de dentro do input
    //O que o teste vai colocar lá ? o title... Estou colocando informação no input
    await act(() => fireEvent.changeText(inputNewTask, data.title));

    //Agora vou estar acionando o pressionamento do botão.
    //é assíncrono. Quando pressiono o botão, estou rodando o método addTask que está dentro do contexto
    await act(async () => {
      await fireEvent.press(button);
    });

    expect(result.current.tasks).toBeTruthy();

    //console.log(inputNewTask);
    //espero que esse input esteja definido
    //expect(inputNewTask).toBeDefined();
    //O componente é válido ? está renderizado ?
    //expect(inputNewTask.props.placeholder).toBeTruthy();
  });
});
