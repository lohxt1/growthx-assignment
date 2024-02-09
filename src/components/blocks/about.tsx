import { useState } from "react";
import AboutEditor from "../editors/about";
import AboutStatic from "../static/about";

const AboutBlock = ({ editMode = false }: { editMode?: boolean }) => {
  const [isEditMode, toggleEditMode] = useState(editMode);

  return (
    <div className="w-full h-full flex flex-col">
      {isEditMode ? (
        <AboutEditor toggleEditMode={toggleEditMode} />
      ) : (
        <AboutStatic toggleEditMode={toggleEditMode} />
      )}
    </div>
  );
};

export default AboutBlock;
