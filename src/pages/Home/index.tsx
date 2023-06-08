import React from 'react';
import {
  Platform,
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev!</Text>
        <TextInput style={styles.input} />
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
  input: {
    backgroundColor: '#29292e', //cor de fundo do input
    color: '#f1f1f1', //cor do texto
    fontSize: 18, //tamanho do texto
    padding: Platform.OS === 'ios' ? 15 : 12, //tamanho da caixa de texto. Se for para ios tamanho 15, senão tamanho 10. De acordo com a plataforma, uso valores diferentes
    marginTop: 30, //distância entre o label e a caixa de texto(input)
    borderRadius: 7, //Curvatura da borda
  },
});
