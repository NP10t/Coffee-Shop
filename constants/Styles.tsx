import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAF0F6', // Background color
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    greeting: {
      fontSize: 16,
      color: '#6A6A6A',
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#2A2A2A',
    },
    headerIcons: {
      flexDirection: 'row',
    },
    icon: {
      width: 24,
      height: 24,
      marginLeft: 10,
    },
    loyaltyCard: {
      backgroundColor: '#324A60',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
    },
    loyaltyText: {
      color: '#FFFFFF',
      fontSize: 16,
      marginBottom: 5,
    },
    loyaltyProgress: {
      color: '#FFFFFF',
      fontSize: 14,
      marginBottom: 10,
    },
    cupsContainer: {
      flexDirection: 'row',
    },
    cupIcon: {
      width: 24,
      height: 24,
      marginRight: 5,
    },
    chooseCoffee: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    coffeeOptions: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    coffeeCard: {
      width: '48%',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
    coffeeImage: {
      width: 80,
      height: 80,
      marginBottom: 10,
    },
    coffeeName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#2A2A2A',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: '#DDDDDD',
      backgroundColor: '#FFFFFF',
    },
    navIcon: {
      width: 24,
      height: 24,
    },
  });