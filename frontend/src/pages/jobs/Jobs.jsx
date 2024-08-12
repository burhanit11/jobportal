import FilterCard from "../../components/filterCard/FilterCard";
import Header from "../../components/header/Header";
import Job from "../../components/job/Job";

const Jobs = () => {
  const jobsArray = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {jobsArray.length < 0 ? (
            <span>Job Not Found</span>
          ) : (
            <div className="flex-1 h-[80vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobsArray.map((item, i) => (
                  <div key={i}>
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
