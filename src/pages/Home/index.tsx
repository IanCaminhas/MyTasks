import React from 'react';
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {TaskList} from '../../components/TaskList';
import {useTaskList} from '../../context/TasksContext';
/*
interface Task {
  id: string;
  title: string;
}
*/

export const Home = () => {
  /*
    Anotações gerais
    <TouchableOpacity activeOpacity={0.7}>
    Nível de transparência é o activeOpacity. 0 é nada e 1 é 100%
    0.7 é o nível de transparência a cada toque.
    Se eu colocar 0, some e aparece de novo.
    1 não tem transparência

    Isso aqui era abaixo do botão
        {tasks.map(task => (
            //Para cada task, é necessário informar um id. Esse id é necessário quando uso um map
            //TouchableOpacity foi usado para gerar uma ação quando o usuário clicar
            <TouchableOpacity key={task.id} style={styles.buttonTask}>
              <Text style={styles.titleTask}>{task.title}</Text>
            </TouchableOpacity>
          ))}
    Exemplo: não consigo passar newTask para outro componente. newTask só pega dentro de home. Solução: Context API ou via propriedade(não muito legal)
    const [newTask, setNewtask] = React.useState('');

    Esse trecho era dessa página. Foi transformado num componente à parte
     <FlatList
          data={tasks} //isso aqui é estado. É a lista de tasks
          keyExtractor={item => item.id} //isso aqui é a key. No caso é o id de cada task
          renderItem={(
            {item}, //o próprio flatList controla o que vai ser renderizado. Ele só vai alocar espaço em memória daquilo que está visível no momento
          ) => (
            <TouchableOpacity key={item.id} style={styles.buttonTask}>
              <Text style={styles.titleTask}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />

  */

  //Recebe o valor do input. o valor inicial é uma string vazia('')
  //O valor digitado seja armazenado no newTask
  const [newTask, setNewtask] = React.useState('');
  //const {addTask} = React.useContext(TasksContext);
  const {addTask} = useTaskList(); //isso foi uma refatoração... foi passado por context/TasksContent

  /*Criar um estado para armazenar a lista de tarefas. A cada tarefa que o usuário for adcionando, listar elas abaixo do botão.
    Ele começa com um array vazio
    o useState recebe um tipo de informação. Uso generics para isso. Recebo um array de tasks
    const [tasks, setTasks] = React.useState<Task[]>([]); Isso aqui era passado via props. Nao e mais. Agora usamos context e useContext*/

  //const {tasks} = React.useContext(TasksContext);
  //console.log(tasks);

  //Ao clicar no botão adicionar,eu quero pegar o que foi digitado e incluo na lista. Ou seja, no estado tasks
  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()), //pegando o instante em segundos, garantindo unicidade
      title: newTask ? newTask : 'Task empty',
    };
    //Esse addTask foi importado lá do contexto... Api Context
    addTask(data);

    /*Vou pegar as tasks já existentes e incluir o obj data para esse array. O três ... é o spread operator e serve para isso
    setTasks([...tasks, data]); não preciso desse estado mais. Estou pegando tudo via context
    Isso era usado em conjunto com  const [tasks, setTasks] = React.useState<Task[]>([]);

    usava isso aqui em baixo também:
     <TaskList tasks={tasks} /> Não vou usar mais, pois agora estou pegando via context
    */
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev!</Text>
        <TextInput
          onChangeText={setNewtask} //metodo que setta um novo valor para o estado
          placeholderTextColor="#555" //cor do placeholder
          placeholder="Nova tarefa..." //texto do placeholder
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handleAddNewTask} //função chamada quando o botao é acionado. Como não preciso passar parametro, chamo o método sem os parênteses
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.titleTasks}>Minhas Tarefas</Text>

        <TaskList />
      </View>
    </SafeAreaView>
  );
};

//Aqui tem o conjunto de propriedades CSS que desejo atribuir no style
//create recebe objetos. Objetos contem uma lista de propriedades.
//container é o nome do objeto definido por mim. Dentro do objeto tenho as propriedades que vou usar para tag do meu código.
//As tags são <View></View>, <Text></Text> por exemplo.
//Fazendo styles.container, serão uitlizados o flex, o justifyContent e o alignItems para estilizar.

const styles = StyleSheet.create({
  //Preciso que a safeArea ocupe todo o espaço da tela e o container também.
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1, //ocupa 100% da tela.
    backgroundColor: '#121214', //cor de fundo
    paddingHorizontal: 30, //afastamento para a esquerda. Da borda para a esquerda
    paddingVertical: 50, //afastamento do topo para baixo
    //justifyContent: 'center', só mesmo para teste e visualização  Alinhamento no centro,mas fica grudado à esquerda
    //alignItems: 'center', só mesmo para teste e visualização fica no centro da tela.
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50, //afastamento do botão de cima
  },
  input: {
    backgroundColor: '#29292e', //cor de fundo do input
    color: '#f1f1f1', //cor do texto
    fontSize: 18, //tamanho do texto
    padding: Platform.OS === 'ios' ? 15 : 12, //tamanho da caixa de texto. Se for para ios tamanho 15, senão tamanho 10. De acordo com a plataforma, uso valores diferentes
    marginTop: 30, //distância entre o label e a caixa de texto(input)
    borderRadius: 7, //Curvatura da borda
  },
  button: {
    backgroundColor: '#eba417', //cor do botão
    padding: 15, //tamanho do botão
    borderRadius: 7, //curvatura da borda
    alignItems: 'center', //posição do texto no botão
    marginTop: 20, //distância entre a caixa de texto e o botão
  },
  buttonText: {
    color: '#121214', //cor do texto do botão
    fontSize: 18, //tamanho do botão do texto
    fontWeight: 'bold', //Negrito
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
