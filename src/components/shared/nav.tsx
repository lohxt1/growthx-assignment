import { Infinity } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="w-full h-[60px] bg-bg-opp flex flex-row fixed top-0 left-0 z-10 justify-between items-center text-white px-8 items-center">
      <Link to="/" className={`flex flex-row gap-4 items-center`}>
        <Infinity height={40} width={40} /> Site Builder
      </Link>
      <div className="flex flex-row gap-8 items-center">
        <Link
          to="/preview"
          className={
            location.pathname == "/preview"
              ? `underline decoration-bl-two/80`
              : ""
          }
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
