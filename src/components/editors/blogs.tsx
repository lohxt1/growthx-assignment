import { ElementRef, FormEvent, MouseEventHandler, useRef } from "react";
import {
  RoundedCardButton,
  RoundedCard,
  RoundedBlockCard,
} from "../shared/cards";
import { ImagePicker } from "../shared/imagePicker";
import { Input, Link } from "../shared/inputs";
import { BlogsData, useFormContext } from "../../contexts/form";
import { transformFormData } from "../../utils/form";
import FreeTextInput from "../shared/freeText";
import { Trash } from "lucide-react";

const BlogsEditor = ({
  toggleEditMode,
}: {
  toggleEditMode: (v: boolean) => void;
}) => {
  const { setData, data, addNewItem, removeItem } = useFormContext();

  const formRef = useRef<ElementRef<"form">>(null);

  let blogsData = data?.blogs as BlogsData;
  let blogsItems = blogsData?.items || [];

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    let itemIdentifier = "blog";
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
        <div className="col-span-1 h-fit"></div>
        <RoundedBlockCard
          label={"Blogs"}
          toggleEditMode={toggleEditMode}
          id="blogs"
        >
          <FreeTextInput
            id={"subtext"}
            value={blogsData?.subtext}
            placeholder="Add subtext here"
          />
          <div className="flex flex-row gap-8 col-span-2 w-full grid grid-cols-2">
            {blogsItems?.map((item, idx) => (
              <Blog
                key={`blog-${item?.title}`}
                id={idx}
                {...item}
                removeItem={() => {
                  removeItem("blogs", idx);
                }}
              />
            ))}
            <NewBlogButton
              onClick={() => {
                addNewItem("blogs");
              }}
            />
          </div>
        </RoundedBlockCard>
      </div>
    </form>
  );
};

export default BlogsEditor;

const Blog = ({
  id,
  image,
  title,
  description,
  removeItem,
}: {
  id: number;
  image: string | null;
  title: string;
  description: string;
  removeItem: () => void;
}) => {
  return (
    <RoundedCard key={`blog.${id}`}>
      <div className="absolute right-[20px] top-[15px] cursor-pointer">
        <button
          className="py-1 px-2 bg-sh-one rounded-lg text-re-one"
          onClick={removeItem}
        >
          <Trash width={15} />
        </button>
      </div>
      <ImagePicker
        className="w-[40px] h-[40px]"
        id={`blog.${id}.image`}
        value={image}
      />
      <Input
        name={`blog.${id}.title`}
        placeholder="Enter title here"
        value={title}
      />
      <Link name={`blog.${id}.description`} value={description} />
    </RoundedCard>
  );
};

const NewBlogButton = ({ onClick }: { onClick: MouseEventHandler }) => {
  return (
    <RoundedCardButton>
      <div
        className="flex flex-col justify-center items-center h-full w-full p-8"
        onClick={onClick}
      >
        <div>+</div>
        <div>Add next</div>
      </div>
    </RoundedCardButton>
  );
};
