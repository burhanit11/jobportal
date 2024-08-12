import { Application } from "../models/application.model.js";
import { Job } from "../models/jobs.model.js";

const applyJob = async (req, res) => {
  try {
    const userId = req.user._id;

    const jobId = req.params.id;
    console.log(jobId, "??????????");
    if (!jobId) {
      return res
        .status(400)
        .json({ message: "Job id is required", success: false });
    }
    //   check the user already applied for this job
    const existsApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existsApplication) {
      return res.status(400).json({ message: "Applied", success: false });
    }

    //   check if the job exists or not
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(400).json({ message: "Applied", success: false });
    }

    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applicant.push(newApplication);
    // await job.save();

    return res.status(201).json({ message: "Job Applied Successfully." });
  } catch (error) {
    console.log(error, "????????????");
  }
};

const getAppliedJob = async (req, res) => {
  try {
    const userId = req.user._id;
    const application = await Application.find({ applicant: userId })
      .sort({
        createdAt: -1,
      })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application) {
      return res
        .status(400)
        .json({ message: "No Application", success: false });
    }
    res
      .status(200)
      .json({ message: "All Application ", application, success: true });
  } catch (error) {
    console.log(error);
  }
};

const getApplicats = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "application",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      return res
        .status(400)
        .json({ message: "No Application", success: false });
    }
    res.status(200).json({ message: "applicant", job, success: true });
  } catch (error) {
    console.log(error);
  }
};

const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res
        .status(400)
        .json({ message: "Status required", success: false });
    }
    //   find the application by id
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res
        .status(400)
        .json({ message: "Application not Found.", success: false });
    }
    application.status = status.toLowerCase();

    await application.save();
    res.status(200).json({
      message: "Application status update successfully",
      application,
      success: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export { applyJob, getAppliedJob, getApplicats, updateStatus };
