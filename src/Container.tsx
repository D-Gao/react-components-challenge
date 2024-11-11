import { useEffect, useRef } from "react";
import { Product } from "./data";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import Card from "./Card";

type Props = {
  items: Product[];
  id: string;
};

const Container = ({ items, id }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }
    const cleanup = combine(
      dropTargetForElements({
        element,
        getData() {
          return { columnId: `${id}` };
        },
        canDrop({ source }) {
          return source.element !== element;
        },
        onDragEnter() {
          console.log("column drag enter");
        },
        onDragLeave() {
          console.log("column on drag leave");
        },
        onDrop() {
          console.log("column on drop");
        },
      })
    );
    return cleanup;
  }, []);

  return (
    <div
      className=" h-1/2 w-100 border rounded-sm overflow-auto"
      ref={containerRef}
    >
      <div className=" grid grid-cols-2">
        {Array.from({ length: 1 }, () => items)
          .flat()
          .map((p, index) => (
            <Card item={p} column={id} key={p.id + index} />
          ))}
      </div>
    </div>
  );
};

export default Container;
