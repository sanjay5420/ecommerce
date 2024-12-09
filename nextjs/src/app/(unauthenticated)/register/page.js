'use client'
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input,Card,Button,Image } from '@nextui-org/react';
import Link from 'next/link';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
  .min(8,'Password must be 8 characters long.')
  .required('Required'),
  confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords do not match')
     .min(8,'Password do not match.'),
    phone: Yup.string()
    .min(10,'Phone Number must be 10 digits')
    .max(10,'Phone Number must be 10 digits')
});

export const Register = () => (
      
    <div className='flex justify-center items-center h-screen'>
    
    <Card  className="flex flex-col md:flex-nowrap gap-3 w-[40%] p-8">
    <Image src='ecom2.png' width={110} height={110}/>
      <span className='text-2xl font-bold'>Welcome to Ecom.com</span>
    <span className='mb-5 text-[#A0A3A8]'>Welcome to our ecommerce app! We are happy to invite you to explore the amazing world of online shopping.</span>
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched,handleChange}) => (
        
        <Form className='flex flex-col gap-4 '>
          <Input  name="fullName" placeholder="Enter Full Name" onChange={handleChange} className={errors.fullName ? 'border border-red-600 rounded-xl':null} />
          {errors.fullName && touched.fullName ? (
            <div className='text-red-500 text-sm'>{errors.fullName}</div>
          ) : null}
          
          <Input name="email" type="email"placeholder="Enter Email" onChange={handleChange} className={errors.email ? 'border border-red-600 rounded-xl':null}/>
          {errors.email && touched.email ? <div  className='text-red-500 text-sm'>{errors.email}</div> : null}

          

          <Input name="phone" type="number"placeholder="Enter Phone Number" onChange={handleChange} className={errors.phone ? 'border border-red-600 rounded-xl':null}/>
          {errors.phone && touched.phone ? <div  className='text-red-500 text-sm'>{errors.phone}</div> : null}

          <Input name="password" type="password"placeholder="Enter Password" onChange={handleChange} className={errors.password ? 'border border-red-600 rounded-xl':null}/>
          {errors.password && touched.password ? <div  className='text-red-500 text-sm'>{errors.password}</div> : null}

          <Input name="confirmPassword" type="password"placeholder="Confirm Password" onChange={handleChange} className={errors.confirmPassword ? 'border border-red-600 rounded-xl':null}/>
          {errors.confirmPassword && touched.confirmPassword ? <div className='text-red-500 text-sm'>{errors.confirmPassword}</div> : null}

         

          
          <Button type="submit" className='bg-myColor text-white'>Sign Up</Button>
          <p className='text-sm text-myColor'>Already have an account ? <Link className='font-bold' href={"/login"}>Login.</Link> </p>
        </Form>
      )}
    </Formik>
    </Card>
    </div>
  
);

export default Register




// import React from 'react'
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { Button, Image, Input,Card } from '@nextui-org/react'
// import Link from 'next/link'
// import {DatePicker} from "@nextui-org/date-picker";
// const Register = () => {
    
//     return (

//         <div className='flex justify-center items-center h-screen'>
//             <Card className="flex flex-col md:flex-nowrap gap-3 w-96 p-9">
//                 <Image src='/logo.png'></Image>
//                 <Input type="email" placeholder="Enter Fullname" />
//                 <Input type="email" placeholder="Enter Email" />
//                 <Input type="number" placeholder="Enter Phone Number" />
//                 <DatePicker label="Birth date" />
//                 <Input type="password" placeholder="Enter Password" />
//                 <Input type="password" placeholder="Confirm Password" />

//                 <Button className='bg-blue-400 text-white'>Register</Button>
//                 <p>Already have an account ? <Link className='font-bold' href={"/"}>Login.</Link> </p>
//             </Card>
//         </div>
//     )
// }

// export default Register
