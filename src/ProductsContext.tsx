import { createContext, ReactNode, useContext, useState } from "react";
import { Product, totalProducts } from "./data";

// Define the type for your context data
interface MyContextType {
  products: Product[];
  moveCard: (
    sourceId: string,
    targetColumnId: string,
    targetPosition: number
  ) => void;
}

// Create the context with an initial value (you can set it as `null` to start)
const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { MyContext };

//start provider wrapper

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(totalProducts);
  const moveCard = (
    sourceId: string,
    targetColumnId: string,
    targetPosition: number
  ) => {
    // Implement your logic to update `products` here
    // For example, find the source product, remove it from its current position,
    // and insert it at the target position in the target column.

    const updatedProducts = [...products]; // Clone products for immutability

    // Find the source product by `sourceId`
    const sourceIndex = updatedProducts.findIndex((p) => p.id === sourceId);
    const sourceProduct = updatedProducts[sourceIndex];

    // Remove source product from its current position
    updatedProducts.splice(sourceIndex, 1);

    // Insert source product at target position in the target column
    updatedProducts.splice(targetPosition, 0, {
      ...sourceProduct,
      columnId: targetColumnId,
    });

    // Update the products state
    setProducts(updatedProducts);
  };
  return (
    <MyContext.Provider value={{ products, moveCard }}>
      {children}
    </MyContext.Provider>
  );
};
