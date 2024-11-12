/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useEffect, useRef, useState } from "react";
import { Product } from "./data";
import { GripVertical } from "lucide-react";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import {
  dropTargetForElements,
  draggable,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

type Props = {
  item: Product;
  column: string;
};
export interface DraggableType<T> {
  type: string;
  item: T;
  column: string;
}

const Card = memo(({ item, column }: Props) => {
  const [isCardOver, setCardOver] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const grabRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element || !grabRef.current) return;
    const cleanup = combine(
      draggable({
        element,
        dragHandle: grabRef.current,
        getInitialData() {
          const wrappedData: DraggableType<Product> = {
            item,
            type: "card",
            column: column,
          };
          return { ...wrappedData };
        },
        onDragStart(args) {
          console.log("card dragStart");
        },
        onDrop(args) {
          console.log("card drop");
        },
        /* onGenerateDragPreview({nativeSetDragImage}) {

        }, */
      }),

      dropTargetForElements({
        element,
        getData() {
          const wrappedData: DraggableType<Product> = {
            item,
            type: "card",
            column: column,
          };
          return { ...wrappedData };
        },
        /*  canDrop(args) {
       
          return args.source.element !== element;
        }, */
        onDragEnter() {
          setCardOver(true);
          console.log("dropTargetForElements drag enter");
        },
        onDragLeave() {
          setCardOver(false);
          console.log("dropTargetForElements on drop leave");
        },
        onDrop(args) {
          setCardOver(false);
          console.log("dropTargetForElements on target drop");
          const { source, self } = args;
          const sourceData = source.data as unknown as DraggableType<Product>;
          const targetData = self.data as unknown as DraggableType<Product>;
          console.log(sourceData);
          //moveCard(sourceData, targetData);
        },
      })
    );
    return cleanup;
  }, []);

  return (
    <div
      className="p-2 transition-opacity duration-200 "
      style={{
        opacity: isCardOver ? 0.5 : 1,
      }}
      ref={cardRef}
    >
      <div className="border p-2 flex gap-2 cursor-pointer rounded-sm  justify-start">
        <GripVertical
          ref={grabRef}
          className="  cursor-grab flex-shrink-0"
        ></GripVertical>
        <p className="whitespace-nowrap  text-ellipsis overflow-hidden ">
          {item.name}
        </p>
      </div>
    </div>
  );
});

export default Card;
