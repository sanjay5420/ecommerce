'use client'
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input,Card,Button} from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';

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
      
    <div className='flex justify-center items-center h-screen bg-gradient-to-t from-orange-300 to-orange-50'>
    
    <Card  className="flex flex-col md:flex-nowrap gap-3 lg:w-[40%] md:w-[70%] h-full justify-center shadow-none lg:shadow-md px-8 pb-5 bg-gradient-to-t from-orange-300 to-orange-50">
    <Image src='/m.png' width={110} height={110}/>
      <span className='md:text-2xl font-bold'>Welcome to M.com</span>
    <span className='mb-5 text-sm md:text-md text-[#A0A3A8]'>Welcome to our ecommerce app! We are happy to invite you to explore the amazing world of online shopping.</span>
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
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
          <p className='text-sm '>Already have an account ? <Link className='font-bold text-orange-600' href={"/login"}>Login.</Link> </p>
        </Form>
      )}
    </Formik>
    </Card>
    </div>
  
);

export default Register