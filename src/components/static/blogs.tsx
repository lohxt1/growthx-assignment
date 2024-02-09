import { RoundedCard, RoundedBlockCardStatic } from "../shared/cards";
import { ImageStatic } from "../shared/imagePicker";
import { BlogsData, useFormContext } from "../../contexts/form";
import FreeTextInputStatic from "../shared/freeTextStatic";

const BlogsStatic = ({
  toggleEditMode,
}: {
  toggleEditMode?: (v: boolean) => void;
}) => {
  const { data, deleteSection } = useFormContext();

  let blogsData = data?.blogs as BlogsData;
  let blogsItems = blogsData?.items || [];

  return (
    <div className="w-full h-full flex flex-col justify-start gap-y-24 grid grid-cols-3">
      <div className="col-span-1"></div>
      <RoundedBlockCardStatic
        label={"Blogs"}
        toggleEditMode={toggleEditMode}
        id="blogs"
        deleteSection={deleteSection}
      >
        <FreeTextInputStatic value={blogsData?.subtext} />
        <div className="flex flex-row gap-8 col-span-2 w-full grid grid-cols-2">
          {blogsItems?.map((item, idx) => (
            <Blog id={idx} {...item} />
          ))}
        </div>
      </RoundedBlockCardStatic>
    </div>
  );
};

export default BlogsStatic;

const Blog = ({
  id,
  image,
  title,
  description,
}: {
  id: number;
  image: string | null;
  title: string;
  description: string;
}) => {
  return (
    <RoundedCard key={`blog.${id}`}>
      <ImageStatic
        className="w-[40px] h-[40px]"
        id={`blog.${id}.image`}
        value={image}
      />
      <div>{title}</div>
      <a
        href={
          description.includes("http") ? description : `https://${description}`
        }
        target="_blank"
        className="flex flex-row items-center"
      >
        <div className="opacity-50 text-bl-one">{description}</div>&nbsp;
        <div className="text-bl-one text-xs">🔗</div>
      </a>
    </RoundedCard>
  );
};
