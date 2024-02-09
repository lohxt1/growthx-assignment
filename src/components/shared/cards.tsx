import { MouseEventHandler } from "react";
import { SectionType } from "../../contexts/form";
import { Edit, Trash } from "lucide-react";

const RoundedBlockCard = ({
  children,
  label,
  toggleEditMode,
}: {
  id: SectionType;
  children: React.ReactNode;
  label?: string;
  toggleEditMode: (v: boolean) => void;
}) => {
  return (
    <div className="w-full flex flex-col col-span-2 gap-2">
      <div className="flex flex-row gap-x-4 w-full justify-end text-sm h-[30px]">
        <button
          className="text-tx-two py-1 px-2 rounded-xl"
          onClick={() => {
            toggleEditMode(false);
          }}
        >
          Cancel
        </button>
        <button
          className="text-white border py-1 px-4 rounded-3xl bg-bl-two items-center"
          type="submit"
        >
          Save
        </button>
      </div>
      <div className="w-full gap-2 flex flex-col">
        <div className="flex flex-col gap-8 w-full p-12 border-sh-five rounded-3xl border">
          {label && <div className="text-4xl font-bold">{label}</div>}
          {children}
        </div>
      </div>
    </div>
  );
};

const RoundedBlockCardStatic = ({
  id,
  children,
  label,
  toggleEditMode,
  deleteSection,
}: {
  id: SectionType;
  children: React.ReactNode;
  label?: string;
  toggleEditMode?: (v: boolean) => void;
  deleteSection?: (v: SectionType) => void;
}) => {
  return (
    <div className={`w-full flex flex-col col-span-2 gap-2`}>
      {toggleEditMode && (
        <div className="flex flex-row gap-x-4 w-full justify-end text-sm h-[30px]">
          <button
            className="py-1 px-2 bg-sh-one rounded-lg text-re-one"
            onClick={() => {
              deleteSection && deleteSection(id);
            }}
          >
            <Trash width={15} />
          </button>
          <button
            className="py-1 px-2 bg-sh-one rounded-lg text-bl-one"
            onClick={() => {
              toggleEditMode(true);
            }}
          >
            <Edit width={15} />
          </button>
        </div>
      )}
      <div className="w-full gap-2 flex flex-col">
        <div className="flex flex-col gap-8 w-full p-12 border-transparent rounded-3xl border">
          {label && <div className="text-4xl font-bold">{label}</div>}
          {children}
        </div>
      </div>
    </div>
  );
};

const RoundedCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex border border-sh-three rounded-3xl bg-bg-zero flex-col w-full p-8 h-fit gap-4 relative">
      {children}
    </div>
  );
};

const RoundedCardButton = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}) => {
  return (
    <div
      className={`flex border border-sh-three rounded-3xl bg-bg-two flex-col w-full p-8 h-fit relative ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export {
  RoundedCard,
  RoundedCardButton,
  RoundedBlockCard,
  RoundedBlockCardStatic,
};
