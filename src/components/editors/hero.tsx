import { ElementRef, FormEvent, useRef } from "react";
import { HeroData, useFormContext } from "../../contexts/form";
import { ImagePicker } from "../shared/imagePicker";
import { Input } from "../shared/inputs";
import FreeTextInput from "../shared/freeText";
import { transformImageFileToBlobUrls } from "../../utils/form";

const HeroEditor = ({
  toggleEditMode,
}: {
  toggleEditMode: (v: boolean) => void;
}) => {
  const { setData, data } = useFormContext();

  const {
    hero: { siteImage, siteTitle, image, name, email, title, subtitle } = {},
  } = data;

  const formRef = useRef<ElementRef<"form">>(null);

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    let keys = [...formData.keys()];
    let values = [...formData.values()];
    values = transformImageFileToBlobUrls(values);
    let _data: Record<string, any> = {};
    keys.forEach((key, idx) => {
      _data[key] = values[idx];
    });
    setData({
      ...data,
      hero: {
        ..._data,
      } as HeroData,
    });
    toggleEditMode(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="flex flex-row gap-x-4 w-full justify-end text-sm h-[30px]">
        <button
          className="text-tx-two py-1 px-2 rounded-xl"
          onClick={() => {
            toggleEditMode(false);
          }}
        >
          Cancel
        </button>
        <button
          className="text-white border py-1 px-4 rounded-3xl bg-bl-two items-center"
          type="submit"
        >
          Save
        </button>
      </div>
      <div className="w-full h-full flex flex-col justify-start gap-y-24">
        {/* site title */}
        <div className="flex flex-row gap-x-4 items-center justify-center h-fit w-fit">
          <ImagePicker
            className="w-[40px] h-[40px]"
            id={`siteImage`}
            value={siteImage}
          />
          <Input
            name="siteTitle"
            placeholder="Enter Site Title"
            value={siteTitle}
          />
        </div>
        <div className="flex flex-row grid grid-cols-3 gap-x-24">
          <div className="col-span-1 flex flex-col gap-y-8">
            <ImagePicker
              className="w-full h-[400px] p-4"
              id={`image`}
              value={image}
            />
            <div className="flex flex-col gap-y-2">
              <Input
                name="name"
                placeholder="Your name here"
                value={name}
                className="font-bold text-md"
              />
              <Input name="email" placeholder="Enter email" value={email} />
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-4 col-span-2 justify-start">
            <FreeTextInput
              id={`title`}
              value={title}
              className="text-8xl min-h-[200px]"
              placeholder="Click to add title"
            />
            <FreeTextInput
              id={`subtitle`}
              value={subtitle}
              placeholder="Click to add subtitle"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default HeroEditor;
