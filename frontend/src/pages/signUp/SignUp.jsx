import { Input } from "@/components/ui/input";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
  });
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const { toast } = useToast();
  const handelAvatar = (e) => {
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handelFormValue = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/users/singup`,
        input,
        // {
        //   fullName: input.fullName,
        //   email: input.email,
        //   password: input.password,
        //   phoneNumber: input.password,
        //   role: input.role,
        // },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast({
        title: res.data?.message,
        // description: "Friday, February 10, 2023 at 5:57 PM",
      });
    } catch (error) {
      toast({
        title: error,
        // description: "Friday, February 10, 2023 at 5:57 PM",
      });
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center max-w-7xl mx-auto">
        <form
          onSubmit={handelSubmit}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <div className="flex justify-between">
            <h1 className="font-bold text-xl mb-5">Sign Up</h1>
            <img src={avatar.url} className="rounded-sm h-16 w-16" alt="" />
          </div>

          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="Full Name"
              name="fullName"
              onChange={handelFormValue}
              value={input.name}
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="joan@gmail.com"
              name="email"
              onChange={handelFormValue}
              value={input.email}
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="+92 306 8866 333"
              name="phoneNumber"
              onChange={handelFormValue}
              value={input.phoneNumber}
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="password"
              name="password"
              onChange={handelFormValue}
              value={input.password}
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                  onChange={handelFormValue}
                  checked={input.role === "student"}
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recuiter"
                  className="cursor-pointer"
                  onChange={handelFormValue}
                  checked={input.role === "student"}
                />
                <Label htmlFor="option-two">Recuiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label htmlFor="option-one">Profile</Label>
              <Input
                type="file"
                name="avatar"
                onChange={handelAvatar}
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
            Submit
          </Button>
          <span>
            Already have an account?
            <Link to={"/login"} className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
