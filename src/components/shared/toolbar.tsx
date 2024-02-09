import AddSection from "./addSection";
import StackOrder from "./stackOrder";

const Toolbar = () => {
  return (
    <div className="fixed bottom-[30px] left-[30px] min-w-[200px] h-[50px] gap-4 flex flex-row items-center">
      <StackOrder />
      <AddSection />
    </div>
  );
};

export default Toolbar;
