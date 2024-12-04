// import { router } from "expo-router";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   Pressable,
// } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import { useOrder } from '@/view-model/coffee-view-model';

// const CartScreen = () => {

//   const { cartItems,
//     toggleSelectItem,
//     handleDecreaseQuantity,
//     handleIncreaseQuantity,
//     handleRemoveItem,
//     calculateTotal,
//     handleCheckout 
//   } 
//   = useOrder();

//   const renderItem = ({ item }) => (

//     <View style={styles.itemContainer}>
//       <TouchableOpacity
//         style={styles.checkbox}
//         onPress={() => toggleSelectItem(item.id)}
//       >
//         <Icon
//           name={item.selected ? "checkbox" : "square-outline"}
//           size={24}
//           color="#333"
//         />
//       </TouchableOpacity>
//       <Image source={item.image} style={styles.itemImage} />
//       <View style={styles.itemDetails}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Pressable onPress={()=>router.push(`/details/${item.id}`)}>
//         <Text style={styles.itemDetailsText}>{item.details.to_string()}</Text>
//         </Pressable>
//         <View style={styles.quantityContainer}>
//           <TouchableOpacity
//             onPress={() => handleDecreaseQuantity(item.id)}
//             style={styles.quantityButton}
//           >
//             <Icon name="remove-outline" size={20} color="#333" />
//           </TouchableOpacity>
//           <Text style={styles.quantityText}>{item.quantity}</Text>
//           <TouchableOpacity
//             onPress={() => handleIncreaseQuantity(item.id)}
//             style={styles.quantityButton}
//           >
//             <Icon name="add-outline" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.itemPriceContainer}>
//         <Text style={styles.itemPrice}>
//           ${(item.price * item.quantity).toFixed(2)}
//         </Text>
//         <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={styles.deleteButton}>
//           <Icon name="trash-outline" size={20} color="#FF6B6B" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}

//       {/* Cart Items */}
//       <FlatList
//         data={cartItems}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.listContainer}
//       />

//       {/* Footer */}
//       <View style={styles.footer}>
//         <View style={styles.totalContainer}>
//           <Text style={styles.totalLabel}>Total Price</Text>
//           <Text style={styles.totalPrice}>${
//           calculateTotal()
//           }</Text>
//         </View>
//         <TouchableOpacity
//           style={styles.checkoutButton}
//         //   onPress={() => {
//         //     handleCheckout(); // Call handleCheckout function
//         //     // router.push('/myCart/orderSuccess'); // Navigate to the '/order' route
//         //   }}
//         >
//           <Icon name="cart-outline" size={20} color="#fff" />
//           <Text style={styles.checkoutButtonText}>Checkout</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 16,
//     borderBottomWidth: 1,
//     borderColor: "#eee",
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   listContainer: {
//     padding: 16,
//   },
//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f9f9f9",
//     padding: 12,
//     borderRadius: 12,
//     marginBottom: 12,
//   },
//   checkbox: {
//     marginRight: 8,
//   },
//   itemImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//   },
//   itemDetails: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   itemDetailsText: {
//     fontSize: 14,
//     color: "#666",
//     marginVertical: 4,
//   },
//   quantityContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 8,
//   },
//   quantityButton: {
//     padding: 6,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 6,
//   },
//   quantityText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginHorizontal: 8,
//   },
//   itemPriceContainer: {
//     alignItems: "center",
//   },
//   itemPrice: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   deleteButton: {
//     marginTop: 8,
//     backgroundColor: "#FFECEC",
//     padding: 6,
//     borderRadius: 8,
//   },
//   footer: {
//     borderTopWidth: 1,
//     borderColor: "#eee",
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   totalContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   totalLabel: {
//     fontSize: 16,
//     color: "#666",
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   checkoutButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#000",
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   checkoutButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//     marginLeft: 8,
//   },
// });

// export default CartScreen;
