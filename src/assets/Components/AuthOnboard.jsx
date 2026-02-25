import React from 'react'

const AuthOnboard = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-700 mb-4">
        <p className="text-teal-700">
          WELCOME TO <span className="text-teal-700 font-medium">MyAfya</span>
        </p>
      </div>
      {/* left side */}
      <div className="my-10  flex flex-col md:flex-col gap-4 w-full md:max-w-[480px] bg-teal-600 rounded-2xl shadow-xl p-8 ">
        <div className=''>
          <h3 className="text-white font-semibold  pt-2 text-xl pb-0">
            A Unified Healthcare Ecosystem
          </h3>
          <p className="text-gray-100">
            Built to seamlessly connect patients, medical professionals, and
            health facilities in one secure platform. Whether you are seeking
            care, providing care, or managing a clinic, MyAfya gives you total
            control.
          </p>
        </div>

        <div className=''>
          <h3 className="text-white font-semibold  text-xl">
            Empowering Patients
          </h3>
          <p className="text-gray-100">
            Take charge of your healthcare journey. Easily discover top-rated
            health facilities, search for trusted medical professionals, and
            book your appointments instantly without the friction
          </p>
        </div>

        <div className='gap-0'>
          <h3 className="text-white font-semibold  text-xl ">
            Empowering Health Professionals
          </h3>
          <p className="text-gray-100">
            Grow your practice and your career. Connect with a broader network
            of patients who need your expertise, and unlock exclusive career
            opportunities by discovering and applying for locum shifts at top
            facilities.
          </p>
        </div>

        <div className='gap-0'>
          <h3 className="text-white font-semibold  text-xl">
            Empowering Health Facilities
          </h3>
          <p className="text-gray-100">
            Streamline your operations and staffing. Showcase your clinic's
            services directly to patients ready to book, and instantly post
            locum jobs to hire qualified medical staff exactly when you need
            them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthOnboard