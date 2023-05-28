import React from 'react'

const Services = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-gray-200 from-90% ">
        <div className="justify-center flex-col flex items-center pb-[31px]">
          <h1 className="text-3xl tracking-wide font-poppins text-night mt-16 font-bold">Our Services</h1>
          <p className="font-montserrat p-4">Including but not limited to:</p>

          <div className="sm:grid sm:grid-cols-1 xmd:grid-cols-3 gap-10 sm:mt-10">
            <div className=" hover:scale-[73%] sm:hover:scale-105 xmd:hover:scale-[83%] 1.5xl:hover:scale-105 scale-[70%] sm:scale-[100%] xmd:scale-[80%] 1.5xl:scale-100 border border-gray-300 border-opacity-50 rounded-xl flex items-center drop-shadow-md hover:drop-shadow-2xl hover:border-opacity-100 duration-300 h-[300px] sm:w-[500px]">
              <div className="w-1/2">
                <img src="https://ik.imagekit.io/41cluqtdq/ccwindow/16.jpg?updatedAt=1684980727450" alt="" className="rounded-xl bg-cover bg-center object-cover object-left h-[300px] rounded-r-none"/>
              </div>
              <div className="flex p-6 flex-col  w-1/2">
                <div className="text-xl font-poppins mb-4 flex justify-center ">
                  WINDOW CLEANING
                </div>
                <div className="font-montserrat flex justify-center">
                  Eliminate the streaks and dirt on your windows, no matter how high or low. 
                </div>
              </div>
            </div>

            <div className="hover:scale-[73%] sm:hover:scale-105 xmd:hover:scale-[83%] 1.5xl:hover:scale-105 scale-[70%] sm:scale-[100%] xmd:scale-[80%] 1.5xl:scale-100 border border-gray-300 border-opacity-50 rounded-xl flex items-center drop-shadow-md hover:drop-shadow-2xl hover:border-opacity-100 duration-300 h-[300px] sm:w-[500px]">
              <div className="w-1/2">
                <img src="https://ik.imagekit.io/41cluqtdq/ccwindow/18.jpg?updatedAt=1684986354140" alt="" className="rounded-xl bg-cover bg-center object-cover object-left h-[300px] rounded-r-none"/>
              </div>
              <div className="flex p-6 flex-col  w-1/2">
                <div className="text-xl font-poppins mb-4 flex justify-center ">
                  PRESSURE WASHING
                </div>
                <div className="font-montserrat flex justify-center">
                  Remove any grime on the building's exterior, or the driveway.
                </div>
              </div>
            </div>

            <div className="hover:scale-[73%] sm:hover:scale-105 xmd:hover:scale-[83%] 1.5xl:hover:scale-105 scale-[70%] sm:scale-[100%] xmd:scale-[80%] 1.5xl:scale-100 border border-gray-300 border-opacity-50 rounded-xl flex items-center drop-shadow-md hover:drop-shadow-2xl hover:border-opacity-100 duration-300 h-[300px] sm:w-[500px]">
              <div className="w-1/2">
                <img src="https://ik.imagekit.io/41cluqtdq/ccwindow/17.jpg?updatedAt=1684985648965" alt="" className="rounded-xl bg-cover bg-center object-cover object-left h-[300px] rounded-r-none"/>
              </div>
              <div className="flex p-6 flex-col  w-1/2">
                <div className="text-xl font-poppins mb-4 flex justify-center ">
                  GUTTER FLUSHING
                </div>
                <div className="font-montserrat flex justify-center">
                  Unclog and cleanse the gutter to allow adequate flow.
                </div>
              </div>
            </div>
            </div>


            <div className="sm:grid sm:grid-cols-1 xmd:grid-cols-2 gap-10 sm:mt-10">
              <div className="hover:scale-[73%] sm:hover:scale-105 xmd:hover:scale-[83%] 1.5xl:hover:scale-105 scale-[70%] sm:scale-[100%] xmd:scale-[80%] 1.5xl:scale-100 border border-gray-300 border-opacity-50 rounded-xl flex items-center drop-shadow-md hover:drop-shadow-2xl hover:border-opacity-100 duration-300 h-[300px] sm:w-[500px]">
                <div className="w-1/2">
                  <img src="https://ik.imagekit.io/41cluqtdq/ccwindow/19.jpg?updatedAt=1685232287803" alt="" className="rounded-xl bg-cover bg-center object-cover h-[300px] rounded-r-none"/>
                </div>
                <div className="flex p-6 flex-col  w-1/2">
                  <div className="text-xl font-poppins mb-4 flex justify-center ">
                    SCREEN CLEANSING
                  </div>
                  <div className="font-montserrat flex justify-center">
                    Scrub all the grime of your screen windows and doors.
                  </div>
                </div>
              </div>
              

              <div className="hover:scale-[73%] sm:hover:scale-105 xmd:hover:scale-[83%] 1.5xl:hover:scale-105 scale-[70%] sm:scale-[100%] xmd:scale-[80%] 1.5xl:scale-100 border border-gray-300 border-opacity-50 rounded-xl flex items-center drop-shadow-md hover:drop-shadow-2xl hover:border-opacity-100 duration-300 h-[300px] sm:w-[500px] justify-center">
                <div className="flex p-6 flex-col">
                  <div className="text-xl font-poppins mb-4 flex justify-center ">
                    AND MORE
                  </div>
                  <div className="font-montserrat flex justify-center">
                    Contact us to request a cleaning service.
                  </div>
                  <button className="bg-polyblue rounded-sm tracking-wide p-4 font-poppins drop-shadow-md hover:opacity-75 text-white mt-4 hover:cursor-pointer">
                    Contact Us
                  </button>
                </div>
              </div>

          </div>
        </div>

        
      
      </div>
                
    </>
  )
}

export default Services