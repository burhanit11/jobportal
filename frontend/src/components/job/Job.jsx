import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import logo from "../../assets/logo.webp";
import { Link, useNavigation } from "react-router-dom";

const Job = () => {
  const navigation = useNavigation();
  const jobId = "xcbmbkcekldf";

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between ">
        <p className="text-sm text-gray-500 ">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" className="p-6" size="icon">
          <Avatar>
            <AvatarImage
              className="h-10 w-10 rounded-full"
              src={logo}
              alt="@shadcn"
            />
            {/* <img src={logo} alt="" /> */}
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium">Company Name</h1>
          <p className="text-sm text-gray-500 ">Pak</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
          iusto.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge variant="ghost" className="text-blue-600 font-bold">
          12 Positions
        </Badge>
        <Badge variant="ghost" className="text-[#f83002] font-bold">
          Part Time
        </Badge>
        <Badge variant="ghost" className="text-[#7209b7] font-bold">
          70k
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => navigation(`/jobDescription/${jobId}`)}
        >
          <Link to={`/jobDescription/${jobId}`}>Details</Link>
        </Button>
        <Button className="cursor-pointer">Save for later</Button>
      </div>
    </div>
  );
};

export default Job;
