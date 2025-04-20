import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PRODUCTS = [
  {
    id: '1',
    name: 'Mayonnals Eggless',
    volume: '325ml',
    price: 4.99,
    image: require('../../assets/images/mayo.png'),
  },
  {
    id: '2',
    name: 'Egg Noodles',
    volume: '330ml',
    price: 4.99,
    image: require('../../assets/images/eggnoodles2.png'),
  },
  {
    id: '3',
    name: 'Egg Noodles',
    volume: '2L',
    price: 15.99,
    image: require('../../assets/images/eggnoodles1.png'),
  },
  {
    id: '4',
    name: 'Egg Pasta',
    volume: '30gm',
    price: 15.99,
    image: require('../../assets/images/eggpasta.png'),
  },
  {
    id: '5',
    name: 'Egg Chicken Red',
    volume: '4pcs',
    price: 1.99,
    image: require('../../assets/images/eggred.png'),
  },
  {
    id: '6',
    name: 'Egg Chicken White',
    volume: '180g',
    price: 1.5,
    image: require('../../assets/images/eggwhite.png'),
  },
];

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const results = PRODUCTS.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(results);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.volume}>{item.volume}, Price</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Search + Filter Row */}
        <View style={styles.searchRow}>
          <TextInput
            placeholder="Search"
            value={searchTerm}
            onChangeText={handleSearch}
            style={styles.searchInput}
            placeholderTextColor="#888"
          />
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => navigation.navigate('Filter')}
          >
            <Ionicons name="options-outline" size={24} color="#28a745" />
          </TouchableOpacity>
        </View>

        {/* List */}
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: '#000',
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    width: '48%',
    borderWidth: 1,
    borderColor: '#eee',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  volume: {
    fontSize: 12,
    color: '#888',
  },
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#28a745',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 18,
    color: '#fff',
  },
});
