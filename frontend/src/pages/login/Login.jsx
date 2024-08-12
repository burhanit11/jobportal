import { Input } from "@/components/ui/input";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlices/userSlices";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const dispatch = useDispatch();
  const { toast } = useToast();

  const handelFormValue = async (e) => {
    // e.preventDefalut();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/users/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(toast, "??");
      console.log(res);
      dispatch(addUser(res.data?.token));
    } catch (error) {
      toast({
        title: error,
        // description: "Friday, February 10, 2023 at 5:57 PM",
      });
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-between ">
      <div className="mx-5">
        <Header />
        <div className="flex justify-center items-center max-w-7xl mx-auto ">
          <form
            onSubmit={handelSubmit}
            className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
          >
            <h1 className="font-bold text-xl mb-5">Login</h1>

            <div className="my-2">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="joan@gmail.com"
                onChange={handelFormValue}
                value={input.email}
              />
            </div>

            <div className="my-2">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="password"
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
                    className="cursor-pointer"
                    onChange={handelFormValue}
                    checked={input.role === "student"}
                    value="student"
                  />
                  <Label htmlFor="option-one">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    className="cursor-pointer"
                    onChange={handelFormValue}
                    checked={input.role === "recuiter"}
                    value="recuiter"
                  />
                  <Label htmlFor="option-two">Recuiter</Label>
                </div>
              </RadioGroup>
            </div>
            <Button
              type="submit"
              onKeyDown={(e) => e.key === "Enter" && handelSubmit(e)}
              className="w-full my-4"
            >
              Login
            </Button>
            <span>
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-blue-600">
                Sign Up
              </Link>{" "}
            </span>
          </form>
        </div>
      </div>

      <Footer className="items-end" />
    </div>
  );
};

export default Login;
