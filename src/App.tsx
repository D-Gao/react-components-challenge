import { MyProvider } from "./ProductsContext";
import Example from "./Example";

function App() {
  return (
    <MyProvider>
      <Example></Example>
    </MyProvider>
  );
}

export default App;
