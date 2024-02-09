import { useState } from "react";
import BlogsEditor from "../editors/blogs";
import BlogsStatic from "../static/blogs";

const BlogsBlock = ({ editMode = false }: { editMode?: boolean }) => {
  const [isEditMode, toggleEditMode] = useState(editMode);

  return (
    <div className="w-full h-full flex flex-col">
      {isEditMode ? (
        <BlogsEditor toggleEditMode={toggleEditMode} />
      ) : (
        <BlogsStatic toggleEditMode={toggleEditMode} />
      )}
    </div>
  );
};

export default BlogsBlock;
