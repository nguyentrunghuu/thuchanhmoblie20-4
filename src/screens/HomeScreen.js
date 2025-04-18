import React from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Sử dụng hình ảnh từ thư mục assets
const carrotLogo = require('../../assets/images/Group.png');
const bannerImage = require('../../assets/images/banner.png');
const organicBananas = require('../../assets/images/organic_bananas.png');
const redApple = require('../../assets/images/red_apple.png');
const bellPepper = require('../../assets/images/bell_pepper.png');
const ginger = require('../../assets/images/ginger.png');
const pulses = require('../../assets/images/pulses.png');
const rice = require('../../assets/images/rice.png');
const beefBone = require('../../assets/images/beef_bone.png');
const broilerChicken = require('../../assets/images/broiler_chicken.png');

const products = [
  { id: '1', name: 'Organic Bananas', price: 4.99, image: organicBananas },
  { id: '2', name: 'Red Apple', price: 4.99, image: redApple },
  { id: '3', name: 'Bell Pepper', price: 4.99, image: bellPepper },
  { id: '4', name: 'Ginger', price: 4.99, image: ginger },
  { id: '5', name: 'Pulses', price: 4.99, image: pulses },
  { id: '6', name: 'Rice', price: 4.99, image: rice },
  { id: '7', name: 'Beef Bone', price: 4.99, image: beefBone },
  { id: '8', name: 'Broiler Chicken', price: 4.99, image: broilerChicken },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header with Carrot Logo */}
        <View style={styles.header}>
          <Image source={carrotLogo} style={styles.logo} />
        </View>

        {/* Location */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={20} color="#000" />
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor="#999"
          />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Image source={bannerImage} style={styles.bannerImage} />
        </View>

        {/* Exclusive Offer */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={products.slice(0, 2)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetail')}
            >
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          style={styles.productList}
        />

        {/* Best Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={products.slice(2, 4)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetail')}
            >
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          style={styles.productList}
        />

        {/* Groceries */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={products.slice(4, 6)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.groceryCard}>
              <Image source={item.image} style={styles.groceryImage} />
              <Text style={styles.groceryName}>{item.name}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          style={styles.groceryList}
        />
        <FlatList
          horizontal
          data={products.slice(6, 8)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetail')}
            >
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          style={styles.productList}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingBottom: 80 }, // Đảm bảo nội dung không bị che bởi bottom navigation
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  searchIcon: { marginRight: 10 },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  banner: {
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginBottom: 20,
    position: 'relative',
  },
  bannerImage: { width: '100%', height: '100%', opacity: 0.8 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  seeAllText: { color: '#28a745', fontSize: 14 },
  productList: { marginBottom: 20 },
  productCard: {
    width: 180, // Tăng chiều rộng thẻ sản phẩm
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 15, // Tăng padding để thẻ lớn hơn
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    width: 120, // Tăng kích thước hình ảnh sản phẩm
    height: 120,
    borderRadius: 10,
  },
  productName: {
    fontWeight: 'bold',
    marginTop: 10, // Tăng khoảng cách
    fontSize: 16, // Tăng kích thước chữ
    textAlign: 'center',
  },
  productPrice: {
    color: '#000',
    marginTop: 5,
    fontSize: 16, // Tăng kích thước chữ
  },
  addButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: '#28a745',
    borderRadius: 5,
    padding: 8, // Tăng kích thước nút
  },
  groceryList: { marginBottom: 20 },
  groceryCard: {
    width: 180, // Tăng chiều rộng thẻ groceries
    marginHorizontal: 8,
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
    padding: 15, // Tăng padding
    alignItems: 'center',
  },
  groceryImage: {
    width: 120, // Tăng kích thước hình ảnh
    height: 120,
    borderRadius: 10,
  },
  groceryName: {
    fontWeight: 'bold',
    marginTop: 10, // Tăng khoảng cách
    fontSize: 16, // Tăng kích thước chữ
    textAlign: 'center',
  },
});

export default HomeScreen;