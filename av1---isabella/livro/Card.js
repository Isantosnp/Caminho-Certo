import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export function Card({
  titulo,
  autor,
  anoPublicacao,
  preco,
  nome,
  cnpj,
  onDelete,
}) {
  return (
    <TouchableOpacity
      style={styles.viewCard}
      onPress={() => alert('LIVRO SELECIOADO ')}>
      <View style={styles.livroCard}>
        <Text style={styles.textoCard}>Titulo: {titulo}</Text>
        <Text style={styles.textoCard}>Autor: R$ {autor}</Text>
        <Text style={styles.textoCard}>Ano Publicacao: {anoPublicacao}</Text>
        <Text style={styles.textoCard}>Preco: R$ {preco}</Text>
        <Text style={styles.textoCard}>Editora: {nome}</Text>
        <Text style={styles.textoCard}> CNPJ:{cnpj}</Text>
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <AntDesign name="delete" size={24} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    elevation: 3,
  },
  textoCard: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'Roboto',
    marginBottom: 5,
  },
  livroCard: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 20,
    padding: 10,
  },
});
