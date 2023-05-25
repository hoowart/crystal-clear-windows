import React, {useRef} from 'react';
import { useFormik } from 'formik'
import { basicSchema2 } from '../Schemas/index2'
import emailjs from '@emailjs/browser'

const ContactForm2 = () => {
    const form = useRef();

    const onSubmit = (e) => {
        emailjs.sendForm('service_zqcihvy', 'template_lrflpzo', form.current, '_SrbCF9XycSCBM-JO')
          .then((result) => {
            console.log(result)
              alert("Your message has been sent and we will get back to your email as soon as possible. Thank you.")
              location.reload()
          }, (error) => {
            console.log(error)
              alert("There has been an error. Please try again.")
          });


      };

    const { values, errors, handleBlur, touched, handleChange, handleSubmit, isValid, isSubmitting } = useFormik({
      initialValues: {
        name: '',
        email: '',
        message: '',
      },
      validationSchema: basicSchema2,
      onSubmit
    });

    

  return (
    <>
     <div className="xl:flex justify-center items-center pt-10 xl:pb-10">
        <form onSubmit={handleSubmit} ref={form} id="form"
             className="text-black font-montserrat">
            <div className="flex-1 text-gray-700 md:p-20 p-10 pb-32">
                <h1 className="text-3xl pb-2 tracking-wide">MESSAGE INBOX</h1>
                <p className="text-xl text-gray-500">
                  Send any questions, concerns, or suggestions to our inbox.
                </p>
                <div className="mt-6">

                <div className="flex">
                    <label htmlFor="name" className="text-sm block py-2">
                        Name
                    </label>
                    <div className={errors.name && touched.name ? "flex text-sm text-red-400 indent-1 font-poppins items-center" : "hidden"}>{errors.name}</div>
                </div>
                <input
                    id="name"
                    type="name" 
                    name="name"
                    placeholder="Full Name"
                    className="rounded border-2 indent-2 w-full md:w-1/2" 
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                
                

                <div className="flex">
                    <label htmlFor="email" className="text-sm block py-2">
                        Email Address
                    </label>
                    <div className={errors.email && touched.email ? "flex text-sm text-red-400 indent-1 font-poppins items-center" : "hidden"}>{errors.email}</div>
                </div>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    className="rounded border-2 indent-2 w-full md:w-1/2"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />
                
                <div className="flex">
                    <label htmlFor="message" className="text-sm block py-2">
                        Message
                    </label>
                    <div className={errors.message && touched.message ? "flex text-sm text-red-400 indent-1 font-poppins items-center" : "hidden"}>{errors.message}</div>
                </div>
                <textarea
                    id="message"
                    type="message" 
                    name="message"
                    className="rounded border-2 p-2 w-full min-h-[240px]"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />

            </div>

            <button type="submit" disabled={!isValid || isSubmitting} className="bg-polyblue rounded-sm tracking-wide p-4 font-poppins drop-shadow-md hover:opacity-75 text-white mt-4 w-full hover:cursor-pointer">
                Send
            </button>
            </div>
        </form>
    </div>
    </>
  );
}


export default ContactForm2;