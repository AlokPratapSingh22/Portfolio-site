import { useEffect, useRef } from "react";
type Props = {};

const CursorComp = (props: Props) => {
  const mainCursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e: any) => {
      const { clientX, clientY } = e;

      const mouseX = clientX;
      const mouseY = clientY;

      if (mainCursor && mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${
          mouseX - mainCursor.current.clientWidth / 2
        }px, ${mouseY - mainCursor.current.clientHeight / 2.5}px, 0)`;
      }
    });

    const cursor = document.getElementById("cursor");
    if (cursor) {
      document.addEventListener("mouseleave", (event) => {
        cursor.style.display = "none";
      });
      document.addEventListener("mouseenter", (event) => {
        cursor.style.display = "block";
      });
    }
  }, []);

  return (
    <div>
      <div
        id="cursor"
        className="cursor cursor-bg no-scrollbar"
        ref={mainCursor}
      ></div>
    </div>
  );
};

export default CursorComp;
