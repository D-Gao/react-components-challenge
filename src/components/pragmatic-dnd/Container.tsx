/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useRef } from "react";
import { Product } from "./data";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import Card from "./Card";
import { autoScrollForElements } from "@atlaskit/pragmatic-drag-and-drop-auto-scroll/element";
import { useVirtualizer, type VirtualItem } from "@tanstack/react-virtual";

type Props = {
  items: Product[];
  id: string;
  colNum: number;
};

const Container = ({ items, id, colNum = 1 }: Props) => {
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
      }),
      autoScrollForElements({
        element: containerRef.current,
        canScroll: ({ source }) => source.data.type === "card",
      })
    );
    return cleanup;
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(items.length / colNum),
    getScrollElement: () => containerRef.current,
    estimateSize: useCallback(() => 50, []),
    overscan: 5,
  });

  return (
    <div
      className=" h-1/2 w-[48vw] border rounded-sm overflow-auto"
      ref={containerRef}
      style={{
        position: "relative",
      }}
    >
      <div
        className=" flex"
        style={{
          height: `${Math.ceil(rowVirtualizer.getTotalSize())}px`,
          position: "relative",
          width: "100%",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const rowIndex = virtualRow.index;
          const itemIndex = rowIndex * colNum;

          // Get items for both columns in the current virtual row
          /* const item1 = items[itemIndex1];
          const item2 = items[itemIndex2]; */
          /* if (!items[itemIndex]) return; */

          return (
            <div
              key={virtualRow.key}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
                display: "grid",
                gridTemplateColumns: `repeat(${colNum}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: colNum }).map((_, i) => {
                const item = items[itemIndex + i];
                return item && <Card item={item} column={id} key={item.id} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
