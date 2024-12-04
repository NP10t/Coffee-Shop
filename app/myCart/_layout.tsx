import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen 
            name="index" 
            options={{ 
              headerShown: true,
              title: 'My Cart',
              headerTitleAlign: 'center',
            }} 
        />
        <Stack.Screen 
            name="orderSuccess" 
            options={{ 
              headerShown: true,
              title: 'Order Success',
              headerTitleAlign: 'center',
            }}
        />
    </Stack>
  )
}

export default _layout