import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COFFEE_DATA } from '@/constants/CoffeeData';
import { router } from 'expo-router';

const MyCart = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemSize}>{item.size}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );

  const total = COFFEE_DATA.reduce((acc, item) => acc + item.price, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={COFFEE_DATA}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total Price:</Text>
        <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}
      onPress={()=>{router.push('/myCart/orderSuccess')}}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  listContainer: {
    paddingVertical: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemSize: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyCart;
