import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { COFFEE_DATA, CoffeeType } from '@/constants/CoffeeData';

const DetailsScreen = () => {
  const { coffeeID } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);
  const [shot, setShot] = useState<'Single' | 'Double'>('Single');
  const [size, setSize] = useState<'Small' | 'Medium' | 'Large'>('Small');
  const [ice, setIce] = useState(false);
  const [coffee, setCoffee] = useState<CoffeeType>();

  useEffect(() => {
    setCoffee(COFFEE_DATA[Number(coffeeID) - 1]);
  }, [coffeeID]);

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate total price
  const totalPrice = coffee
    ? coffee.price * quantity + (shot === 'Double' ? 1 : 0)
    : 0;

  return (
    <View style={styles.container}>
      {/* Back and Cart Buttons */}
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => router.back()}
        >
          <AntDesign name="leftcircleo" size={50} color="black" />
        </TouchableOpacity>

        <Text style={styles.name}>Details</Text>

        <TouchableOpacity
          style={styles.topButton}
          onPress={() => router.push('/myCart')}
        >
          <AntDesign name="shoppingcart" size={50} color="black" />
        </TouchableOpacity>
      </View>

      {/* Coffee Image */}
      <Image source={coffee?.image} style={styles.image} />

      {/* Coffee Name */}
      <Text style={styles.name}>{coffee?.name}</Text>

      {/* Quantity Selector */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange('decrement')}
        >
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityValue}>{quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange('increment')}
        >
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Shot Selection */}
      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Shot</Text>
        <TouchableOpacity
          style={[styles.optionButton, shot === 'Single' && styles.selectedOption]}
          onPress={() => setShot('Single')}
        >
          <Text style={styles.optionText}>Single</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, shot === 'Double' && styles.selectedOption]}
          onPress={() => setShot('Double')}
        >
          <Text style={styles.optionText}>Double</Text>
        </TouchableOpacity>
      </View>

      {/* Size Selection */}
      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Size</Text>
        {['Small', 'Medium', 'Large'].map((s) => (
          <TouchableOpacity
            key={s}
            style={[styles.optionButton, size === s && styles.selectedOption]}
            onPress={() => setSize(s as 'Small' | 'Medium' | 'Large')}
          >
            <Text style={styles.optionText}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Ice Selection */}
      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Ice</Text>
        <TouchableOpacity
          style={[styles.optionButton, !ice && styles.selectedOption]}
          onPress={() => setIce(false)}
        >
          <Text style={styles.optionText}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, ice && styles.selectedOption]}
          onPress={() => setIce(true)}
        >
          <Text style={styles.optionText}>Yes</Text>
        </TouchableOpacity>
      </View>

      {/* Total Amount */}
      <Text style={styles.totalAmount}>Total Amount: ${totalPrice.toFixed(2)}</Text>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton}
      onPress={()=> router.push('/myCart')}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  topButton: {
    padding: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 18,
  },
  quantityValue: {
    fontSize: 18,
    marginHorizontal: 16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  optionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  optionButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  selectedOption: {
    backgroundColor: '#000',
    color: '#fff',
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  addToCartButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
  
export default DetailsScreen;
