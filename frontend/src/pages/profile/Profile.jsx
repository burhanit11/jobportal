import Header from "../../components/header/Header";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import AppliedJobTable from "../../components/appliedJobTable/AppliedJobTable";
// import Footer from "../../components/footer/Footer";

const Skills = ["HTML", "css3", "JavaScript", "ReactJs", "NextJs"];

const isResume = true;

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl p-8  my-5">
        <div className="flex justify-between ">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24 cursor-pointer">
              <AvatarImage
                className="h-24 w-24 rounded-full"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
            </Avatar>
            <div>
              <h1 className="font-bold text-lg ">Full Name</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
                sunt.
              </p>
            </div>
          </div>
          <Button className="text-right " variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>burhan@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>+92 306 8866 333</span>
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
    </div>
  );
};

export default Profile;
