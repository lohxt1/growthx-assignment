import { AboutData, useFormContext } from "../../contexts/form";
import { RoundedBlockCardStatic } from "../shared/cards";
import FreeTextInputStatic from "../shared/freeTextStatic";

const AboutStatic = ({
  toggleEditMode,
}: {
  toggleEditMode?: (v: boolean) => void;
}) => {
  const { data, deleteSection } = useFormContext();

  let aboutData = data?.about as AboutData;
  let bodyData = aboutData?.body
    ? JSON.stringify(JSON.parse(aboutData?.body))
    : null;

  return (
    <div
      className="w-full h-full flex flex-col justify-start gap-y-24 grid grid-cols-3"
      id="about"
    >
      <div className="col-span-1 h-fit"></div>
      <RoundedBlockCardStatic
        id="about"
        label={"About Me"}
        toggleEditMode={toggleEditMode}
        deleteSection={deleteSection}
      >
        <FreeTextInputStatic value={bodyData} />
      </RoundedBlockCardStatic>
    </div>
  );
};

export default AboutStatic;
