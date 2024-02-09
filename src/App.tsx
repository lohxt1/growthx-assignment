import { useEffect } from "react";
import { FormContextProvider, useFormContext } from "./contexts/form";
import HeroBlock from "./components/blocks/hero";
import AboutBlock from "./components/blocks/about";
import CardsBlock from "./components/blocks/cards";
import ProjectsBlock from "./components/blocks/projects";
import ExperiencesBlock from "./components/blocks/experiences";
import BlogsBlock from "./components/blocks/blogs";
import Toolbar from "./components/shared/toolbar";
import ContactsBlock from "./components/blocks/contact";
import Nav from "./components/shared/nav";

function App() {
  useEffect(() => {});

  return (
    <div
      className={`light flex min-h-screen h-fit w-[calc(100%)] flex-col relative bg-bg-one text-tx-one justify-center items-center px-24`}
    >
      <FormContextProvider>
        <Nav />
        <div className="flex min-h-screen h-fit w-[calc(100%)] flex-col relative max-w-[1400px] gap-y-24 mt-[100px]">
          <Blocks />
        </div>
        <Toolbar />
      </FormContextProvider>
    </div>
  );
}

export default App;

let sectionComponentMap = {
  hero: <HeroBlock />,
  about: <AboutBlock />,
  cards: <CardsBlock />,
  projects: <ProjectsBlock />,
  experiences: <ExperiencesBlock />,
  blogs: <BlogsBlock />,
  contacts: <ContactsBlock />,
};

const Blocks = () => {
  const { sections } = useFormContext();
  return (
    <>
      {sections.map((section) => sectionComponentMap[section])}
      {sections.length >= 7 && (
        <div className="flex justify-center items-center mb-12">
          All sections added! Looks good.
        </div>
      )}
      {/* <AddSection /> */}
    </>
  );
};

// Hero section
// About Me section
// Skillsets
// projects
// experience
// CTA

// image upload small icon
// add link text button
// rich text editor
// input element

// const d = {
//   hero: {
//     title: "",
//     description: "",
//     image: "",
//   },
//   about: {
//     body: ''
//   }
// };

// const ed = {

// }
