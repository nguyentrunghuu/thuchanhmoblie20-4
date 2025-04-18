import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Lấy chiều cao màn hình để tính toán kích thước
const { height } = Dimensions.get('window');

// Danh sách sản phẩm với hình ảnh từ thư mục assets
const beverages = [
  { id: '1', name: 'Diet Coke', volume: '355ml', price: 1.99, image: require('../../assets/images/diet_coke.png') },
  { id: '2', name: 'Sprite Can', volume: '325ml', price: 1.50, image: require('../../assets/images/sprite_can.png') },
  { id: '3', name: 'Apple & Grape Juice', volume: '2L', price: 15.99, image: require('../../assets/images/apple_grape_juice.png') },
  { id: '4', name: 'Orange Juice', volume: '2L', price: 15.99, image: require('../../assets/images/orange_juice.png') },
  { id: '5', name: 'Coca Cola Can', volume: '325ml', price: 4.99, image: require('../../assets/images/coca_cola_can.png') },
  { id: '6', name: 'Pepsi Can', volume: '330ml', price: 4.99, image: require('../../assets/images/pepsi_can.png') },
];

const BeveragesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header với nút quay lại và tiêu đề */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
      </View>

      {/* Danh sách sản phẩm dạng lưới */}
      <FlatList
        data={beverages}
        keyExtractor={(item) => item.id}
        numColumns={2} // Hiển thị 2 cột
        renderItem={({ item }) => (
          <View style={styles.beverageCard}>
            <Image source={item.image} style={styles.beverageImage} />
            <View style={styles.textContainer}>
              <Text style={styles.beverageName}>{item.name}</Text>
              <Text style={styles.beverageVolume}>{item.volume}</Text>
            </View>
            <View style={styles.priceAndButtonContainer}>
              <Text style={styles.beveragePrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.flatListContent}
        scrollEnabled={false} // Tắt cuộn để 6 items vừa khít màn hình
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  flatListContent: {
    flexGrow: 1, // Đảm bảo FlatList chiếm toàn bộ không gian còn lại
    justifyContent: 'space-between', // Phân bố đều các hàng
  },
  beverageCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    height: (height - 100) / 3, // Chia đều chiều cao màn hình cho 3 hàng (6 items trong 2 cột)
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  beverageImage: {
    width: 80,
    height: 140, // Tăng chiều cao để kéo dài ảnh hơn nữa
    borderRadius: 5,
    marginBottom: 8,
    alignSelf: 'center',
  },
  textContainer: {
    alignItems: 'flex-start', // Căn trái cho name và volume
    marginBottom: 4,
  },
  beverageName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  beverageVolume: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  priceAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 4,
  },
  beveragePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
  },
  addButton: {
    backgroundColor: '#28a745',
    borderRadius: 5,
    padding: 5,
  },
});

export default BeveragesScreen;