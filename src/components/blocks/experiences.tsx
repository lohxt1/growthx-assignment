import { useState } from "react";
import ExperienceEditor from "../editors/experience";
import ExperiencesStatic from "../static/experiences";

const ExperiencesBlock = ({ editMode = false }: { editMode?: boolean }) => {
  const [isEditMode, toggleEditMode] = useState(editMode);

  return (
    <div className="w-full h-full flex flex-col">
      {isEditMode ? (
        <ExperienceEditor toggleEditMode={toggleEditMode} />
      ) : (
        <ExperiencesStatic toggleEditMode={toggleEditMode} />
      )}
    </div>
  );
};

export default ExperiencesBlock;
