import React from 'react'
import atioeno from "../assets/atioeno.png";
const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-700 mb-4">
        <p className="text-teal-700">ABOUT <span className="text-teal-700 font-medium">US</span></p>
      </div>
      {/* image on the left side */}
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px] bg-teal-200 rounded-xl" src={atioeno} alt="doc" />

        {/* About text on the right side */}
        <div className="flex flex-col justify-center gap-6 md:w-2/3 text-xl text-gray-700">
          <p>
            Welcome to miafya, your trusted partner in managing your healthcare
            needs conveniently and efficiently. At miafya, we understand the
            challenges individuals face when it comes to scheduling doctor
            appointments and managing their health records.
          </p>
          <p>
            Miafya is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, miafya is here to support you every step of the way.
          </p>
          <b className="text-teal-700">Our Vision</b>
          <p>
            Our vision at miafya is to create a seamless healthcare experience
            for every user. We aim to bridge the gap between patients and
            healthcare providers, making it easier for you to access the care
            you need, when you need it.
          </p>
        </div>
      </div>
      <div className="text-xl my-4 text-teal-700">
        <p>
          WHY <span className="text- font-semiteal-700 bold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-10 gap-4">
        <div className="border border-teal-200 px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>

        <div className="border border-teal-200 px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>

        <div className="border border-teal-200 px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About