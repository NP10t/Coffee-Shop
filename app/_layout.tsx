import {StatusBar, View, Text } from 'react-native'
import React from 'react'
import { OrderProvider } from '@/view-model/coffee-view-model'
import { Stack } from 'expo-router'

const RootLayout = () => {
  StatusBar.setBarStyle('dark-content');  // Đổi màu chữ trên thanh trạng thái
  StatusBar.setBackgroundColor('#FFFFFF'); // Đổi màu nền của thanh trạng thái
  return (
    <OrderProvider>
        <Stack>
            <Stack.Screen
                name="details"
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
  </OrderProvider>
  )
}

export default RootLayout