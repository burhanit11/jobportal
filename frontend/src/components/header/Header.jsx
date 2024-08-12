import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className=" cursor-pointer">
                <AvatarImage
                  className="h-12 w-12 rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                {/* <h1>Porfile</h1> */}
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="mt-2 p-3 flex justify-center items-start w-72">
              <Avatar className=" cursor-pointer">
                <AvatarImage
                  className="h-10 w-10 rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <div className="mx-2 leading-3x">
                <span className="text-lg font-medium">Burhan Mern Stack</span>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
