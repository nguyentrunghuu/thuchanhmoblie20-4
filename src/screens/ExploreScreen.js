import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Danh sách danh mục với hình ảnh từ thư mục assets
const categories = [
  { id: '1', title: 'Fresh Fruits & Vegetable', image: require('../../assets/images/fresh_fruits_vegetable.png'), backgroundColor: '#FFF5F0' },
  { id: '2', title: 'Cooking Oil & Ghee', image: require('../../assets/images/cooking_oil_ghee.png'), backgroundColor: '#E6F0FA' },
  { id: '3', title: 'Meat & Fish', image: require('../../assets/images/meat_fish.png'), backgroundColor: '#FFF0F5' },
  { id: '4', title: 'Bakery & Snacks', image: require('../../assets/images/bakery_snacks.png'), backgroundColor: '#F0FFF5' },
  { id: '5', title: 'Dairy & Eggs', image: require('../../assets/images/dairy_eggs.png'), backgroundColor: '#FFF5E6' },
  { id: '6', title: 'Beverages', image: require('../../assets/images/beverages.png'), backgroundColor: '#E6FAF0' },
];

const ExploreScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.headerTitle}>Find Products</Text>

      {/* Thanh tìm kiếm với biểu tượng kính lúp */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#999"
        />
      </View>

      {/* Danh sách danh mục dạng lưới */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: item.backgroundColor }]}
            onPress={() => {
              if (item.title === 'Beverages') {
                navigation.navigate('Beverages'); // Điều hướng sang Beverages nếu chọn danh mục này
              }
            }}
          >
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 30, // Kéo header xuống 10px bằng cách tăng paddingTop (trước đó là 10, nay là 20)
  },
  headerTitle: {
    fontSize: 20,
    justifyContent:'center',
    textAlign:'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 16,
  },
  searchIcon: {
    marginLeft: 10,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  flatListContent: {
    paddingBottom: 16,
  },
  categoryCard: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

export default ExploreScreen;