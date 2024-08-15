import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { useSelector } from "react-redux";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const user = useSelector((state) => state.user.user);

  const [input, setInput] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    // file: user?.profile?.resume,
  });

  const handelFormValue = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(input, "update data");
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/users/update`,
        input,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px] "
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={handelSubmit}
            // className=" border border-gray-200 rounded-md "
          >
            {/* <div className="flex justify-between">
              <img src={avatar.url} className="rounded-sm h-16 w-16" alt="" />
            </div> */}

            <div className="grid grid-cols-4 items-center gap-4 my-1">
              <Label>Full Name</Label>
              <Input
                className="col-span-3"
                type="text"
                placeholder="Full Name"
                name="fullName"
                onChange={handelFormValue}
                value={input.fullName}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 my-1">
              <Label>Email</Label>
              <Input
                className="col-span-3"
                type="email"
                placeholder="burhan@gmail.com"
                name="email"
                onChange={handelFormValue}
                value={input.email}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 my-1">
              <Label>Phone Number</Label>
              <Input
                className="col-span-3"
                type="text"
                placeholder="+92 306 8866 333"
                name="phoneNumber"
                onChange={handelFormValue}
                value={input.phoneNumber}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 my-1">
              <Label>Bio</Label>
              <Input
                className="col-span-3"
                type="text"
                placeholder="bio"
                name="bio"
                onChange={handelFormValue}
                value={input.bio}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 my-1">
              <Label>Skills</Label>
              <Input
                className="col-span-3"
                type="text"
                placeholder="skills"
                name="skills"
                onChange={handelFormValue}
                value={input.skills}
              />
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4 my-1">
              <Label htmlFor="option-one">Resume</Label>
              <Input
                className="col-span-3 cursor-pointer"
                type="file"
                name="file"
                onChange={handelFormValue}
                value={input.file}
              />
            </div> */}

            <Button type="submit" className="w-full my-4">
              Update
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {/* <Dialog open={open} close={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default UpdateProfileDialog;
