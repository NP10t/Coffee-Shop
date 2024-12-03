import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router, Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import Colors from '@/constants/Colors';

const _layout = () => {
  const [selectedTab, setSelectedTab] = useState('On Going'); // Trạng thái để theo dõi tab hiện tại

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          backgroundColor: 'white', // Màu nền của tab bar
          position: 'absolute', // Có thể di chuyển tab bar
          elevation: 0, // Loại bỏ shadow trên Android
          shadowOpacity: 0, // Loại bỏ shadow trên iOS
        },
        tabBarLabelStyle: {
          fontSize: 14, // Điều chỉnh kích thước chữ
        },
        // Custom header
        header: () => (
          <View style={styles.headerContainer}>
            {/* Tiêu đề "My Order" */}
            <Text style={styles.headerTitle}>My Order</Text>

            {/* Tabs "On Going" và "History" */}
            <View style={styles.tabButtons}>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  selectedTab === 'On Going' && styles.activeTabButton,
                ]}
                onPress={() => {setSelectedTab('On Going');
                  router.push('/MyOrders')
                }}
              >
                <Text
                  style={[
                    styles.tabButtonText,
                    selectedTab === 'On Going' && styles.activeTabButtonText,
                  ]}
                >
                  On Going
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tabButton,
                  selectedTab === 'history' && styles.activeTabButton,
                ]}
                onPress={() => {setSelectedTab('history');
                  router.push('/MyOrders/history')}
                }
              >
                <Text
                  style={[
                    styles.tabButtonText,
                    selectedTab === 'history' && styles.activeTabButtonText,
                  ]}
                >
                  History
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ),
      }}
    >
      {/* Nội dung của từng tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarButton: () => null, // Ẩn tab bar mặc định của Expo Router
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarButton: () => null, // Ẩn tab bar mặc định của Expo Router
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5', // Đường viền dưới của header
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16, // Khoảng cách với nút tab
    color: '#1E1E1E',
  },
  tabButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 16,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 0,
    // backgroundColor: '#F5F5F5', // Màu nền mặc định của nút
  },
  activeTabButton: {
    borderBottomWidth: 3,
    borderBottomColor: '1E1E1E', // Đường viền dưới của nút khi được chọn
  },
  tabButtonText: {
    fontSize: 14,
    color: '#1E1E1E', // Màu chữ mặc định
  },
  activeTabButtonText: {
    color: '1E1E1E', // Màu chữ của nút được chọn
    fontWeight: 'bold',
  },
});

export default _layout;
