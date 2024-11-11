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
};

const colNum = 2;

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
      }),
      autoScrollForElements({
        element: containerRef.current,
        canScroll: ({ source }) => source.data.type === "card",
      })
    );
    return cleanup;
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: items.length / colNum,
    getScrollElement: () => containerRef.current,
    estimateSize: useCallback(() => 35, []),
    overscan: 5,
  });

  return (
    <div
      className=" h-1/2 w-96 border rounded-sm overflow-auto"
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
          const itemIndex1 = rowIndex * colNum;
          const itemIndex2 = itemIndex1 + 1;

          // Get items for both columns in the current virtual row
          /* const item1 = items[itemIndex1];
          const item2 = items[itemIndex2]; */

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
                display: "flex",
              }}
            >
              {Array.from({ length: colNum }).map((_, i) => {
                return <div style={{ width: "50%" }}>Row {itemIndex1 + i}</div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
