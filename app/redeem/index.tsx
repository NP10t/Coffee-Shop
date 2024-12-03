import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Sử dụng icon từ Expo
import images from '@/constants/images';

const RedeemRewardsScreen = () => {
  const rewardsData = [
    {
      id: '1',
      name: 'Cafe Latte',
      image: images.mocha, // Thay bằng đường dẫn đến hình ảnh
      points: 1340,
      validUntil: '04.07.21',
    },
    {
      id: '2',
      name: 'Flat White',
      image: images.flatWhite, // Thay bằng đường dẫn đến hình ảnh
      points: 1340,
      validUntil: '04.07.21',
    },
    {
      id: '3',
      name: 'Cappuccino',
      image: images.cappuccino, // Thay bằng đường dẫn đến hình ảnh
      points: 1340,
      validUntil: '04.07.21',
    },
  ];

  const renderRewardItem = ({ item }) => (
    <View style={styles.rewardItem}>
      <Image source={item.image} style={styles.rewardImage} />
      <View style={styles.rewardDetails}>
        <Text style={styles.rewardName}>{item.name}</Text>
        <Text style={styles.rewardValidity}>Valid until {item.validUntil}</Text>
      </View>
      <View style={styles.pointsBadge}>
        <Text style={styles.pointsText}>{item.points} pts</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#1E1E1E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Redeem</Text>
      </View> */}

      {/* Rewards List */}
      <FlatList
        data={rewardsData}
        keyExtractor={(item) => item.id}
        renderItem={renderRewardItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: '#1E1E1E',
  },
  listContainer: {
    paddingBottom: 16,
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Hiển thị shadow trên Android
  },
  rewardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  rewardDetails: {
    flex: 1,
  },
  rewardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  rewardValidity: {
    fontSize: 12,
    color: '#7E7E7E',
  },
  pointsBadge: {
    backgroundColor: '#29425B',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pointsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default RedeemRewardsScreen;