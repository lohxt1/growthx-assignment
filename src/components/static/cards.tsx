import { RoundedBlockCardStatic, RoundedCard } from "../shared/cards";
import { CardsData, useFormContext } from "../../contexts/form";
import FreeTextInputStatic from "../shared/freeTextStatic";

const CardsStatic = ({
  toggleEditMode,
}: {
  toggleEditMode?: (v: boolean) => void;
}) => {
  const { data, deleteSection } = useFormContext();

  let cardsData = data?.cards as CardsData;
  let cardsItems = cardsData?.items || [];

  return (
    <div
      className="w-full h-full flex flex-col justify-start gap-y-24 grid grid-cols-3"
      id="skills"
    >
      <div className="col-span-1 h-fit"></div>
      <RoundedBlockCardStatic
        toggleEditMode={toggleEditMode}
        id="cards"
        deleteSection={deleteSection}
      >
        <div className="flex flex-row grid grid-cols-2 gap-8 col-span-2">
          {cardsItems.map((item, idx) => (
            <Card id={idx} {...item} />
          ))}
        </div>
      </RoundedBlockCardStatic>
    </div>
  );
};

export default CardsStatic;

const Card = ({
  id,
  title,
  description,
  body,
}: {
  id: number;
  title: string;
  description: string;
  body: string;
}) => {
  let descriptionData = description
    ? JSON.stringify(JSON.parse(description))
    : null;
  let bodyData = body ? JSON.stringify(JSON.parse(body)) : null;

  return (
    <RoundedCard key={`card.${id}`}>
      <div className="text-lg font-bold">{title}</div>
      <FreeTextInputStatic
        value={descriptionData}
        className="text-sm leading-6"
      />
      <FreeTextInputStatic value={bodyData} />
    </RoundedCard>
  );
};
