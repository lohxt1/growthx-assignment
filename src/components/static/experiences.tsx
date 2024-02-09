import { RoundedBlockCardStatic, RoundedCard } from "../shared/cards";
import { ImageStatic } from "../shared/imagePicker";
import { ExperiencesData, useFormContext } from "../../contexts/form";
import FreeTextInputStatic from "../shared/freeTextStatic";

const ExperienceStatic = ({
  toggleEditMode,
}: {
  toggleEditMode?: (v: boolean) => void;
}) => {
  const { data, deleteSection } = useFormContext();

  let experiencesData = data?.experiences as ExperiencesData;
  let experiencesItems = experiencesData?.items || [];

  return (
    <div className="w-full h-full flex flex-col justify-start gap-y-24 grid grid-cols-3">
      <div className="col-span-1"></div>
      <RoundedBlockCardStatic
        id="experiences"
        toggleEditMode={toggleEditMode}
        label={"Experience"}
        deleteSection={deleteSection}
      >
        <FreeTextInputStatic value={experiencesData?.subtext} />
        <div className="flex flex-row gap-8 col-span-2 w-full grid grid-cols-1">
          {experiencesItems.map((item, idx) => (
            <Experience id={idx} {...item} />
          ))}
        </div>
      </RoundedBlockCardStatic>
    </div>
  );
};

export default ExperienceStatic;

const Experience = ({
  id,
  image,
  title,
  description,
  location,
  timeline,
  designation,
}: {
  id: number;
  image: string | null;
  title: string;
  description: string | null;
  location: string;
  timeline: string;
  designation: string;
}) => {
  return (
    <RoundedCard key={`experience.${id}`}>
      <div className="flex flex-row gap-8 items-center">
        <ImageStatic
          className="w-[40px] h-[40px]"
          id={`experience.${id}.image`}
          value={image}
        />
        <div className="flex flex-row gap-2 items-center">
          <div className="font-bold text-md">{title}</div>
          <div className="text-sm">{designation}</div>
        </div>
        <div className="flex flex-row gap-2 opacity-50 text-xs leading-6">
          <div>{location}</div>*<div>{timeline}</div>
        </div>
      </div>
      <FreeTextInputStatic value={description} className="text-sm leading-6" />
    </RoundedCard>
  );
};
