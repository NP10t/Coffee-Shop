import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import images from '@/constants/images';
import { COFFEE_DATA } from '@/constants/CoffeeData';
import { router } from 'expo-router';
import styles from '@/constants/Styles';

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.name}>Anderson</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => {router.push('/myCart')}}>
            <Image
              source={images.cart_icon} // Replace with your cart icon path
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <TouchableOpacity onPress={() => {router.push('/profile')}}>
              <Image
                source={images.profile_icon} // Replace with your profile icon path
                style={styles.icon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      {/* Loyalty Card Section */}
      <View style={styles.loyaltyCard}>
        <Text style={styles.loyaltyText}>Loyalty card</Text>
        <Text style={styles.loyaltyProgress}>4 / 8</Text>
        <View style={styles.cupsContainer}>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <Image
                key={index}
                source={
                  index < 4
                    ? images.filled_cup // Replace with filled cup icon path
                    : images.empty_cup // Replace with empty cup icon path
                }
                style={styles.cupIcon}
              />
            ))}
        </View>
      </View>

      {/* Coffee Selection Section */}
      <Text style={styles.chooseCoffee}>Choose your coffee</Text>
      <View style={styles.coffeeOptions}>
        {COFFEE_DATA.map((coffee, index) => (
          <TouchableOpacity key={index} 
          style={styles.coffeeCard}
          onPress={() => {router.push(`/details/${coffee.id}`)}}
          // onPress={() => {console.log(coffee.id)}}
          >
            <Image source={coffee.image} style={styles.coffeeImage} />
            <Text style={styles.coffeeName}>{coffee.name}</Text>

          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomePage;
