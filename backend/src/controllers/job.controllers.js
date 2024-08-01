import { Job } from "../models/jobs.model.js";

const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      location,
      salary,
      jobType,
      position,
      application,
      exprince,
      company,
    } = req.body;

    const userId = req.user._id;

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      location,
      salary,
      jobType,
      position,
      created_by: userId,
      application,
      exprince,
      company,
    });

    res
      .status(200)
      .json({ message: "New Job Created successfully.", job, success: true });
  } catch (error) {
    console.log(error);
  }
};

const getAllJob = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        {
          description: { $regex: keyword, $options: "i" },
        },
      ],
    };

    const jobs = await Job.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(400).json({ message: "Job Not Found", success: false });
    }
    res
      .status(200)
      .json({ message: "Fetch Job Successfully.", jobs, success: true });
  } catch (error) {
    console.log(error);
  }
};

const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    console.log(jobId, "HR");
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(400).json({ message: "Job Not Found", success: false });
    }

    res
      .status(200)
      .json({ message: "Fetch Job By Id Successfully.", job, success: true });
  } catch (error) {
    console.log(error);
  }
};
const getAdminJob = async (req, res) => {
  try {
    const adminId = req.user?._id;

    const job = await Job.find({ created_by: adminId });
    if (!job) {
      return res.status(400).json({ message: "Job Not Found", success: false });
    }

    res
      .status(200)
      .json({ message: "Fetch Job By Id Successfully.", job, success: true });
  } catch (error) {
    console.log(error);
  }
};

export { postJob, getAllJob, getJobById, getAdminJob };
