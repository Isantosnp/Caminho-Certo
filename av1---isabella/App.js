import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Card } from './livro/Card';
import { Button } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { getAll, deleteById } from './livro/LivroApi';

export default function App() {
  const [livros, setLivros] = useState([]);

  const atualizar = async () => {
    const livro = await getAll();
    setLivros(livro);
    console.log(livro);
  };

  useEffect(() => {
    atualizar(); 
  }, []);

  const excluir = async (id) => {
    try {
      await deleteById(id);
      await atualizar(); 
      alert('Livro excluído com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao excluir livro.');
    }
  };

  return (
    <ScrollView style={styles.viewMain}>
      <Text style={styles.title}>Lista de livros</Text>
      <View style={styles.container}>
        <Text style={styles.text2Style}>Seja bem vinda a sua biblioteca</Text>
        <FlatList
          data={livros}
          renderItem={({ item }) => (
            <Card {...item} onDelete={() => excluir(item.id)} />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
        />
      </View>
      <Button mode="contained-tonal" onPress={atualizar} style={styles.button}>
        CONSULTAR
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewMain: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
    backgroundColor: '#FF0084',
    flex: 1,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  listContent: {
    paddingBottom: 10,
  },
  button: {
    color: 'ffcbdb',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
});
