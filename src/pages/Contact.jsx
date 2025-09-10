import React from 'react'
import groupdoc from "../assets/groupdoc.png";
import { useNavigate } from 'react-router-dom';
const Contact = () => {
  const navigate = useNavigate;
  return (
    <div className="border border-teal-100 rounded-2xl w-full m-0">
      <div className="text-center w-full text-gray-900 underline mt-2">
        <p>
          CONTACT <span className="text-gray-950 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px] h-70"
          src={groupdoc}
          alt="groupdoc"
        />
        <div className="flex flex-col justify-center items-start gap-4 w-full md:w-auto">
          <p className="font-semibold text-lg text-gray-800">Our Office</p>
          <p className="text-gray-600">
            Westside Tower <br /> Westlands Nairobi
          </p>
          <p className="text-gray-600">
            Tel:+2547765598 <br />
            Email: miafya@info.ac.ke
          </p>
          <p className="font-semibold text-lg text-gray-700">
            {" "}
            Careers At Myafya
          </p>
          <p className="text-gray-600">
            Learn more about our team and job openings
          </p>
          <a 
            className="border border-teal-50 px-5 py-2 text-sm rounded-2xl  cursor-pointer hover:bg-teal-300 transition-all duration-300"href="#careerss">Explore careers</a>
        </div>
      </div>
    </div>
  );
}

export default Contact