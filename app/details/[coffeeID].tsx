import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { COFFEE_DATA, CoffeeType } from '@/constants/CoffeeData';
import { useOrder } from "@/context/coffeeContext";
import {Item} from '@/constants/item';

const DetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [shot, setShot] = useState("Single");
  const [selection, setSelection] = useState("Cup");
  const [size, setSize] = useState("Medium");
  const [ice, setIce] = useState(false);

  const { coffeeID } = useLocalSearchParams();
  const { addToCart } = useOrder();
  const [coffee, setCoffee] = useState<Item>();

  useEffect(() => {
    const coffeeType = COFFEE_DATA[Number(coffeeID) - 1];

    if (coffeeType) {
      const { id:typeID, name, price, image } = coffeeType;
      setCoffee({
        id: -1,
        typeID: typeID,
        name,
        price,
        quantity,
        selected: true,
        details: `${shot} | ${selection} | ${size} | ${ice ? "Ice" : "Hot"}`,
        image,
      });
    }
  }, [coffeeID]);
  
  useEffect(() => {
    if (coffee) {
      setCoffee((prev) => {
        if (!prev) return prev; // Nếu prev là undefined, trả về luôn.
        return {
          ...prev,
          quantity,
          details: `${shot} | ${selection} | ${size} | ${ice ? "Ice" : "Hot"}`,
        };
      });
    }
  }, [quantity, shot, selection, size, ice]);
  

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotal = () => {
    let basePrice = Number(coffee?.price); // Base price for an Americano
    basePrice += shot === "Double" ? 1 : 0;
    basePrice += size === "Large" ? 1.5 : size === "Small" ? -0.5 : 0;
    return (basePrice * quantity).toFixed(2);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
        <Icon name="arrow-back-outline" size={24} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Details</Text>
        <Pressable onPress={() => router.push('/myCart')}>
        <Icon name="cart-outline" size={24} color="#000" />
        </Pressable>
      </View> */}

      {/* Coffee Image */}
      <Image
        source={coffee?.image}
        style={styles.image}
      />

      {/* Coffee Details */}
      <View style={styles.details}>
        <View style={styles.row}>
          <Text style={styles.label}>{coffee?.name}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleQuantityChange("decrease")}>
              <Icon name="remove-circle-outline" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={() => handleQuantityChange("increase")}>
              <Icon name="add-circle-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Shot */}
        <View style={styles.row}>
          <Text style={styles.label}>Shot</Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={[
                styles.option,
                shot === "Single" && styles.optionSelected,
              ]}
              onPress={() => setShot("Single")}
            >
              <Text
                style={[
                  styles.optionText,
                  shot === "Single" && styles.optionTextSelected,
                ]}
              >
                Single
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                shot === "Double" && styles.optionSelected,
              ]}
              onPress={() => setShot("Double")}
            >
              <Text
                style={[
                  styles.optionText,
                  shot === "Double" && styles.optionTextSelected,
                ]}
              >
                Double
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Selection */}
        <View style={styles.row}>
          <Text style={styles.label}>Select</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity 
            // onPress={() => router.push('/details/1')}
            onPress={() => setSelection("Cup")}
              >
              <Icon
                name="cafe-outline"
                size={28}
                color={selection === "Cup" ? "#000" : "#bbb"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelection("Takeaway")}>
              <Icon
                name="beer-outline"
                size={28}
                color={selection === "Takeaway" ? "#000" : "#bbb"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Size */}
        <View style={styles.row}>
          <Text style={styles.label}>Size</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => setSize("Small")}>
              <Icon
                name="square-outline"
                size={28}
                color={size === "Small" ? "#000" : "#bbb"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSize("Medium")}>
              <Icon
                name="square-sharp"
                size={28}
                color={size === "Medium" ? "#000" : "#bbb"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSize("Large")}>
              <Icon
                name="apps-outline"
                size={28}
                color={size === "Large" ? "#000" : "#bbb"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Ice */}
        <View style={styles.row}>
          <Text style={styles.label}>Ice</Text>
          <TouchableOpacity onPress={() => setIce(!ice)}>
            <Icon
              name="ice-cream-outline"
              size={28}
              color={ice ? "#000" : "#bbb"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Total Amount */}
      <View style={styles.footer}>
        <Text style={styles.totalAmount}>Total Amount: ${calculateTotal()}</Text>
        <TouchableOpacity style={styles.addButton}
        onPress={()=> {if (coffee) {
          addToCart(coffee);
        } router.push('/myCart')}}>
          <Text style={styles.addButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 16,
  },
  details: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  optionContainer: {
    flexDirection: "row",
  },
  option: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 8,
    marginHorizontal: 4,
  },
  optionSelected: {
    borderColor: "#000",
  },
  optionText: {
    fontSize: 14,
    color: "#bbb",
  },
  optionTextSelected: {
    color: "#000",
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetailsScreen;
// function setCoffee(arg0: CoffeeType) {
//   throw new Error("Function not implemented.");
// }

