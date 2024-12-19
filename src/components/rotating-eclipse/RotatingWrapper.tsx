import { CSSProperties, ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export const RotatingWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidths = () => {
      if (!containerRef.current || !textRef.current) return;

      // Calculate widths
      const containerWidth = containerRef.current.offsetWidth;
      const textWidth = (textRef.current.children[0] as HTMLElement)
        .offsetWidth;

      const diff =
        textWidth > containerWidth ? -(textWidth - containerWidth) : 0;

      // Update the CSS variable dynamically
      if (textWidth > containerWidth) {
        textRef.current.style.setProperty("--trans-x", `${diff}px`);
      } else {
        textRef.current.style.setProperty("--trans-x", `0px`);
      }
    };
    // Initial calculation
    updateWidths();

    // Attach event listener for window resize
    window.addEventListener("resize", updateWidths);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  return (
    <div className="flex w-full overflow-hidden" ref={containerRef}>
      <div
        className={twMerge(
          "animate-rotatingEclipse relative flex whitespace-nowrap",
          className
        )}
        style={
          {
            "--trans-x": "0px",
            transform: `translateX(var(--trans-x))`,
          } as CSSProperties
        }
        ref={textRef}
      >
        {children}
      </div>
    </div>
  );
};
