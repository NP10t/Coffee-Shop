import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { useOrder } from "@/view-model/coffee-view-model";

const OnGoing = () => {
  // Đây là dữ liệu lịch sử đơn hàng sau khi checkout
  const {ongoingOrders} = useOrder();

  // useEffect(() => {
  //   console.log("shahahahahhahaha", ongoingOrders);
  // }, []);

  // Render từng đơn hàng
  const renderOrder = ({ item }) => (
    <View style={styles.orderContainer}>
      {/* Thông tin ngày đặt */}
      <Text style={styles.orderDate}>{item.date}</Text>
      <View style={styles.divider} />
      {/* Hiển thị từng món trong đơn hàng */}
      {item.items.map((orderItem, index) => (
        <View key={index} style={styles.itemRow}>
          <Text style={styles.itemName}>{orderItem.name}</Text>
          <Text style={styles.itemQuantity}>
            x{orderItem.quantity} - ${orderItem.price.toFixed(2)}
          </Text>
        </View>
      ))}
      <View style={styles.divider} />
      {/* Tổng giá trị và trạng thái */}
      <View style={styles.footer}>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.totalPrice}>Total: ${item.totalPrice.toFixed(2)}</Text>
        <Text style={styles.status}>
          {item.status === "Completed" ? "✔ Completed" : "⌛ On-going"}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ongoingOrders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrder}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 10,
  },
  orderContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  orderDate: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginVertical: 8,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemQuantity: {
    fontSize: 16,
    color: "#777",
  },
  footer: {
    marginTop: 10,
  },
  address: {
    fontSize: 14,
    color: "#888",
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  status: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4caf50",
    marginTop: 5,
  },
});

export default OnGoing;

// import { View, Text } from 'react-native'
// import React from 'react'

// const index = () => {
//   return (
//     <View>
//       <Text>index</Text>
//     </View>
//   )
// }

// export default index