import { Company } from "../models/company.model.js";

const registerCompany = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ message: "Company name are required", success: false });
    }

    const company = await Company.findOne({ name });
    if (company) {
      return res.status(400).json({
        message: "You can't register same name company.",
        success: false,
      });
    }
    const createdCompany = await Company.create({
      name,
      userId: req.user._id,
    });
    res.status(200).json({
      message: "Company Regreation success.",
      createdCompany,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const getCompany = async (req, res) => {
  try {
    const userId = req.user._id;
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(400).json({
        message: "Company not Found.",
        success: false,
      });
    }
    res.status(200).json({
      message: "Get Company success.",
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({
        message: "Company not Found.",
        success: false,
      });
    }
    res.status(200).json({
      message: "Company success.",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file?.path;

    console.log(name, description, website);
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        website,
        location,
      },
      {
        new: true,
      }
    );
    if (!company) {
      return res.status(400).json({
        message: "Company not Found.",
        success: false,
      });
    }
    res.status(200).json({
      message: "Company information updated success.",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export { registerCompany, getCompany, getCompanyById, updateCompany };
