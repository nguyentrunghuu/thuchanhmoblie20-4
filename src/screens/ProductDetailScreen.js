import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

// Sử dụng hình ảnh từ thư mục assets
const redApple = require('../../assets/images/red_apple.png');

const ProductDetailScreen = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.container}>
      {/* Hình ảnh sản phẩm */}
      <Image source={redApple} style={styles.productImage} />

      {/* Nội dung chi tiết sản phẩm */}
      <View style={styles.content}>
        {/* Tiêu đề và giá */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Natural Red Apple</Text>
            <Text style={styles.weight}>1kg, Price</Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Số lượng và giá */}
        <View style={styles.quantityPriceContainer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
              <Ionicons name="remove-circle-outline" size={30} color="#28a745" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Ionicons name="add-circle-outline" size={30} color="#28a745" />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>$4.99</Text>
        </View>

        {/* Product Detail */}
        <TouchableOpacity style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Product Detail</Text>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>
        <Text style={styles.description}>
          Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
        </Text>

        {/* Nutritions */}
        <TouchableOpacity style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nutritions</Text>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>

        {/* Review */}
        <TouchableOpacity style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Review</Text>
          <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
          <Ionicons name="chevron-forward" size={24} color="#999" />
        </TouchableOpacity>

        {/* Nút Add To Basket */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  productImage: {
    width: '100%',
    height: 300, // Tăng chiều cao hình ảnh để giống hình
    resizeMode: 'contain',
  },
  content: { padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weight: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  quantityPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    lineHeight: 20,
  },
  stars: {
    fontSize: 16,
    color: '#FFD700', // Màu vàng cho ngôi sao
  },
  addButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;