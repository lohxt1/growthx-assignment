import { useState } from "react";
import ProjectsEditor from "../editors/projects";
import ProjectsStatic from "../static/projects";

const ProjectsBlock = ({ editMode = false }: { editMode?: boolean }) => {
  const [isEditMode, toggleEditMode] = useState(editMode);

  return (
    <div className="w-full h-full flex flex-col">
      {isEditMode ? (
        <ProjectsEditor toggleEditMode={toggleEditMode} />
      ) : (
        <ProjectsStatic toggleEditMode={toggleEditMode} />
      )}
    </div>
  );
};

export default ProjectsBlock;
