import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.primary,
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
              tabBarLabel: "Home",
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
            name="rewards"
            options={{
              tabBarLabel: "Rewards",
              tabBarIcon: ({ color }) => (
                  <Feather
                      name="gift"
                      size={24}
                      color={color}
                  />
              ),
          }}
        />
        <Tabs.Screen
            name="MyOrders"
            options={{
              tabBarLabel: "My Orders",
              tabBarIcon: ({ color }) => (
                <Ionicons 
                name="receipt-outline"
                size={24}
                color={color} />
              ),
          }}
        />
    </Tabs>
  )
}

export default TabsLayout