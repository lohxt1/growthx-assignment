import { ElementRef, FormEvent, MouseEventHandler, useRef } from "react";
import {
  RoundedBlockCard,
  RoundedCard,
  RoundedCardButton,
} from "../shared/cards";
import { Input } from "../shared/inputs";
import FreeTextInput from "../shared/freeText";
import { transformFormData } from "../../utils/form";
import { CardsData, useFormContext } from "../../contexts/form";
import { Trash } from "lucide-react";

const CardsEditor = ({
  toggleEditMode,
}: {
  toggleEditMode: (v: boolean) => void;
}) => {
  const { setData, data, addNewItem, removeItem } = useFormContext();

  const formRef = useRef<ElementRef<"form">>(null);

  let cardsData = data?.cards as CardsData;
  let cardsItems = cardsData?.items || [];

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    let itemIdentifier = "card";
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    let transformedData = transformFormData(formData, itemIdentifier);
    setData({
      ...(data || {}),
      [`${itemIdentifier}s`]: {
        ...transformedData,
      },
    });
    toggleEditMode(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="w-full h-full flex flex-col justify-start gap-y-24 grid grid-cols-3">
        <div className="col-span-1"></div>
        <RoundedBlockCard toggleEditMode={toggleEditMode} id="cards">
          <div className="flex flex-row grid grid-cols-2 gap-8 col-span-2">
            {cardsItems.map((item, idx) => (
              <Card
                key={`cards-${item?.title}`}
                id={idx}
                {...item}
                removeItem={() => {
                  removeItem("cards", idx);
                }}
              />
            ))}
            <NewCardButton
              onClick={() => {
                addNewItem("cards");
              }}
            />
          </div>
        </RoundedBlockCard>
      </div>
    </form>
  );
};

export default CardsEditor;

const Card = ({
  id,
  title,
  description,
  body,
  removeItem,
}: {
  id: number;
  title: string;
  description: string;
  body: string;
  removeItem: () => void;
}) => {
  return (
    <RoundedCard key={`card.${id}`}>
      <div className="absolute right-[20px] top-[15px] cursor-pointer">
        <button
          className="py-1 px-2 bg-sh-one rounded-lg text-re-one"
          onClick={removeItem}
        >
          <Trash width={15} />
        </button>
      </div>
      <Input
        name={`card.${id}.title`}
        placeholder="Untitled"
        value={title}
        className="text-lg font-bold"
      />
      <FreeTextInput
        id={`card.${id}.description`}
        value={description}
        placeholder="Write description here"
        className="text-sm leading-6"
      />
      <FreeTextInput
        id={`card.${id}.body`}
        value={body}
        placeholder="Start writing..."
        className="min-h-[300px]"
      />
    </RoundedCard>
  );
};

const NewCardButton = ({ onClick }: { onClick: MouseEventHandler }) => {
  return (
    <RoundedCardButton>
      <div
        className="flex flex-col justify-center items-center h-full w-full gap-4 min-h-[380px]"
        onClick={onClick}
      >
        <div>+</div>
        <div>Add New Card</div>
      </div>
    </RoundedCardButton>
  );
};
