// import images from '@/constants/images';
// import { Profile } from '@/models/Profile';
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { ServiceFactory } from '@/app/service/ServiceFactory';
// import Item, { Details } from '@/models/Item';
// // import { Coffee } from '@/model/Coffee';
// // import { format } from 'date-fns';
// import Order from '@/models/Order';

// const OrderContext = createContext();

// export const OrderProvider = ({ children }) => {

//   const dao = ServiceFactory.getMockDao();

//   // const Coffees = 

//   const Coffees = dao.getCoffees();
//   const profileData = dao.getProfile();

//   const [coffee, setCoffee] = useState<Item>();
//   const [cartItems, setCartItems] = useState<Item[]>([]);
//   // const [ongoingOrders, setOngoingOrders] = useState<Order[]>(dao.getOnGoingOrders());
//   // const [historyOrders, setHistoryOrders] = useState<Order[]>(dao.getOnGoingOrders());


//   // const [profile, setProfile] = useState<Profile>(profileData);
//   const [profile, setProfile] = useState<Profile>();

//   const addToCart = (coffee: Item) => { // Đảm bảo coffee được truyền vào hàm
//     setCartItems(prevItems => {
//       // Tìm kiếm sản phẩm trong giỏ hàng có thông số giống với sản phẩm hiện tại
//       const existingItemIndex = prevItems.findIndex(cartItem => 
//         cartItem.details.shot === coffee.details.shot &&
//         cartItem.details.selection === coffee.details.selection &&
//         cartItem.details.size === coffee.details.size &&
//         cartItem.details.ice === coffee.details.ice &&
//         cartItem.typeID === coffee.typeID // thêm các điều kiện khác nếu cần
//       );
  
//       if (existingItemIndex !== -1) {
//         // Nếu sản phẩm đã tồn tại trong giỏ, chỉ tăng số lượng
//         const updatedItems = [...prevItems];
//         updatedItems[existingItemIndex] = {
//           ...updatedItems[existingItemIndex],
//           quantity: updatedItems[existingItemIndex].quantity + 1, // tăng số lượng
//         };
//         return updatedItems;
//       } else {
//         // Nếu sản phẩm chưa có trong giỏ, thêm sản phẩm mới vào giỏ hàng với quantity = 1
//         return [
//           ...prevItems,
//           {
//             ...coffee,
//             quantity: 1, // Gán quantity mặc định là 1 cho sản phẩm mới
//           },
//         ];
//       }
//     });
//   };

//   // const completeOrder = (orderId) => {
//   //   const completedOrder = ongoingOrders.find(order => order.id === orderId);
//   //   if (completedOrder) {
//   //     setHistoryOrders(prevHistory => [...prevHistory, completedOrder]);
//   //     setOngoingOrders(prevOrders => 
//   //       prevOrders.filter(order => order.id !== orderId)
//   //     );
//   //   }
//   // };

//   const getCoffeeItem = (coffeeID:Number,
//     shot = "Single",
//     quantity=1,
//     selected=true,
//     selection='Cup',
//     size='large',
//     ice=true
//   ) => {
//     const coffeeType = Coffees[Number(coffeeID) - 1];

//     if (coffeeType) {
//       const { id:typeID, name, price, image } = coffeeType;

//       const coffeeDetails = new Details(shot, selection, size, ice);

//       const newCoffee = new Item(
//         Date.now(), // Generate a unique ID
//         typeID,
//         name,
//         price,
//         quantity,
//         selected,
//         coffeeDetails,
//         image
//       );
//       setCoffee(newCoffee);
//     }
//   };

//   const [quantity, setQuantity] = useState(1);
//   const [shot, setShot] = useState("Single");
//   const [selection, setSelection] = useState("Cup");
//   const [size, setSize] = useState("Medium");
//   const [ice, setIce] = useState(false);

//   useEffect(() => {
//     if (coffee) {
//       setCoffee((prev) => {
//         if (!prev) return prev;

//         const updatedDetails = new Details(shot, selection, size, ice);

//         return new Item(
//         prev.id,
//         prev.typeID,
//         prev.name,
//         prev.price,
//         quantity, // Update quantity
//         prev.selected,
//         updatedDetails, // Update details
//         prev.image
//       );

//       });
//     }
//   }, [quantity, shot, selection, size, ice]);

//   const handleQuantityChange = (type) => {
//     if (type === "increase") {
//       setQuantity(quantity + 1);
//     } else if (type === "decrease" && quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleSelectionChange = (type) => {
//     setSelection(type);
//   };

//   const handleSizeChange = (type) => {
//     setSize(type);
//   };

//   const handleIceChange = () => {
//     setIce(!ice);
//   };

//   const handleShotChange = (type) => {
//     setShot(type);
//   };
  
//   const handleRemoveItem = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const handleIncreaseQuantity = (id) => {
//     setCartItems(
//       cartItems.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const handleDecreaseQuantity = (id) => {
//     setCartItems(
//       cartItems.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const toggleSelectItem = (id) => {
//     setCartItems(
//       cartItems.map((item) =>
//         item.id === id ? { ...item, selected: !item.selected } : item
//       )
//     );
//   };

//   const calculateTotal = () => {
//     return cartItems
//       .filter((item) => item.selected)
//       .reduce((total, item) => total + item.price * item.quantity, 0);
//   };
  
//   // Checkout function
//   // const checkout = () => {
//   //   const newOrder = new Order(
//   //     Date.now(), // id
//   //     "On-going", // status
//   //     calculateTotal(), // totalPrice (no need to convert to Number since it’s already a number)
//   //     [...cartItems], // items
//   //     // format(new Date(), 'dd MMMM yyyy, hh:mm a'), // date
//   //     new Date().toISOString(),
//   //   );
  
//   //   setOngoingOrders((prevOrders) => [...prevOrders, newOrder]);
//   // };
  
//   // Handle checkout and reset selected items
//   const handleCheckout = () => {
//     // Remove selected items from cartItems
//     setCartItems(cartItems.filter((item) => !item.selected));
  
//     // Call checkout to add the new order
//     // checkout();
//   };


//   return (
//     <OrderContext.Provider 
//       value={{ 
//         handleQuantityChange,
//         handleSelectionChange,
//         handleSizeChange,
//         handleIceChange,
//         handleShotChange,
//         calculateTotal,
//         handleRemoveItem,
//         handleIncreaseQuantity,
//         handleDecreaseQuantity,
//         toggleSelectItem,
//         handleCheckout,
//         quantity,
//         shot,
//         selection,
//         size,
//         ice,
//         getCoffeeItem,
//         coffee,
//         Coffees,
//         profile,
//         setProfile,
//         cartItems,
//         setCartItems,
//         // ongoingOrders,
//         // setOngoingOrders,
//         // historyOrders,
//         // setHistoryOrders,
//         addToCart, 
//         // checkout,
//         // completeOrder 
//       }}
//     >
//       {children}
//     </OrderContext.Provider>
//   );
// };

// // Custom hook để sử dụng context dễ dàng
// export const useOrder = () => {
//   const context = useContext(OrderContext);
//   if (!context) {
//     throw new Error('useOrder must be used within an OrderProvider');
//   }
//   return context;
// };