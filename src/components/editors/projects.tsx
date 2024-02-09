import { ElementRef, FormEvent, MouseEventHandler, useRef } from "react";
import {
  RoundedBlockCard,
  RoundedCard,
  RoundedCardButton,
} from "../shared/cards";
import { ImagePicker } from "../shared/imagePicker";
import { ProjectsData, useFormContext } from "../../contexts/form";
import { Input, Link } from "../shared/inputs";
import { transformFormData } from "../../utils/form";
import FreeTextInput from "../shared/freeText";
import { Trash } from "lucide-react";

const ProjectsEditor = ({
  toggleEditMode,
}: {
  toggleEditMode: (v: boolean) => void;
}) => {
  const { setData, data, addNewItem, removeItem } = useFormContext();

  const formRef = useRef<ElementRef<"form">>(null);

  let projectsData = data?.projects as ProjectsData;
  let projectItems = projectsData?.items || [];

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    let itemIdentifier = "project";
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    let subtext = formData.get("subtext");
    let transformedData = transformFormData(formData, itemIdentifier);
    setData({
      ...(data || {}),
      [`${itemIdentifier}s`]: {
        subtext,
        ...transformedData,
      },
    });
    toggleEditMode(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="w-full h-full flex flex-col justify-start gap-y-24 grid grid-cols-3">
        <div className="col-span-1 h-fit"></div>
        <RoundedBlockCard
          label={"Projects"}
          toggleEditMode={toggleEditMode}
          id="projects"
        >
          <FreeTextInput
            id={"subtext"}
            value={projectsData?.subtext}
            placeholder="Add subtext here"
          />
          <div className="flex flex-row gap-8 col-span-2 w-full grid grid-cols-2">
            {projectItems.map((item, idx) => (
              <Project
                key={`project-${item?.title}`}
                id={idx}
                {...item}
                removeItem={() => {
                  removeItem("projects", idx);
                }}
              />
            ))}
            <NewProjectButton
              onClick={() => {
                addNewItem("projects");
              }}
            />
          </div>
        </RoundedBlockCard>
      </div>
    </form>
  );
};

export default ProjectsEditor;

const Project = ({
  id,
  image,
  title,
  link,
  description,
  removeItem,
}: {
  id: number;
  image?: string | null;
  title?: string;
  link?: string;
  description?: string | null;
  removeItem: () => void;
}) => {
  return (
    <RoundedCard>
      <div className="absolute right-[20px] top-[15px] cursor-pointer">
        <button
          className="py-1 px-2 bg-sh-one rounded-lg text-re-one"
          onClick={removeItem}
        >
          <Trash width={15} />
        </button>
      </div>
      <ImagePicker
        className="w-[40px] h-[40px]"
        id={`project.${id}.image`}
        value={image}
      />
      <Input
        value={title}
        name={`project.${id}.title`}
        placeholder="Enter Project Title"
      />
      <Link
        name={`project.${id}.link`}
        value={link}
        className="border-none text-tx-two max-h-[32px] bg-transparent"
      />
      <FreeTextInput
        id={`project.${id}.description`}
        value={description}
        className="text-sm leading-6"
        placeholder="Add Description"
      />
    </RoundedCard>
  );
};

const NewProjectButton = ({ onClick }: { onClick: MouseEventHandler }) => {
  return (
    <RoundedCardButton>
      <div
        className="flex flex-col justify-center items-center h-full w-full"
        onClick={onClick}
      >
        <div>+</div>
        <div>Add New Project</div>
      </div>
    </RoundedCardButton>
  );
};
