import { ProjectsData, useFormContext } from "../../contexts/form";
import { RoundedBlockCardStatic, RoundedCard } from "../shared/cards";
import FreeTextInputStatic from "../shared/freeTextStatic";
import { ImageStatic } from "../shared/imagePicker";

const ProjectsStatic = ({
  toggleEditMode,
}: {
  toggleEditMode?: (v: boolean) => void;
}) => {
  const { data, deleteSection } = useFormContext();

  let projectsData = data?.projects as ProjectsData;
  let projectItems = projectsData?.items || [];

  return (
    <div className="w-full h-full flex flex-col justify-start gap-y-24 grid grid-cols-3">
      <div className="col-span-1"></div>
      <RoundedBlockCardStatic
        id="projects"
        label={"Projects"}
        toggleEditMode={toggleEditMode}
        deleteSection={deleteSection}
      >
        <FreeTextInputStatic value={projectsData?.subtext} />
        <div className="flex flex-row gap-8 col-span-2 w-full grid grid-cols-2">
          {projectItems.map((item, idx) => (
            <Project id={idx} {...item} />
          ))}
        </div>
      </RoundedBlockCardStatic>
    </div>
  );
};

export default ProjectsStatic;

const Project = ({
  id,
  image,
  title,
  link,
  description,
}: {
  id: number;
  image?: string | null;
  title?: string;
  link?: string;
  description?: string | null;
}) => {
  let descriptionData = description
    ? JSON.stringify(JSON.parse(description))
    : null;

  return (
    <RoundedCard key={`project.${id}`}>
      <ImageStatic
        className="w-[40px] h-[40px]"
        id={`project.${id}.image`}
        value={image}
      />
      <div>{title}</div>
      {link && (
        <a
          href={link.includes("http") ? link : `https://${link}`}
          target="_blank"
          className="flex flex-row items-center"
        >
          <div className="opacity-50 text-bl-one">{link}</div>&nbsp;
          <div className="text-bl-one text-xs">🔗</div>
        </a>
      )}
      <FreeTextInputStatic
        value={descriptionData}
        className="text-sm leading-6"
      />
    </RoundedCard>
  );
};
