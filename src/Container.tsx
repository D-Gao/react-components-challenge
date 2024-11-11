import { useEffect, useRef } from "react";
import { Product } from "./data";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import Card from "./Card";

type Props = {
  items: Product[];
  id: number;
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
          return { columnId: `${id}-col` };
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
    <div className=" h-1/2 w-80 border p-2 rounded-sm" ref={containerRef}>
      <div className=" flex flex-col gap-2">
        {items.map((p) => (
          <Card item={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Container;
