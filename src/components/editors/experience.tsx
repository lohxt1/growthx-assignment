import { ElementRef, FormEvent, MouseEventHandler, useRef } from "react";
import {
  RoundedBlockCard,
  RoundedCard,
  RoundedCardButton,
} from "../shared/cards";
import { ImagePicker } from "../shared/imagePicker";
import { Input } from "../shared/inputs";
import { transformFormData } from "../../utils/form";
import { ExperiencesData, useFormContext } from "../../contexts/form";
import FreeTextInput from "../shared/freeText";
import { Trash } from "lucide-react";

const ExperienceEditor = ({
  toggleEditMode,
}: {
  toggleEditMode: (v: boolean) => void;
}) => {
  const { setData, data, addNewItem, removeItem } = useFormContext();

  const formRef = useRef<ElementRef<"form">>(null);

  let experiencesData = data?.experiences as ExperiencesData;
  let experiencesItems = experiencesData?.items || [];

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    let itemIdentifier = "experience";
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
        <div className="col-span-1"></div>
        <RoundedBlockCard
          label={"Experience"}
          toggleEditMode={toggleEditMode}
          id="experiences"
        >
          <FreeTextInput
            id={"subtext"}
            value={experiencesData?.subtext}
            placeholder="Add subtext here"
          />
          <div className="flex flex-row gap-8 col-span-2 w-full grid grid-cols-1">
            {experiencesItems.map((item, idx) => (
              <Experience
                key={`experience-${item?.title}`}
                id={idx}
                {...item}
                removeItem={() => {
                  removeItem("experiences", idx);
                }}
              />
            ))}
            <NewExperienceButton
              onClick={() => {
                addNewItem("experiences");
              }}
            />
          </div>
        </RoundedBlockCard>
      </div>
    </form>
  );
};

export default ExperienceEditor;

const Experience = ({
  id,
  image,
  title,
  description,
  location,
  timeline,
  designation,
  removeItem,
}: {
  id: number;
  image: string | null;
  title: string;
  description: string | null;
  location: string;
  timeline: string;
  designation: string;
  removeItem: () => void;
}) => {
  return (
    <RoundedCard key={`experience.${id}`}>
      <div className="absolute right-[20px] top-[15px] cursor-pointer">
        <button
          className="py-1 px-2 bg-sh-one rounded-lg text-re-one"
          onClick={removeItem}
        >
          <Trash width={15} />
        </button>
      </div>
      <div className="flex flex-row gap-4">
        <ImagePicker
          className="w-[40px] h-[40px]"
          id={`experience.${id}.image`}
          value={image}
        />
        <div className="flex flex-col gap-2">
          <Input
            value={title}
            name={`experience.${id}.title`}
            placeholder="Enter Company Title"
          />
          <Input
            value={designation}
            name={`experience.${id}.designation`}
            placeholder="Enter Desgination"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <Input
          value={location}
          name={`experience.${id}.location`}
          placeholder="+ Add Location"
        />
        <Input
          value={timeline}
          name={`experience.${id}.timeline`}
          placeholder="+ Add Timeline"
        />
      </div>
      <FreeTextInput
        id={`project.${id}.description`}
        value={description}
        className="text-sm leading-6"
        placeholder="Add Description"
      />
    </RoundedCard>
  );
};

const NewExperienceButton = ({ onClick }: { onClick: MouseEventHandler }) => {
  return (
    <RoundedCardButton>
      <div
        className="flex flex-row justify-center items-center h-full w-full gap-4"
        onClick={onClick}
      >
        <div>+</div>
        <div>Add Next</div>
      </div>
    </RoundedCardButton>
  );
};
