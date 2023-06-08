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

export const Home = () => {
  /*
    <TouchableOpacity activeOpacity={0.7}>
    Nível de transparência é o activeOpacity. 0 é nada e 1 é 100%
    0.7 é o nível de transparência a cada toque.
    Se eu colocar 0, some e aparece de novo.
    1 não tem transparência
  */
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev!</Text>
        <TextInput
          placeholderTextColor="#555" //cor do placeholder
          placeholder="Nova tarefa..." //texto do placeholder
          style={styles.input}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas Tarefas</Text>
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
});
