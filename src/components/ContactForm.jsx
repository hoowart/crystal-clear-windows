import React, {useRef} from 'react';
import { useFormik } from 'formik'
import { basicSchema } from '../Schemas/index'
import emailjs from '@emailjs/browser'



const ContactForm = () => {
    const form = useRef();

    const onSubmit = (e) => {
        emailjs.sendForm('service_zqcihvy', 'template_6n5tg88', form.current, '_SrbCF9XycSCBM-JO')
          .then((result) => {
            console.log(result)
              alert("Your request has been sent and we will get back to your email as soon as possible. Thank you.")
              location.reload()
          }, (error) => {
            console.log(error)
              alert("There has been an error. Please try again.")
          });


      };

    const { values, errors, handleBlur, touched, handleChange, handleSubmit, isValid, isSubmitting } = useFormik({
      initialValues: {
        name: '',
        phone: '',
        email: '',
        address: '',
        city: ''
      },
      validationSchema: basicSchema,
      onSubmit
    });

    

  return (
    <>
     <div className="bg-white p-4 rounded w-[300px] drop-shadow-lg">
        <form onSubmit={handleSubmit} ref={form} id="form"
             className="text-black font-montserrat">
            <div className="flex-col flex space-y-2 ">

                <div className="flex">
                    <label htmlFor="name" className="text-sm">
                        Name
                    </label>
                    <div className={errors.name && touched.name ? "block text-sm text-red-400 indent-1 font-poppins" : "hidden"}>{errors.name}</div>
                </div>
                <input
                    id="name"
                    type="name" 
                    name="name"
                    placeholder="Full Name"
                    className="rounded border-2 indent-2" 
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                
                <div className="flex">
                    <label htmlFor="phone" className="text-sm">
                        Phone Number
                    </label>
                    <div className={errors.phone && touched.phone ? "block text-sm text-red-400 indent-1 font-poppins" : "hidden"}>{errors.phone}</div>
                </div>
                <input
                    id="phone"
                    type="phone" 
                    name="phone"
                    className="border-2 rounded indent-2"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />
                

                <div className="flex">
                    <label htmlFor="email" className="text-sm">
                        Email Address
                    </label>
                    <div className={errors.email && touched.email ? "block text-sm text-red-400 indent-1 font-poppins" : "hidden"}>{errors.email}</div>
                </div>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    className="border-2 rounded indent-2"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />
                
                <div className="flex">
                    <label htmlFor="address" className="text-sm">
                        Address
                    </label>
                    <div className={errors.address && touched.address ? "block text-sm text-red-400 indent-1 font-poppins" : "hidden"}>{errors.address}</div>
                </div>
                <input
                    id="address"
                    type="address" 
                    name="address"
                    className="border-2 rounded indent-2"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />
                
                <div className="flex">
                    <label htmlFor="city" className="text-sm">
                        City
                    </label>
                    <div className={errors.city && touched.city ? "block text-sm text-red-400 indent-1 font-poppins" : "hidden"}>{errors.city}</div>
                </div>
                <input
                    id="city"
                    type="city" 
                    name="city"
                    className="border-2 rounded indent-2"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />
            </div>

            <button type="submit" disabled={!isValid || isSubmitting} className="bg-polyblue rounded-sm tracking-wide p-4 font-poppins drop-shadow-md hover:opacity-75 text-white mt-4 w-full hover:cursor-pointer">
                Get Your Free Estimate
            </button>
        </form>
    </div>
    </>
  );
}


export default ContactForm;

