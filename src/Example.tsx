/* eslint-disable @typescript-eslint/no-unused-vars */
import { categories, Product, Status } from "@/data";
import Container from "./Container";
import { useMyContext } from "@/ProductsContext";
import { useCallback, useEffect } from "react";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { reorder } from "@atlaskit/pragmatic-drag-and-drop/reorder";

import { DraggableType } from "./Card";

type Trigger = "pointer" | "keyboard";

const Example = () => {
  const { products, setProducts } = useMyContext();

  const reorderCard = useCallback(
    ({
      columnId,
      startIndex,
      finishIndex,
      trigger = "keyboard",
    }: {
      columnId: string;
      startIndex: number;
      finishIndex: number;
      trigger?: Trigger;
    }) => {
      const sourceColumn = products[columnId];
      const updatedItems = reorder({
        list: sourceColumn,
        startIndex,
        finishIndex,
      });

      setProducts((prev) => {
        return { ...prev, [columnId]: updatedItems };
      });
    },
    [products, setProducts]
  );

  const moveCard = useCallback(
    ({
      startColumnId,
      finishColumnId,
      itemIndexInStartColumn,
      itemIndexInFinishColumn,
      trigger = "keyboard",
    }: {
      startColumnId: string;
      finishColumnId: string;
      itemIndexInStartColumn: number;
      itemIndexInFinishColumn?: number;
      trigger?: Trigger;
    }) => {
      // invalid cross column movement
      if (startColumnId === finishColumnId) {
        return;
      }

      const sourceColumn = products[startColumnId];
      /* const updatedItems = reorder({
        list: sourceColumn,
        startIndex,
        finishIndex,
      }); */
      const destinationColumn = products[finishColumnId];

      const item: Product = sourceColumn[itemIndexInStartColumn];

      const destinationItems = [...destinationColumn];
      const newIndexInDestination = itemIndexInFinishColumn ?? 0;
      destinationItems.splice(newIndexInDestination, 0, item);

      setProducts((prev) => {
        return {
          ...prev,
          [startColumnId]: sourceColumn.filter((i) => i.id !== item.id),
          [finishColumnId]: destinationItems,
        };
      });

      /*  setData((data) => {
        const sourceColumn = data.columnMap[startColumnId];
        const destinationColumn = data.columnMap[finishColumnId];
        const item: Person = sourceColumn.items[itemIndexInStartColumn];

        const destinationItems = Array.from(destinationColumn.items);
        // Going into the first position if no index is provided
        const newIndexInDestination = itemIndexInFinishColumn ?? 0;
        destinationItems.splice(newIndexInDestination, 0, item);

        const updatedMap = {
          ...data.columnMap,
          [startColumnId]: {
            ...sourceColumn,
            items: sourceColumn.items.filter((i) => i.userId !== item.userId),
          },
          [finishColumnId]: {
            ...destinationColumn,
            items: destinationItems,
          },
        };

        const outcome: Outcome | null = {
          type: "card-move",
          finishColumnId,
          itemIndexInStartColumn,
          itemIndexInFinishColumn: newIndexInDestination,
        };

        return {
          ...data,
          columnMap: updatedMap,
          lastOperation: {
            outcome,
            trigger: trigger,
          },
        };
      }); */
    },
    [products, setProducts]
  );

  useEffect(() => {
    const cleanup = combine(
      monitorForElements({
        onDrop(args) {
          const { location, source } = args;
          // didn't drop on anything
          if (!location.current.dropTargets.length) {
            return;
          }

          // Dragging a card

          if (source.data.type === "card") {
            const sourceData = source.data as unknown as DraggableType<Product>;

            const itemId = sourceData.item.id;
            // TODO: these lines not needed if item has columnId on it
            const sourceColumnId = sourceData.column;

            const sourceColumn = products[sourceColumnId];
            const itemIndex = sourceColumn.findIndex(
              (item) => item.id === itemId
            );

            //if the drop happens just in a column with out inside a droppable card
            if (location.current.dropTargets.length === 1) {
              const [destinationColumnRecord] = location.current.dropTargets;
              const destinationColumnId = destinationColumnRecord.data
                .columnId as string;

              //const destinationColumn = products[destinationColumnId];

              // reordering in same column
              if (sourceColumnId === destinationColumnId) {
                const destinationIndex = sourceColumn.length - 1;
                reorderCard({
                  columnId: sourceColumnId,
                  startIndex: itemIndex,
                  finishIndex: destinationIndex,
                  trigger: "pointer",
                });
                return;
              }

              // moving to a new column
              moveCard({
                itemIndexInStartColumn: itemIndex,
                startColumnId: sourceColumnId,
                finishColumnId: destinationColumnId,
                trigger: "pointer",
              });
              return;
            }

            // dropping in a column (relative to a card)
            if (location.current.dropTargets.length === 2) {
              const [destinationCardRecord, destinationColumnRecord] =
                location.current.dropTargets;
              const destinationColumnId = destinationColumnRecord.data
                .columnId as string;

              const destinationColumn = products[destinationColumnId];

              const indexOfTarget = destinationColumn.findIndex(
                (item) =>
                  item.id ===
                  (
                    destinationCardRecord.data as unknown as DraggableType<Product>
                  ).item.id
              );
              /* const closestEdgeOfTarget: Edge | null = extractClosestEdge(
                destinationCardRecord.data
              ); */

              // case 1: ordering in the same column
              if (sourceColumn === destinationColumn) {
                /* const destinationIndex = getReorderDestinationIndex({
                  startIndex: itemIndex,
                  indexOfTarget,
                  closestEdgeOfTarget,
                  axis: "vertical",
                }); */
                //if it is the same card just return
                if (itemIndex === indexOfTarget) return;

                reorderCard({
                  columnId: sourceColumnId,
                  startIndex: itemIndex,
                  finishIndex: indexOfTarget,
                  trigger: "pointer",
                });
                return;
              }

              // case 2: moving into a new column relative to a card

              /* const destinationIndex =
                closestEdgeOfTarget === "bottom"
                  ? indexOfTarget + 1
                  : indexOfTarget; */

              moveCard({
                itemIndexInStartColumn: itemIndex,
                startColumnId: sourceColumnId,
                finishColumnId: destinationColumnId,
                itemIndexInFinishColumn: indexOfTarget,
                trigger: "pointer",
              });
            }
          }
        },
      })
    );
    return cleanup;
  }, [moveCard, products, reorderCard]);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-background">
      <div className=" flex gap-2 h-full items-center">
        {Object.values(Status).map((s) => (
          <Container items={products[s]} id={s} key={s}></Container>
        ))}
      </div>
    </div>
  );
};

export default Example;
