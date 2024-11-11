import { createContext, ReactNode, useContext, useState } from "react";
import { Product, Status, totalProducts } from "./data";

// Define the type for your context data
interface MyContextType {
  products: Record<string, Product[]>;

  setProducts: React.Dispatch<React.SetStateAction<Record<string, Product[]>>>;
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
  const [products, setProducts] = useState<Record<string, Product[]>>({
    active: totalProducts.filter((p) => p.status === Status.ACTIVE),
    inactive: totalProducts.filter((p) => p.status === Status.INACTIVE),
  });
  return (
    <MyContext.Provider value={{ products, setProducts }}>
      {children}
    </MyContext.Provider>
  );
};
