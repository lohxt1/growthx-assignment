import { ElementRef, FormEvent, useRef } from "react";
import { RoundedBlockCard } from "../shared/cards";
import { ImagePicker } from "../shared/imagePicker";
import { Link } from "../shared/inputs";
import { ContactsData, useFormContext } from "../../contexts/form";
import { transformFormData } from "../../utils/form";
import FreeTextInput from "../shared/freeText";

const ContactsEditor = ({
  toggleEditMode,
}: {
  toggleEditMode: (v: boolean) => void;
}) => {
  const { setData, data } = useFormContext();

  const formRef = useRef<ElementRef<"form">>(null);

  let contactsData = data?.contacts as ContactsData;
  let image = contactsData?.image;

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    let itemIdentifier = "contact";
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    let title = formData.get("title");
    let subtext = formData.get("subtext");
    let image = formData.get("image");
    let link = formData.get("link");
    let transformedData = transformFormData(formData, itemIdentifier);
    console.log("contacts submit", transformedData);
    setData({
      ...(data || {}),
      [`${itemIdentifier}s`]: {
        title,
        subtext,
        image,
        link,
      },
    });
    toggleEditMode(false);
  };

  console.log("contacts editor", contactsData);

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="w-full h-full flex flex-col justify-start gap-y-24 grid grid-cols-3">
        <div className="col-span-1"></div>
        <RoundedBlockCard
          label=""
          toggleEditMode={toggleEditMode}
          id="contacts"
        >
          <FreeTextInput
            id={"title"}
            value={contactsData?.title}
            placeholder="Enter title here"
            className="text-4xl font-semibold"
          />
          <FreeTextInput
            id={"subtext"}
            value={contactsData?.subtext}
            placeholder="Add subtext here"
            className="text-lg font-normal"
          />
          <div className="flex flex-row gap-4 col-span-2 w-full">
            <ImagePicker id={`image`} value={image} />
            <Link name={`link`} value={contactsData?.link} />
          </div>
        </RoundedBlockCard>
      </div>
    </form>
  );
};

export default ContactsEditor;
