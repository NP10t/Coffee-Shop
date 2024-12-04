// import { router } from 'expo-router';
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';


// const OrderSuccess = () => {
//   return (
//     <View style={styles.container}>
//       <MaterialIcons name="delivery-dining" size={80} color="black" />
//       <Text style={styles.title}>Order Success</Text>
//       <Text style={styles.message}>
//         Your order has been placed successfully.
//       </Text>
//       <Text style={styles.message}>For more details, go to my orders.</Text>
//       <TouchableOpacity style={styles.button}
//     onPress={() => router.push('/MyOrders')}
//       >
//         <Text style={styles.buttonText}>Track My Order</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 24,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 32,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   message: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 24,
//   },
//   button: {
//     backgroundColor: '#000',
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default OrderSuccess;