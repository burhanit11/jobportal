import { Badge } from "@/components/ui/badge";

const LateastJobsCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cussor-pointer">
      <div>
        <h1 className="text-lg font-medium">Company Name</h1>
        <p className="text-sm text-gray-500">Pakistan</p>
      </div>
      <div>
        <h1 className="text-lg font-bold my-2">Job Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          aliquid!
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
    </div>
  );
};

export default LateastJobsCards;
