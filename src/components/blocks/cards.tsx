import { useState } from "react";
import CardsEditor from "../editors/cards";
import CardsStatic from "../static/cards";

const CardsBlock = ({ editMode = true }: { editMode?: boolean }) => {
  const [isEditMode, toggleEditMode] = useState(editMode);

  return (
    <div className="w-full h-full flex flex-col">
      {isEditMode ? (
        <CardsEditor toggleEditMode={toggleEditMode} />
      ) : (
        <CardsStatic toggleEditMode={toggleEditMode} />
      )}
    </div>
  );
};

export default CardsBlock;
