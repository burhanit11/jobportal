import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { LuLogOut } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const use = useSelector((state) => state.user.users);
  console.log(use, "user");
  const user = false;

  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5 cursor-pointer">
            <Link to={"/"}>Home</Link>
            <Link to={"/jobs"}>Jobs</Link>
            <Link to={"/browse"}>Browse</Link>
          </ul>
          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className=" cursor-pointer">
                  <AvatarImage
                    className="h-10 w-10 rounded-full"
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  {/* <h1>Porfile</h1> */}
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="mt-2 p-3 rounded shadow-md border-2  w-72">
                <div className=" leading-3 flex">
                  <Avatar className=" cursor-pointer">
                    <AvatarImage
                      className="h-10 w-10 rounded-full"
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div className="mx-2">
                    <span className="text-lg font-medium">
                      Burhan Mern Stack
                    </span>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex flex-col mt-2 justify-center items-start">
                  <div className="flex  justify-center items-center">
                    <FaRegUser size={20} />
                    <Button className="border-none " variant="link">
                      View Profile
                    </Button>
                  </div>
                  <div className="flex justify-center items-center">
                    <LuLogOut size={20} />

                    <Button className="border-none " variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>

              <Button onClick={() => navigate("/signup")}>Sign Up</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
