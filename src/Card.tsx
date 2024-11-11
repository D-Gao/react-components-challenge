import { useEffect, useRef } from "react";
import { Product } from "./data";
import { GripVertical } from "lucide-react";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import {
  dropTargetForElements,
  draggable,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

type Props = {
  item: Product;
};

const Card = ({ item }: Props) => {
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
          return item;
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
          return item;
        },
        canDrop({ source }) {
          /*  console.log(source.element !== element); */
          return source.element !== element;
        },
        onDragEnter() {
          console.log("dropTargetForElements drag enter");
        },
        onDragLeave() {
          console.log("dropTargetForElements on drop leave");
        },
        onDrop() {
          console.log("dropTargetForElements on target drop");
        },
      })
    );
    return cleanup;
  }, []);

  return (
    <div
      className=" border p-2 flex gap-2 cursor-pointer rounded-sm"
      ref={cardRef}
    >
      <GripVertical ref={grabRef} className="  cursor-grab"></GripVertical>
      {item.name}
    </div>
  );
};

export default Card;
