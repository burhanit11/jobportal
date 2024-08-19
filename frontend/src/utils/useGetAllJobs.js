import axios from "axios";
import { useEffect } from "react";
import { USER_API_END_POINT } from "./constant";

const useGetAllJobs = () => {
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/job/getAllJob`, {
          withcredentials: true,
        });

        console.log(res, "GetAllJobs");
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllJobs();
  }, []);
};
export default useGetAllJobs;
