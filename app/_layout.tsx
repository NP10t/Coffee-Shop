import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
          name="details/[coffeeID]"
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="redeem"
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="myCart"
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="profile"
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
      />
  </Stack>
  )
}

export default RootLayout