import { RoundedBlockCardStatic } from "../shared/cards";
import { ImagePicker } from "../shared/imagePicker";
import { ContactsData, useFormContext } from "../../contexts/form";
import FreeTextInputStatic from "../shared/freeTextStatic";

const ContactsStatic = ({
  toggleEditMode,
}: {
  toggleEditMode?: (v: boolean) => void;
}) => {
  const { data, deleteSection } = useFormContext();

  let contactsData = data?.contacts as ContactsData;
  let image = contactsData?.image;

  return (
    <div className="w-full h-full flex flex-col justify-start gap-y-24 grid grid-cols-3">
      <div className="col-span-1"></div>
      <RoundedBlockCardStatic
        toggleEditMode={toggleEditMode}
        id="contacts"
        deleteSection={deleteSection}
      >
        <FreeTextInputStatic
          value={contactsData?.title}
          className="text-4xl font-semibold"
        />
        <FreeTextInputStatic
          value={contactsData?.subtext}
          className="text-lg font-normal"
        />
        <div className="flex flex-row gap-4 col-span-2 w-full items-center">
          <ImagePicker id={`image`} value={image} />
          <div className="text-lg font-normal">{contactsData?.link}</div>
        </div>
      </RoundedBlockCardStatic>
    </div>
  );
};

export default ContactsStatic;
