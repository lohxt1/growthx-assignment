import { useFormContext } from "../../contexts/form";
import { ImageStatic } from "../shared/imagePicker";
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
          <ImageStatic
            className="w-[40px] h-[40px]"
            id={`siteImage`}
            value={siteImage}
          />
          <div>{siteTitle}</div>
        </div>
        <div className="flex flex-row grid grid-cols-3 gap-x-24">
          <div className="col-span-1 flex flex-col gap-y-8">
            <ImageStatic
              className="w-full h-[400px] p-4"
              id={`image`}
              value={image}
            />
            <div className="flex flex-col gap-y-2">
              <div className="font-bold text-md">{name}</div>
              <div>{email}</div>
            </div>
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
