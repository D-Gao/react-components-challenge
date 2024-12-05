/* eslint-disable @typescript-eslint/no-unused-vars */
//uselayout init 3 video tags with corrisponding video src base on the input index
//update the virtual list of 3 element based on the slide direction
//the updateed virtual list will try to rerender the video element with the same video src at the center element so does this video element been rerendered or not since the key is the same as the video src
import { cn } from "@/lib/utils";
import React, {
  ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export enum SlideType {
  HORIZONTAL = 0,
  VERTICAL = 1,
}

const slideTransitionDuration = 200;

const forceThreshold = 50;

interface SlideComponentProps<T> {
  items: T[] | undefined;
  index?: number;
  name?: string;
  type?: SlideType;
  autoplay?: boolean;
  indicator?: boolean;
  changeActiveIndexUseAnim?: boolean;
  //onUpdateIndex?: (newIndex: number) => void;
  //children?: ReactNode;
  children: (props: { item: T }) => ReactNode; // Render props function receives item of type T
}

interface StartCoordinates {
  x: number;
  y: number;
  time: number;
}

const SlideComponent = <T,>(props: SlideComponentProps<T>) => {
  const { items = [], index = 0, type = SlideType.VERTICAL, children } = props;
  //the real index not virtual one
  const [currentIndex, onUpdateIndex] = useState(index);

  const wrapperEl = useRef<HTMLDivElement | null>(null);
  // Constants and refs for mutable values
  const judgeValue = 20;
  const disableManualTouch = useRef(false);
  const needCheck = useRef<boolean>(true);
  const next = useRef<boolean>(false);
  const isDown = useRef<boolean>(false);
  const start = useRef<StartCoordinates>({ x: 0, y: 0, time: 0 });
  const move = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  //based on the curernt index update the virtual list
  const virtualList = useMemo(() => {
    if (items.length <= 3) {
      return items;
    } else {
      const start = (currentIndex - 1 + items.length) % items.length;
      const end = (currentIndex + 1) % items.length;
      return [items[start], items[currentIndex], items[end]];
    }
  }, [currentIndex, items]);

  const canSlide = (): boolean => {
    if (needCheck.current) {
      if (
        Math.abs(move.current.x) > judgeValue ||
        Math.abs(move.current.y) > judgeValue
      ) {
        const angle =
          (Math.abs(move.current.x) * 10) / (Math.abs(move.current.y) * 10);
        next.current = type === SlideType.VERTICAL ? angle <= 1 : angle > 1;
        needCheck.current = false;
      } else {
        return false;
      }
    }
    return next.current;
  };

  const getNextIndex = (index: number, step: number) => {
    if (step >= 1) {
      return (index + 1) % items.length;
    } else if (step <= -1) {
      return (index - 1 + items.length) % items.length;
    }
    return index;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSlideOffset = useCallback(
    (index: number, el: HTMLDivElement): number => {
      const containerStyles = getComputedStyle(el);
      // Parse the gap value (it might be in pixels, e.g., "20px")
      const gap = parseFloat(containerStyles.gap || "0");

      if (type === SlideType.HORIZONTAL) {
        const widths: number[] = [];
        Array.from(el.children).forEach((child) => {
          widths.push((child as HTMLElement).getBoundingClientRect().width);
        });
        const offsetWidths = widths.slice(0, index);
        if (offsetWidths.length) {
          return -offsetWidths.reduce((a, b) => a + b + gap, 0);
        }
        return gap;
      } else {
        // Vertical sliding logic can be added here
        let heights: any[] = []; // eslint-disable-line @typescript-eslint/no-explicit-any
        Array.from(el.children).map((v) => {
          heights.push(v.getBoundingClientRect().height);
        });
        heights = heights.slice(0, index);
        if (heights.length) return -heights.reduce((a, b) => a + b + gap);
        return gap;
      }
    },
    [type]
  );

  const slideReset = (newIndex: number) => {
    if (!wrapperEl.current) return;
    const el = wrapperEl.current;
    el.style.transitionDuration = slideTransitionDuration + "ms";
    const t = getSlideOffset(newIndex, el);
    const dx = type === SlideType.HORIZONTAL ? t : 0;
    const dy = type === SlideType.VERTICAL ? t : 0;
    el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    start.current = { x: 0, y: 0, time: 0 };
    move.current = { x: 0, y: 0 };
    next.current = false;
    needCheck.current = true;
    isDown.current = false;
  };

  const slidePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    /* checkEvent(e); */
    if (!wrapperEl.current || disableManualTouch.current) return;
    const el = wrapperEl.current;
    el.style.transitionDuration = "0ms";
    //记录起点坐标，用于move事件计算移动距离
    start.current.x = e.pageX;
    start.current.y = e.pageY;
    //记录按下时间，用于up事件判断滑动时间
    start.current.time = Date.now();
    isDown.current = true;
  };

  //should change the canSlide funciton since it can slide anyway no need to control
  const slidePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDown.current || !wrapperEl.current) return;
    const el = wrapperEl.current;

    move.current.x = e.pageX - start.current.x;
    move.current.y = e.pageY - start.current.y;

    const canSlideRes = canSlide();

    if (canSlideRes) {
      const isNextDirection =
        type === SlideType.VERTICAL ? move.current.y < 0 : move.current.x < 0;
      e.stopPropagation();
      const offsetDimension = getSlideOffset(1, el);
      //获取偏移量
      const t =
        offsetDimension; /* + (isNextDirection ? judgeValue : -judgeValue) */
      //偏移量加当前手指移动的距离就是slide要偏移的值
      const dx = type === SlideType.VERTICAL ? 0 : t + move.current.x;
      const dy = type === SlideType.VERTICAL ? t + move.current.y : 0;

      el.style.transitionDuration = "0ms";
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    }
  };

  const slidePointerUp = (_e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    const isHorizontal = false;
    const isNextDirection = isHorizontal
      ? move.current.x < 0
      : move.current.y < 0;
    //if user is sliding the slide
    if (next.current) {
      const endTime = Date.now();
      let gapTime = endTime - start.current.time;

      const distance = isHorizontal ? move.current.x : move.current.y;

      const dimension = -getSlideOffset(1, wrapperEl.current!);

      if (Math.abs(distance) < 20) gapTime = 1000;
      if (Math.abs(distance) > dimension / 3) gapTime = 100;
      // the local index should just be the same as global index
      if (gapTime < 150) {
        const newIndex = isNextDirection
          ? getNextIndex(currentIndex, +1)
          : getNextIndex(currentIndex, -1);
        /* setLocalIndex(newIndex); */
        /*  */
        disableManualTouch.current = true;
        slideReset(isNextDirection ? 2 : 0);
        setTimeout(() => {
          disableManualTouch.current = false;
          if (onUpdateIndex) {
            onUpdateIndex(newIndex);
          }
        }, slideTransitionDuration);
      } else {
        slideReset(1);
      }
    } else {
      slideReset(1);
    }
  };

  // Initialize the slider
  useLayoutEffect(() => {
    if (!wrapperEl.current) return;
    const el = wrapperEl.current;
    const t = getSlideOffset(1, el);
    const dx = type === SlideType.HORIZONTAL ? t : 0;
    const dy = type === SlideType.VERTICAL ? t : 0;
    el.style.transitionDuration = `0ms`;
    el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  }, [getSlideOffset, type, virtualList]); //need also a recalculated position when a virtualist is changed.

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    //e.preventDefault();
    if (!wrapperEl.current || disableManualTouch.current) return;
    const forceValue = e.deltaY;

    console.log(forceValue);
    const canSwipe = Math.abs(forceValue) >= forceThreshold;

    /**
     * if swiperable set a flag for reject future handlescrolls event
     * and then if everything is done reset the flag
     */
    if (!canSwipe) return;

    disableManualTouch.current = true;
    const isNextDirection = forceValue > 0 ? true : false;

    /**
     * perform actual swipe animation and index update
     */
    const newIndex = isNextDirection
      ? getNextIndex(currentIndex, +1)
      : getNextIndex(currentIndex, -1);
    disableManualTouch.current = true;
    slideReset(isNextDirection ? 2 : 0);

    setTimeout(() => {
      /* disableManualTouch.current = false; */
      if (onUpdateIndex) {
        onUpdateIndex(newIndex);
      }
    }, slideTransitionDuration);

    setTimeout(() => {
      disableManualTouch.current = false;
    }, slideTransitionDuration * 2);

    return;
    /* const el = wrapperEl.current;
    const delta = e.deltaY;
    const isVertical = type === SlideType.VERTICAL;

    // Calculate the current offset
    const currentTransform = getComputedStyle(el).transform;
    const matrix = new DOMMatrix(currentTransform);
    const currentOffset = isVertical ? matrix.m42 : matrix.m41;

    // Define limits
    const maxOffset = 0; // Example: top/left edge
    const minOffset = isVertical
      ? -(el.scrollHeight - el.clientHeight) // Total height minus visible height
      : -(el.scrollWidth - el.clientWidth); // Total width minus visible width

    // Calculate new offset with limits
    const newOffset = Math.min(
      Math.max(currentOffset - delta, minOffset),
      maxOffset
    );

    // Apply the transform
    el.style.transitionDuration = `0ms`;
    el.style.transform = isVertical
      ? `translate3d(0, ${newOffset}px, 0)`
      : `translate3d(${newOffset}px, 0, 0)`; */
  };

  // Render component
  return (
    <div className="h-full">
      <div className="touch-none h-full w-full transition-[height] duration-0 relative overflow-hidden  horizontal">
        <div
          className={`relative h-full w-full flex gap-6 ${
            type === SlideType.VERTICAL && "flex-col"
          }`}
          style={{
            willChange: "transform",
            scrollBehavior: "auto",
            overscrollBehavior: "contain",
          }}
          ref={wrapperEl}
          onPointerDown={(e) => slidePointerDown(e)}
          onPointerMove={slidePointerMove}
          onPointerUp={slidePointerUp}
          onPointerOut={slidePointerUp}
          onWheel={handleScroll}
        >
          {virtualList.map((item) => children({ item }))}
        </div>
      </div>
    </div>
  );
};

const SlideItem = ({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-[90%] w-full flex-shrink-0 animate-fadeIn",
        className
      )}
    >
      {children}
    </div>
  );
};

export { SlideComponent, SlideItem };
