import React from 'react'

const About = () => {
  return (
    <>
      <div className="w-screen md:hidden flex-col justify-center items-center">
        <div className="bg-gradient-to-t from-blue-500 to-polyblue p-6 text-white">
          <div className="flex-col font-montserrat p-10">
            <h1 className="text-3xl pb-10 font-poppins">
              Professional Window Cleaners
            </h1>
            
            <div className="text-xl pb-4">
             Exceptional service is the cornerstone of our company
            </div>
            <p>
              We understand that your time is valuable, which is why we've streamlined our process to ensure maximum efficiency and convenience.
            </p>
            <div className="pt-10">
              <a href="/contact">
                <button className="bg-polyblue rounded-sm tracking-wide p-4 font-poppins">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-black h-[480px]">
          <img src="" alt="" />

        </div>
      </div>


      <div className="w-screen hidden md:flex">
        <div className="bg-black w-1/2">
        <img src="" alt="" />

        </div>
        <div className="w-1/2 h-[680px] bg-gradient-to-t from-blue-500 to-polyblue flex justify-center items-center text-white">
          <div className="flex-col font-montserrat p-10">
            <h1 className="text-4xl pb-10 font-poppins">
              Professional Window Cleaners
            </h1>
            
            <div className="text-2xl pb-4">
             Exceptional service is the cornerstone of our company
            </div>
            <p>
              We understand that your time is valuable, which is why we've streamlined our process to ensure maximum efficiency and convenience.
            </p>
            <div className="pt-10">
              <a href="/contact">
                <button className="bg-white drop-shadow-md text-polyblue rounded-sm tracking-wide p-4 font-poppins hover:bg-polyblue hover:text-white hover:border-white duration-100">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About