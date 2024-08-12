import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FilterCard = () => {
  const filterData = [
    {
      filterType: "Location",
      array: ["Islamabad", "Lahore", "Karachi", "Peshaware"],
    },
    {
      filterType: "Industry",
      array: [
        "Frontend developer",
        "Backend developer",
        "Full Stack developer",
      ],
    },
    {
      filterType: "Salary",
      array: ["0-50k", "50k-100k", "100k-150k", "150k-250k"],
    },
  ];

  return (
    <div className="w-full bg-white p-3 rounded-md ">
      <h1 className="font-bold text-lg ">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup defaultValue="option-one">
        {filterData.map((data, i) => (
          <div key={i}>
            <h1 className="font-bold text-lg ">{data?.filterType}</h1>
            {data.array.map((item, i) => {
              return (
                <div key={i} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id="option-one" />
                  <Label htmlFor="option-one">{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
