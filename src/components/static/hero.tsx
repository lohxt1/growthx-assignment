import { useFormContext } from "../../contexts/form";
import { ImagePicker, ImagePickerBig } from "../shared/imagePicker";
import FreeTextInputStatic from "../shared/freeTextStatic";
import { Edit, Trash } from "lucide-react";

const HeroEditor = ({
  toggleEditMode,
}: {
  toggleEditMode?: (v: boolean) => void;
}) => {
  const { data, deleteSection } = useFormContext();

  const {
    hero: { siteImage, siteTitle, image, name, email, title, subtitle } = {},
  } = data;

  return (
    <div className="flex flex-col w-full">
      {toggleEditMode && (
        <div className="flex flex-row gap-x-4 w-full justify-end text-sm h-[30px]">
          <button
            className="py-1 px-2 bg-sh-one rounded-lg text-re-one"
            onClick={() => {
              deleteSection("hero");
            }}
          >
            <Trash width={15} />
          </button>
          <button
            className="py-1 px-2 bg-sh-one rounded-lg text-bl-one"
            onClick={() => {
              toggleEditMode(true);
            }}
          >
            <Edit width={15} />
          </button>
        </div>
      )}
      <div className="w-full h-full flex flex-col justify-start gap-y-24">
        {/* site title */}
        <div className="flex flex-row gap-x-4 items-center justify-center h-fit w-fit">
          <ImagePicker id={`siteImage`} value={siteImage} />
          <div>{siteTitle}</div>
        </div>
        <div className="flex flex-row grid grid-cols-3 gap-x-24">
          <div className="col-span-1 flex flex-col gap-y-4">
            <ImagePickerBig id={`image`} value={image} />
            <div>{name}</div>
            <div>{email}</div>
          </div>
          <div className="flex flex-col w-full gap-y-4 col-span-2 justify-start">
            <FreeTextInputStatic
              value={title}
              className="text-8xl min-h-[200px]"
            />
            <FreeTextInputStatic value={subtitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;
