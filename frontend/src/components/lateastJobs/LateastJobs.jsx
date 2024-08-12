import LateastJobsCards from "../lateastJobsCards/LateastJobsCards";

const LateastJobs = () => {
  const randomjob = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-blue-600">Lateast & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomjob.slice(0, 6).map((item, i) => (
          <LateastJobsCards key={i} />
        ))}
      </div>
    </div>
  );
};

export default LateastJobs;
