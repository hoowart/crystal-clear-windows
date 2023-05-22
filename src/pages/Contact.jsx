import React from 'react'
import ContactForm from '../components/ContactForm'
import {AiFillInstagram} from 'react-icons/ai'

const Contact = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-gray-200 h-screen">
        <div className="justify-center flex-col flex items-center ">
          <h1 className="text-3xl tracking-wide font-poppins text-night mt-16 font-bold">Contact Us</h1>
          <p className="font-montserrat p-4">Get your free estimate or write us a message!</p>
          <div className="w-[800px] p-10">
            <div className="bg-gradient-to-r from-blue-500 to-polyblue rounded-md p-2 flex items-center">
              <ContactForm />
              <div className="p-8 font-poppins text-white w-[400px]">
                <h1 className="text-xl flex justify-center">Call us to get it done ASAP!</h1>
                  <div className="font-montserrat flex justify-evenly m-10">
                    <div className="flex-col">
                      <p className="justify-center flex">Sunday</p>
                      <p className="justify-center flex">Monday</p>
                      <p className="justify-center flex">Tuesday</p>
                      <p className="justify-center flex">Wednesday</p>
                      <p className="justify-center flex">Thursday</p>
                      <p className="justify-center flex">Friday</p>
                      <p className="justify-center flex">Saturday</p>
                    </div>
                    <div className="flex-col">
                      <p>8AM - 9PM</p>
                      <p>8AM - 9PM</p>
                      <p>8AM - 9PM</p>
                      <p>8AM - 9PM</p>
                      <p>8AM - 9PM</p>
                      <p>8AM - 9PM</p>
                      <p>8AM - 9PM</p>
                    </div>
                  </div>
                  <p className="font-montserrat flex justify-center mt-4">(999) - 300 - 3003</p>
                  <p className="font-montserrat flex justify-center">ccwindowz@gmail.com</p>
                  <div className="flex justify-center">
                    <a href="https://www.instagram.com/ccwindowcleaningservices/" target="_blank" className="font-montserrat flex items-center">
                      <AiFillInstagram />
                      ccwindowcleaningservices
                    </a>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default Contact