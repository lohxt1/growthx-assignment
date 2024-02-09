import { useState } from "react";
import HeroEditor from "../editors/hero";
import HeroStatic from "../static/hero";

const HeroBlock = ({ editMode = false }: { editMode?: boolean }) => {
  const [isEditMode, toggleEditMode] = useState(editMode);

  return (
    <div className="w-full h-full flex flex-col">
      {isEditMode ? (
        <HeroEditor toggleEditMode={toggleEditMode} />
      ) : (
        <HeroStatic toggleEditMode={toggleEditMode} />
      )}
    </div>
  );
};

export default HeroBlock;
