import Header from "../../components/header/Header";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import AppliedJobTable from "../../components/appliedJobTable/AppliedJobTable";
import { useState } from "react";
import UpdateProfileDialog from "../../components/UpdateProfileDialog/UpdateProfileDialog";
import { useSelector } from "react-redux";
// import Footer from "../../components/footer/Footer";

const Skills = ["HTML", "css3", "JavaScript", "ReactJs", "NextJs"];

const isResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl p-8  my-5">
        <div className="flex justify-between ">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24 cursor-pointer">
              <AvatarImage
                className="h-24 w-24 rounded-full"
                src={user?.profile?.picture || "https://github.com/shadcn.png"}
                alt="@shadcn"
              />
            </Avatar>
            <div>
              <h1 className="font-bold text-lg ">{user?.fullName}</h1>
              <p>
                {user.bio ||
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias sunt."}
              </p>
            </div>
          </div>
          <Button
            className="text-right "
            onClick={() => setOpen(true)}
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user.phoneNumber}</span>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg my-2">Skills</h1>
          <div className="flex items-center gap-3">
            {Skills.length !== 0 ? (
              Skills.map((item, i) => (
                <Badge
                  variant="ghost"
                  className="text-blue-600 font-bold  my-3"
                  key={i}
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              href=""
              target="_blank"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              Burhan Mern Stack
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
        <div className=" max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-2">Applied Jobs</h1>
          <AppliedJobTable />
        </div>
      </div>
      {/* <Footer /> */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
