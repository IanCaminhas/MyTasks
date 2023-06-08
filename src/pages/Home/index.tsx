import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev!</Text>
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
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30, //afastamento para a esquerda. Da borda para a esquerda
    paddingVertical: 50, //afastamento do topo para baixo
    //justifyContent: 'center', só mesmo para teste e visualização
    //alignItems: 'center', só mesmo para teste e visualização
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
