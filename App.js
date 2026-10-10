import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// Na razie produkty wpisane ręcznie — potem będą z bazy danych
const produkty = [
  { id: '1', nazwa: 'Mleko', kategoria: 'Nabiał', ilosc: '2 l' },
  { id: '2', nazwa: 'Chleb', kategoria: 'Pieczywo', ilosc: '1 szt' },
  { id: '3', nazwa: 'Jajka', kategoria: 'Nabiał', ilosc: '10 szt' },
  { id: '4', nazwa: 'Masło', kategoria: 'Nabiał', ilosc: '200 g' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.naglowek}>🏠 Magazyn domowy</Text>
      <FlatList
        data={produkty}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.produkt}>
            <Text style={styles.nazwa}>{item.nazwa}</Text>
            <Text style={styles.szczegoly}>{item.kategoria} · {item.ilosc}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  naglowek: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  produkt: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  nazwa: {
    fontSize: 18,
    fontWeight: '600',
  },
  szczegoly: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});