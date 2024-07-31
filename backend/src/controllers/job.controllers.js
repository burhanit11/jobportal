import Job from "../models/jobs.model.js";

const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      recruiter,
      location,
      salary,
      jobType,
      position,
      created_by,
      application,
      exprince,
    } = req.body;
  } catch (error) {
    console.log(error);
  }
};

export { postJob };
