import Example from "./Example";
import { MyProvider } from "./ProductsContext";

const PragmaticDND = () => {
  return (
    <MyProvider>
      <Example></Example>
    </MyProvider>
  );
};

export default PragmaticDND;
