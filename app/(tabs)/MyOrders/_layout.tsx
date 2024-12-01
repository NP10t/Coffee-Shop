import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import Colors from '@/constants/Colors';


const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          backgroundColor: 'white', // Màu nền của tab bar
          position: 'absolute', // Có thể di chuyển tab bar
          top: 0, // Đặt ở trên cùng
          left: 0,
          right: 0,
          elevation: 0, // Loại bỏ shadow trên Android
          shadowOpacity: 0, // Loại bỏ shadow trên iOS
        },
        tabBarLabelStyle: {
          fontSize: 14, // Điều chỉnh kích thước chữ
        }
      }}
    >
      <Tabs.Screen
            name="index"
            options={{
              tabBarLabel: "On Going",
              tabBarIcon: ({ color }) => (
                  <Feather
                      name="home"
                      size={24}
                      color={color}
                  />
              ),
          }}
        />
        <Tabs.Screen
            name="history"
            options={{
              tabBarLabel: "History",
              tabBarIcon: ({ color }) => (
                  <Feather
                      name="home"
                      size={24}
                      color={color}
                  />
              ),
          }}
        />
    </Tabs>
  )
}

export default _layout