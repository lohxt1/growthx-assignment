import { createContext, useContext, useState } from "react";
import { initialData, itemInitMap } from "./data";
import useLocalStorage from "../hooks/useLocalStorage";

export type HeroData = {
  siteTitle: string;
  siteImage?: string;
  name: string;
  image?: string;
  email: string;
  title: string;
  subtitle: string;
};

type ProjectItem = {
  image?: string | null;
  title: string;
  link: string;
  description: string | null;
};

export type ProjectsData = {
  subtext: string;
  items: ProjectItem[];
};

type CardItem = {
  title: string;
  description: string;
  body: string;
};

export type CardsData = {
  items: CardItem[];
};

type ExperienceItem = {
  title: string;
  image: string | null;
  designation: string;
  location: string;
  timeline: string;
  description: string | null;
};

export type ExperiencesData = {
  subtext: string;
  items: ExperienceItem[];
};

export type ContactsData = {
  title: string;
  subtext: string;
  image: string | null;
  link: string;
};

type BlogItem = {
  image: string | null;
  title: string;
  description: string;
};

export type BlogsData = {
  subtext: string;
  items: BlogItem[];
};

export type AboutData = {
  body: string;
};

export type DataType = {
  hero?: HeroData;
  projects?: ProjectsData;
  about?: AboutData;
  cards?: CardsData;
  blogs?: BlogsData;
  experiences?: ExperiencesData;
  contacts?: ContactsData;
};

export type SectionType =
  | "hero"
  | "projects"
  | "about"
  | "cards"
  | "blogs"
  | "experiences"
  | "contacts";

type SectionsWithItems = "projects" | "cards" | "blogs" | "experiences";
type SectionsDataWithItems =
  | ProjectsData
  | CardsData
  | BlogsData
  | ExperiencesData;

export type _SectionType =
  "hero | projects | about | cards | blogs | experiences | contacts";

type SectionsType = SectionType[];

type FormContextStateType = {
  sections: SectionsType;
  setSections: (v: SectionsType) => void;
  data: DataType;
  setData: (v: DataType) => void;
  addSection: (v: SectionType) => void;
  addNewItem: (v: SectionsWithItems) => void;
  removeItem: (v: SectionsWithItems, u: number) => void;
  deleteSection: (v: SectionType) => void;
};

const sectionWithItems: SectionsWithItems[] = [
  "projects",
  "cards",
  "blogs",
  "experiences",
];

const FormContext = createContext<FormContextStateType | null>(null);

const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sections, setSections] = useState<SectionsType>([
    "hero",
    "about",
    "cards",
    "projects",
    "blogs",
    "experiences",
    "contacts",
  ]);
  const [data, setData] = useLocalStorage<string, DataType>(
    "datav3",
    initialData
  );

  const addSection = (section: SectionType) => {
    setSections([...sections, section]);
    // @ts-expect-error
    if (sectionWithItems.includes(section)) {
      // @ts-expect-error
      addNewItem(section);
    }
  };

  const addNewItem = (sectionId: SectionsWithItems) => {
    let sectionData = (data[sectionId] || {}) as SectionsDataWithItems;
    let sectionItems = sectionData["items"] || [];
    let item = itemInitMap[sectionId];
    setData({
      ...(data || {}),
      [sectionId]: {
        ...(sectionData || {}),
        items: [
          ...(sectionItems || []),
          {
            ...item,
          },
        ],
      },
    });
  };

  const removeItem = (sectionId: SectionsWithItems, idx: number) => {
    let sectionData = data[sectionId] as SectionsDataWithItems;
    let sectionItems = sectionData["items"] || [];
    sectionItems.splice(idx, 1);
    setData({
      ...(data || {}),
      [sectionId]: {
        ...(sectionData || {}),
        items: [...(sectionItems || [])],
      },
    });
  };

  const deleteSection = (sectionId: SectionType) => {
    let _data = { ...data };
    delete _data[sectionId];
    setData(_data);
    setSections([...sections.filter((section) => section !== sectionId)]);
  };

  const value: FormContextStateType = {
    sections,
    setSections,
    data,
    setData,
    addSection,
    addNewItem,
    removeItem,
    deleteSection,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const useFormContext = () => {
  const context = useContext(FormContext);
  if (context == null) {
    throw new Error("use inside provider");
  }
  return context;
};

export { FormContextProvider, useFormContext };
