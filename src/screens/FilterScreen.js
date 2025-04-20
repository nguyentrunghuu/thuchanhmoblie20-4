import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = ['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'];
const brands = ['Individual Collection', 'Cocola', 'Ifad', 'Kazi Farmas'];

const FilterScreen = ({ navigation, route }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleCategorySelect = (item) =>
    setSelectedCategory(item === selectedCategory ? null : item);

  const handleBrandSelect = (item) =>
    setSelectedBrand(item === selectedBrand ? null : item);

  const applyFilter = () => {
    navigation.navigate('Explore', {
      filter: {
        category: selectedCategory,
        brand: selectedBrand,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Categories */}
        <Text style={styles.label}>Categories</Text>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.checkbox}
            onPress={() => handleCategorySelect(item)}
          >
            <Ionicons
              name={
                selectedCategory === item
                  ? 'checkbox-outline'
                  : 'square-outline'
              }
              size={20}
              color={selectedCategory === item ? '#28a745' : '#aaa'}
            />
            <Text
              style={[
                styles.checkboxText,
                selectedCategory === item && { color: '#28a745' },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Brand */}
        <Text style={styles.label}>Brand</Text>
        {brands.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.checkbox}
            onPress={() => handleBrandSelect(item)}
          >
            <Ionicons
              name={
                selectedBrand === item ? 'checkbox-outline' : 'square-outline'
              }
              size={20}
              color={selectedBrand === item ? '#28a745' : '#aaa'}
            />
            <Text
              style={[
                styles.checkboxText,
                selectedBrand === item && { color: '#28a745' },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Apply Filter */}
      <TouchableOpacity style={styles.applyButton} onPress={applyFilter}>
        <Text style={styles.applyText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#28a745',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
