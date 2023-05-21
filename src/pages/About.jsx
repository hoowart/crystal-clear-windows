import React from 'react'
import {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import ContactForm from '../components/ContactForm'

const About = () => {

  const slides1 = [
    {
      url: 'https://ik.imagekit.io/41cluqtdq/ccwindow/10.jpg?updatedAt=1684532251431'
    },
    {
      url: 'https://ik.imagekit.io/41cluqtdq/ccwindow/11.jpg?updatedAt=1684532253091'
    },
    {
      url: 'https://ik.imagekit.io/41cluqtdq/ccwindow/9.jpg?updatedAt=1684532251435'
    },
    {
      url: 'https://ik.imagekit.io/41cluqtdq/ccwindow/1.jpg?updatedAt=1684532251687'
    },
    {
      url: 'https://ik.imagekit.io/41cluqtdq/ccwindow/13.jpg?updatedAt=1684532253466'
    },
  ];

  const slides2 = [
    {
      url: 'https://ik.imagekit.io/41cluqtdq/ccwindow/5.jpg?updatedAt=1684532251549'
    },
    {
      url: 'https://ik.imagekit.io/41cluqtdq/ccwindow/6.jpg?updatedAt=1684532251648'
    },
    {
      url: 'https://ik.imagekit.io/41cluqtdq/ccwindow/7.jpg?updatedAt=1684532251597'
    },
    {
      url: 'https://ik.imagekit.io/41cluqtdq/ccwindow/3.jpg?updatedAt=1684532251464'
    },
    {
      url: 'https://ik.imagekit.io/41cluqtdq/ccwindow/12.jpg?updatedAt=1684532253190'
    },
  ]



    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? slides1.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
      const isFirstSlide = currentIndex === slides1.length - 1
      const newIndex = isFirstSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }


  return (
    <>
    <div className="flex relative">
        <div className="w-full lg:hidden flex-col items-center">
          <div className="bg-gradient-to-t from-blue-400 to-polyblue p-6 text-white">
            <div className="flex-col font-montserrat p-10">
              <h1 className="text-3xl pb-10 font-poppins">
                Professional Cleaners
              </h1>
              
              <div className="text-xl pb-4">
              Exceptional service is the cornerstone of our company
              </div>
              <p>
                We understand that your time is valuable, which is why we've streamlined our process to ensure maximum efficiency and convenience.
              </p>
              <div className="pt-10">
                <a href="/contact">
                  <button className="bg-polyblue rounded-sm tracking-wide p-4 font-poppins drop-shadow-md hover:opacity-75 text-white mt-4 hover:cursor-pointer">
                    Get A Free Estimate
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-black h-[640px] relative group">
            <div style={{backgroundImage: `url(${slides1[currentIndex].url})`}} className="h-full bg-center bg-cover duration-500 ">
              <button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate -y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={prevSlide}>
                <BsChevronCompactLeft size={30}/>
              </button>
              <button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate -y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
                <BsChevronCompactRight size={30}/>
              </button>
            </div>
          </div>
        </div>
        <div>
      </div>


        <div className="w-screen hidden lg:flex">
          <div className="bg-black w-1/5 relative group">
            <div style={{backgroundImage: `url(${slides1[currentIndex].url})`}} className="h-full bg-center bg-cover duration-500">
              <button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate -y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={prevSlide}>
                <BsChevronCompactLeft size={30}/>
              </button>
            </div>
          </div>
          <div className="w-full h-[680px] bg-gradient-to-t from-blue-400 to-polyblue flex justify-center items-center text-white">
            <div className="flex-col font-montserrat p-10">
              <h1 className="text-4xl pb-10 font-poppins">
                Hire Professional Cleaners
              </h1>
              
              <div className="text-2xl pb-4">
              Exceptional service is the cornerstone of our company
              </div>
              <p>
                We understand that your time is valuable, which is why we've streamlined our process to ensure maximum efficiency and convenience. 
              </p>
            </div>
            <div className="mr-10">
              <ContactForm />
            </div>
            
          </div>
            <div className="bg-black w-1/5 relative group">
              <div style={{backgroundImage: `url(${slides2[currentIndex].url})`}} className="h-full bg-center bg-cover duration-500">
                <button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate -y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
                  <BsChevronCompactRight size={30}/>
                </button>
              </div>
            </div>
          </div>
      </div>
      <div className="max-w-[1240px] mx-auto flex-col md:flex-row md:flex justify-center items-center font-poppins text-night m-40 px-10">
        <div className="flex justify-center items-center p-4">
          <img src="https://ik.imagekit.io/41cluqtdq/ccwindow/4.jpg?updatedAt=1684532251699" alt="" className="rounded-xl drop-shadow-lg object-cover object-center h-80 w-80 md:w-fit md:max-w-md"/>
        </div>
        <div className="md:ml-10">
          <h1 className="text-2xl font-montserrat pt-6 md:pt-0">
            We service the 
          </h1>
          <h2 className="text-3xl text-polyblue text-bold pb-4">
            Greater Toronto Area
          </h2>
          <p className="text-md font-montserrat">Are you looking to revitalize the exterior of your property in the Greater Toronto Area? 
            Our team uses cutting-edge equipment and techniques to ensure a thorough and efficient cleaning process. From removing dirt, mold, 
            and mildew to eliminating stubborn stains, we have the expertise to transform your windows and surfaces. <br /><br /> Not only will 
            your property regain its curb appeal, but regular maintenance can also prolong the life of your windows and exterior surfaces. Invest 
            in our window cleaning and power washing service today and let us bring back the sparkle and shine to your property.
          </p>
        </div>
      </div>
      
      

      


    </>
  )
}

export default About