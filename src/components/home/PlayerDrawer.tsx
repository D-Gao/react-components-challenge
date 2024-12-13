"use client";

import * as React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRef } from "react";

/* const snapPoints = ['100px', 1] */

type Props = {
  children: React.ReactNode;
};

export function PlayerDrawer({ children }: Props) {
  /* const [snap, setSnap] = React.useState<number | string | null>(snapPoints[0]) */
  const ref = useRef<HTMLDivElement>(null);
  /* React.useEffect(() => {
    if (!ref.current) return
    ref.current!.style.backgroundColor = snap === 1 ? endColor : startColor
  }, [endColor, snap, startColor]) */

  return (
    <Drawer
      /*  onDrag={(
        event: React.PointerEvent<HTMLDivElement>,
        percentageDragged: number
      ) => {
        event.stopPropagation()
      }} */
      /*  const interpolatedColor = interpolateColors(
          startColor,
          endColor,
          1 - percentageDragged
        )
        ref.current!.style.backgroundColor = interpolatedColor */
      /* onRelease={() => {
        ref.current!.style.backgroundColor = snap === 1 ? endColor : startColor
      }} */
      //dismissible={true}
      /* open={} */
      /*  snapPoints={snapPoints}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap} */
      modal={true}
    >
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerOverlay asChild />
      <DrawerContent
        onInteractOutside={(e) => e.preventDefault()}
        ref={ref}
        /*  className={`drawer bg-primary-500`} */
        onClick={() => {
          console.log("get changed");
        }}
      >
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">13213</div>
                <div className="text-muted-foreground text-[0.70rem] uppercase">
                  Calories/day
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <button>Submit</button>
            <DrawerClose asChild>
              <button>Cancel</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
