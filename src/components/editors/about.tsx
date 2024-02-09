import { ElementRef, FormEvent, useRef } from "react";
import { RoundedBlockCard } from "../shared/cards";
import FreeText from "../shared/freeText";
import { AboutData, useFormContext } from "../../contexts/form";

const AboutEditor = ({
  toggleEditMode,
}: {
  toggleEditMode: (v: boolean) => void;
}) => {
  const { setData, data } = useFormContext();

  const formRef = useRef<ElementRef<"form">>(null);

  let aboutData = data?.about as AboutData;
  let bodyData = aboutData?.body
    ? JSON.stringify(JSON.parse(aboutData?.body))
    : null;

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    let body = (formData.get("about") || "") as string;
    setData({
      ...(data || {}),
      about: {
        body,
      },
    });
    toggleEditMode(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="w-full h-full flex flex-col justify-start gap-y-24 grid grid-cols-3">
        <div className="col-span-1"></div>
        <RoundedBlockCard
          id="about"
          label={"About Me"}
          toggleEditMode={toggleEditMode}
        >
          <FreeText id={`about`} value={bodyData} />
        </RoundedBlockCard>
      </div>
    </form>
  );
};

export default AboutEditor;
