import { useState } from "react";
import ContactsEditor from "../editors/contact";
import ContactsStatic from "../static/contact";

const ContactsBlock = ({ editMode = true }: { editMode?: boolean }) => {
  const [isEditMode, toggleEditMode] = useState(editMode);

  return (
    <div className="w-full h-full flex flex-col">
      {isEditMode ? (
        <ContactsEditor toggleEditMode={toggleEditMode} />
      ) : (
        <ContactsStatic toggleEditMode={toggleEditMode} />
      )}
    </div>
  );
};

export default ContactsBlock;
