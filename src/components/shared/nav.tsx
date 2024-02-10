import { Infinity } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  return (
    <div className="w-full h-[60px] bg-bg-opp flex flex-row fixed top-0 left-0 justify-between text-white px-8 items-center z-20">
      <Link to="/" className={`flex flex-row gap-4 items-center`}>
        <Infinity height={40} width={40} /> Site Builder
      </Link>
      <div className="flex flex-row gap-8 items-center">
        <Link to="/" className={location.pathname == "/" ? `text-bl-one` : ""}>
          Build
        </Link>
        <Link
          to="/preview"
          className={location.pathname == "/preview" ? `text-bl-one` : ""}
        >
          Preview
        </Link>
        <div className="bg-bl-one rounded-full px-4 py-1 cursor-not-allowed opacity-50">
          Publish
        </div>
      </div>
    </div>
  );
};

export default Nav;
