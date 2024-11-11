import { categories, Product } from "@/data";
import Container from "./Container";
import { useMyContext } from "@/ProductsContext";

const Example = () => {
  const { products } = useMyContext();

  const map = Object.values(categories).reduce(
    (acc, c) => {
      acc[c.categoryId] = products.filter((p) => p.categoryId === c.categoryId);
      return acc;
    },
    {} as {
      [key: string]: Product[];
    }
  );

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-background">
      <div className=" flex gap-2 h-full items-center">
        {Object.values(categories).map((c, i) => (
          <Container items={map[c.categoryId]} id={i}></Container>
        ))}
      </div>
    </div>
  );
};

export default Example;