import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import images from '@/constants/images';
import { router } from 'expo-router';

const RewardsScreen = () => {
  const rewardsHistory = [
    { id: '1', drink: 'Americano', date: '24 June | 12:30 PM', points: 12 },
    { id: '2', drink: 'Cafe Latte', date: '22 June | 08:30 AM', points: 12 },
    { id: '3', drink: 'Green Tea Latte', date: '16 June | 10:48 AM', points: 12 },
    { id: '4', drink: 'Flat White', date: '12 May | 11:25 AM', points: 12 },
  ];

  const loyaltyProgress = 4; // Current progress out of 8
  const totalPoints = 2750;

  const renderRewardItem = ({ item }) => (
    <View style={styles.historyItem}>
      <View>
        <Text style={styles.drinkName}>{item.drink}</Text>
        <Text style={styles.drinkDate}>{item.date}</Text>
      </View>
      <Text style={styles.pointsText}>+ {item.points} Pts</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rewards</Text>

      {/* Loyalty Card Section */}
      <View style={styles.loyaltyCardContainer}>
        <Text style={styles.sectionTitle}>Loyalty card</Text>
        <View style={styles.loyaltyCard}>
          {[...Array(8)].map((_, index) => (
            <Image
              key={index}
              source={
                index < loyaltyProgress
                  ? images.filled_cup // Replace with your "filled" image path
                  : images.empty_cup  // Replace with your "empty" image path
              }
              style={styles.cupIcon}
            />
          ))}
        </View>
        <Text style={styles.loyaltyProgressText}>{`${loyaltyProgress} / 8`}</Text>
      </View>

      {/* Points Section */}
      <View style={styles.pointsContainer}>
        <View>
          <Text style={styles.pointsLabel}>My Points:</Text>
          <Text style={styles.pointsValue}>{totalPoints}</Text>
        </View>
        <TouchableOpacity style={styles.redeemButton}
        onPress={()=>router.push('/redeem')}>
          <Text style={styles.redeemButtonText}>Redeem drinks</Text>
        </TouchableOpacity>
      </View>

      {/* History Rewards Section */}
      <Text style={styles.historyTitle}>History Rewards</Text>
      <FlatList
        data={rewardsHistory}
        keyExtractor={(item) => item.id}
        renderItem={renderRewardItem}
        style={styles.historyList}
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
    paddingVertical: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#1E1E1E',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  loyaltyCardContainer: {
    backgroundColor: '#29425B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  loyaltyCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  cupIcon: {
    width: 32,
    height: 32,
    marginHorizontal: 4,
  },
  loyaltyProgressText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  pointsContainer: {
    flexDirection: 'row',
    backgroundColor: '#29425B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pointsLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  pointsValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  redeemButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  redeemButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#29425B',
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
    marginBottom: 8,
  },
  historyList: {
    flex: 1,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  drinkName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  drinkDate: {
    fontSize: 12,
    color: '#7E7E7E',
  },
  pointsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
});

export default RewardsScreen;
