import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const OnGoing = () => {
  const orderItems = [
    {
      name: 'Americano',
      price: 3.00,
      location: '3 Addersion Court Chino Hills, HO56824, United State'
    },
    {
      name: 'Cafe Latte',
      price: 3.00,
      location: '3 Addersion Court Chino Hills, HO56824, United State'
    },
    {
      name: 'Flat White',
      price: 3.00,
      location: '3 Addersion Court Chino Hills, HO56824, United State'
    }
  ];

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <View style={styles.orderInfo}>
        <Text style={styles.orderName}>{item.name}</Text>
        <Text style={styles.orderPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.orderLocation}>{item.location}</Text>
    </View>
  );

  const total = orderItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <View style={styles.container}>
      <View style={styles.orderSection}>
        <FlatList
          data={orderItems}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
          contentContainerStyle={styles.orderList}
        />
      </View>
      <View style={styles.orderSection}>
        <Text style={styles.sectionTitle}>History</Text>
        <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
      </View>
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
  orderSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderList: {
    paddingVertical: 8,
  },
  orderItem: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderLocation: {
    fontSize: 14,
    color: '#666',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnGoing;