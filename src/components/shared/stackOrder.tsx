import { ElementRef, MouseEvent, useEffect, useRef, useState } from "react";
import { useFormContext } from "../../contexts/form";
import { ArrowDown, ArrowUp, SquareStack } from "lucide-react";

const StackOrder = () => {
  const { sections, setSections } = useFormContext();

  const [showMenu, toggleMenu] = useState(false);

  const handleUp = (idx: number) => (e: MouseEvent<EventTarget>) => {
    e.preventDefault();
    if (idx == 0) return;
    let _sections = [
      ...sections.slice(0, idx - 1),
      sections.slice(idx)[0],
      sections.slice(idx - 1)[0],
      ...sections.slice(idx + 1),
    ];
    setSections(_sections);
  };

  const handleDown = (idx: number) => (e: MouseEvent<EventTarget>) => {
    e.preventDefault();
    if (idx >= sections.length - 1) return;
    let _sections = [
      ...sections.slice(0, idx),
      sections.slice(idx + 1)[0],
      sections.slice(idx)[0],
      ...sections.slice(idx + 2),
    ];
    setSections(_sections);
  };

  const ref = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!ref.current?.contains(e.target)) {
        toggleMenu(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="flex flex-col" ref={ref}>
      <div
        className="flex flex-row items-center border border-sh-one p-2 gap-x-2 cursor-pointer bg-bg-one"
        onClick={() => {
          toggleMenu((_) => !_);
        }}
      >
        <SquareStack className="gap-2 w-[20px] h-[20px] border border-none" />
        Sections Order
      </div>
      {showMenu && (
        <div className="w-[300px] absolute bottom-[20px] left-[20px] border border-sh-two bg-bg-zero gap-2 p-8 m-4 flex flex-col z-10 justify-start rounded-2xl shadow-sm shadow">
          {/* <div className="opacity-50 text-xs pb-4">Stack Order</div> */}
          <div className="flex flex-col gap-2">
            {sections?.map((section, idx) => (
              <div className="flex flex-row justify-between gap-8">
                <label>{section}</label>
                <div className="flex flex-row gap-2">
                  <button
                    onClick={handleUp(idx)}
                    className={`${
                      idx == 0 ? "opacity-20 cursor-not-allowed" : ""
                    }`}
                  >
                    <ArrowUp />
                  </button>
                  <button
                    onClick={handleDown(idx)}
                    className={`${
                      idx >= sections.length - 1
                        ? "opacity-20 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <ArrowDown />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StackOrder;
