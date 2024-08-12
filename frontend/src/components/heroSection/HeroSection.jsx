import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10 mx-20">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-blue-600">Dream Jobs</span>
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolores, facere facilis ullam cum
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full itmes-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full py-2  bg-blue-600 ">
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
