import { ElementRef, useEffect, useRef, useState } from "react";
import { SectionType, _SectionType, useFormContext } from "../../contexts/form";

let sectionLabelMap = {
  hero: "👤 Add Hero",
  about: "📌 Add About you",
  projects: "⚒️ Add Projects",
  cards: "💡 Add Skillsets",
  experiences: "🌐 Add Experiences",
  blogs: "📰 Add Blogs",
  contacts: "🔗 Add CTA",
};

const allSections: SectionType[] = [
  "hero",
  "projects",
  "about",
  "cards",
  "blogs",
  "experiences",
  "contacts",
];

const AddSection = () => {
  const { addSection, sections } = useFormContext();
  const [showMenu, toggleMenu] = useState(false);

  const unselectedSections = allSections.filter(
    (section) => !sections.includes(section)
  );

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
    <div className={`flex flex-col relative`} ref={ref}>
      <div
        className={`flex flex-row justify-center items-center h-fit w-full gap-2 bg-bg-one p-2 border border-sh-one ${
          unselectedSections.length <= 0
            ? "text-tx-one/30 cursor-not-allowed"
            : "cursor-pointer"
        }`}
        onClick={() => {
          toggleMenu((_) => !_);
        }}
      >
        + Add Section
        {/* <Blocks /> */}
      </div>
      {showMenu && unselectedSections.length > 0 && (
        <div className="w-[300px] absolute bottom-[20px] left-[20px] border border-sh-two bg-bg-zero gap-2 p-8 m-4 flex flex-col z-10 justify-start rounded-2xl shadow-sm shadow">
          {unselectedSections.map((section) => (
            <div
              onClick={(e) => {
                e.preventDefault();
                addSection(section);
                toggleMenu(false);
              }}
              className="cursor-pointer flex flex-row items-center gap-4 relative w-full hover:bg-bg-two p-2 rounded-lg text-sm"
            >
              <div className="bg-bg-one rounded-full items-center justify-center flex w-[20px] h-[20px]">
                +
              </div>
              {sectionLabelMap[section]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddSection;
