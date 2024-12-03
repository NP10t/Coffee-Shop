import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import Icon from "react-native-vector-icons/Ionicons";

const DetailsLayout = () => {
  return (
    <Stack>
        <Stack.Screen 
            name="[coffeeID]" 
            options={{ 
              headerShown: true,
              headerTitle: 'Details',
              headerTitleAlign: 'center',
              headerRight: () => (
                <Pressable onPress={() => router.push('/myCart')}>
                <Icon name="cart-outline" size={24} color="#000" />
                </Pressable>
              ),
            }} 
        />
    </Stack>
  )
}

export default DetailsLayout