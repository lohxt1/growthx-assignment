import { RoundedBlockCardStatic } from "../shared/cards";
import { ImageStatic } from "../shared/imagePicker";
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
      <div className="col-span-1 h-fit"></div>
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
          <ImageStatic
            className="w-[40px] h-[40px]"
            id={`image`}
            value={image}
          />
          <a
            href={
              contactsData?.link.includes("http")
                ? contactsData?.link
                : `https://${contactsData?.link}`
            }
            target="_blank"
            className="flex flex-row items-center text-lg font-normal"
          >
            <div className="opacity-50 text-bl-one">{contactsData?.link}</div>
            &nbsp;
            <div className="text-bl-one text-xs">🔗</div>
          </a>
        </div>
      </RoundedBlockCardStatic>
    </div>
  );
};

export default ContactsStatic;
