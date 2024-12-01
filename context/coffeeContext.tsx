import React, { createContext, useState, useContext } from 'react';

// Định nghĩa kiểu dữ liệu cho cà phê
export interface CoffeeType {
  id: number;
  name: string;
  image: any; // Thay `any` bằng `ImageSourcePropType` nếu bạn dùng ảnh
  point: number;
  price: number;
}

// Định nghĩa kiểu dữ liệu context
interface CoffeeContextType {
  selectedCoffee: CoffeeType | null;
  setSelectedCoffee: (coffee: CoffeeType) => void;
}

// Tạo context
const CoffeeContext = createContext<CoffeeContextType | undefined>(undefined);

// Provider để bao bọc ứng dụng
export const CoffeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeType | null>(null);

  return (
    <CoffeeContext.Provider value={{ selectedCoffee, setSelectedCoffee }}>
      {children}
    </CoffeeContext.Provider>
  );
};

// Hook để sử dụng context
export const useCoffee = () => {
  const context = useContext(CoffeeContext);
  if (!context) {
    throw new Error('useCoffee must be used within a CoffeeProvider');
  }
  return context;
};
