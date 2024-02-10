import { useFormContext } from "./contexts/form";
import Nav from "./components/shared/nav";
import BlogsStatic from "./components/static/blogs";
import ContactsStatic from "./components/static/contact";
import ExperienceStatic from "./components/static/experiences";
import ProjectsStatic from "./components/static/projects";
import CardsStatic from "./components/static/cards";
import AboutStatic from "./components/static/about";
import HeroEditor from "./components/static/hero";

function Preview() {
  return (
    <div
      className={`light flex min-h-screen h-fit w-[calc(100%)] flex-col relative bg-bg-one text-tx-one justify-center items-center px-24`}
    >
      <Nav />
      <div className="flex min-h-screen h-fit w-[calc(100%)] flex-col relative max-w-[1400px] gap-y-24 mt-[100px]">
        <Blocks />
      </div>
    </div>
  );
}

export default Preview;

let sectionComponentMap = {
  hero: <HeroEditor />,
  about: <AboutStatic />,
  cards: <CardsStatic />,
  projects: <ProjectsStatic />,
  experiences: <ExperienceStatic />,
  blogs: <BlogsStatic />,
  contacts: <ContactsStatic />,
};

const Blocks = () => {
  const { sections } = useFormContext();
  return <>{sections.map((section) => sectionComponentMap[section])}</>;
};
