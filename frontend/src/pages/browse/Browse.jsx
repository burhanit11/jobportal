import Header from "../../components/header/Header";
import Job from "../../components/job/Job";

const randomJobs = [1, 2, 3];

const Browse = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-xl font-bold my-10 ">
          Search Results ({randomJobs.length})
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {randomJobs.map((item, i) => (
            <Job key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
