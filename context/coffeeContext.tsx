import images from '@/constants/images';
import { ProfileSchema } from '@/constants/profileSchema';
import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [ongoingOrders, setOngoingOrders] = useState([]);
  const [historyOrders, setHistoryOrders] = useState([]);
  const [profile, setProfile] = useState<ProfileSchema>({
    name: 'Do Phu Qui',
    email: 'PickleBall@ggay.com',
    phone: '0123456789',
    address: 'Hanoi, Vietnam',
    avatar: images.avatar
  }
  );

  const addToCart = (item) => {
    setCartItems(prevItems => {
      // Tìm kiếm sản phẩm trong giỏ hàng có thông số giống với sản phẩm hiện tại
      const existingItemIndex = prevItems.findIndex(cartItem => 
        cartItem.details === item.details && cartItem.typeID === item.typeID// thêm các điều kiện khác nếu cần
      );
  
      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ, chỉ tăng số lượng
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1, // tăng số lượng
        };
        return updatedItems;
      } else {
        // Nếu sản phẩm chưa có trong giỏ, thêm sản phẩm mới vào giỏ hàng với quantity = 1
        return [
          ...prevItems,
          {
            ...item,
            id: Date.now(), // tạo id mới cho sản phẩm
            quantity: 1, // số lượng ban đầu là 1
          },
        ];
      }
    });
  };

  const checkout = () => {
    const newOrder = {
      id: Date.now(),
      items: [...cartItems],
      date: new Date()
    };
    setOngoingOrders(prevOrders => [...prevOrders, newOrder]);
    setCartItems([]);
  };

  const completeOrder = (orderId) => {
    const completedOrder = ongoingOrders.find(order => order.id === orderId);
    if (completedOrder) {
      setHistoryOrders(prevHistory => [...prevHistory, completedOrder]);
      setOngoingOrders(prevOrders => 
        prevOrders.filter(order => order.id !== orderId)
      );
    }
  };

  return (
    <OrderContext.Provider 
      value={{ 
        profile,
        setProfile,
        cartItems,
        setCartItems,
        ongoingOrders,
        setOngoingOrders,
        historyOrders,
        setHistoryOrders,
        addToCart, 
        checkout,
        completeOrder 
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// Custom hook để sử dụng context dễ dàng
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};