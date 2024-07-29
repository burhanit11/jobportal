import { User } from "../models/user.models.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

// registre
const singup = async (req, res) => {
  try {
    const { fullName, phoneNumber, email, role, password } = req.body;
    if (
      [fullName, password, phoneNumber, email, role].some(
        (filed) => filed.trim() === ""
      )
    ) {
      return res
        .status(400)
        .json({ message: "All fileds are required", success: false });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User Already Exists.", success: false });
    }

    const user = await User.create({
      fullName,
      password,
      phoneNumber,
      email,
      role,
    });

    res.status(200).json({ message: "singup success.", user, success: true });
  } catch (error) {
    console.log(error);
  }
};

// login
const login = async (req, res) => {
  try {
    const { email, role, password } = req.body;
    if ([, password, email, role].some((filed) => filed.trim() === "")) {
      return res
        .status(400)
        .json({ message: "All fileds are required", success: false });
    }

    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ message: "Invalid User.", success: false });
    }

    const matchPassword = userExists.isCorrectPassword(password);
    if (!matchPassword) {
      return res
        .status(400)
        .json({ message: "Invalid Cridential.", success: false });
    }

    if (!role === userExists.role) {
      return res.status(400).json({
        message: "Account don't exists with current role",
        success: false,
      });
    }
    const token = await userExists.genrateToken();
    const option = {
      httpsOnly: true,
      scure: true,
    };

    const user = await User.findById(userExists._id).select("-password");

    res
      .status(200)
      .cookie("token", token, option)
      .json({ message: "login success.", user, token, success: true });
  } catch (error) {
    console.log(error);
  }
};

// logout
const logout = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: {
          token: undefined,
        },
      },
      {
        new: true,
      }
    );

    const option = {
      httpsOnly: true,
      scure: true,
    };
    res
      .status(200)
      .cookie("token", "", option)
      .json({ message: "User Logout Success." });
  } catch (error) {
    console.log(error);
  }
};

// update
const update = async (req, res) => {
  try {
    const { bio, fullName, email, phoneNumber, skills } = req.body;

    // if (!bio || !fullName || !email || !phoneNumber || !skills) {
    //   return res
    //     .status(400)
    //     .json({ message: "All fileds are required", success: false });
    // }

    // console.log(bio, fullName, email, phoneNumber, skills, "????????");

    // const skillsArray = skills.split(",");
    const id = req.user._id;
    const user = await User.findById(id);

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found", success: false });
    }

    const picLocalPath = req.file?.path;

    if (!picLocalPath) {
      return res
        .status(400)
        .json({ message: "picture is missing", success: false });
    }

    const picture = await uploadOnCloudinary(picLocalPath);

    user.fullName = fullName;
    user.phoneNumber = phoneNumber;
    user.email = email;
    user.profile = user.profile || {};
    user.profile.bio = bio;
    user.profile.skills = skills;
    user.profile.picture = picture;
    // user.profile.bio = bio;
    // user.profile.skills = skillsArray;
    // user.profile.picture = picture;

    await user.save();

    const updateUser = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    // const updateUser = await User.findByIdAndUpdate(
    //   req.user._id,
    //   {
    //     $set: {
    //       fullName,
    //       email,
    //       phoneNumber,
    //       bio,
    //       skills: skillsArray,
    //       picture: picture,
    //     },
    //   },
    //   {
    //     new: true,
    //   }
    // );
    res.status(200).json({ message: "update Success.", updateUser });
  } catch (error) {
    console.log(error);
  }
};

export { singup, login, logout, update };
