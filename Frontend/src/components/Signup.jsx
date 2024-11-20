import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'


const Signup = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = async (data) => {
    const userInfo={
          name:data.name,
          email:data.email,
          address:data.address,
          password:data.password
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Signup Succesfull');
        navigate('/');
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((err)=>{
        if(err.response){
          toast.error('Error: '+ 'user already exists');
        }
    })
  }
  return (
    <>
      <div className='h-[100vh] flex items-center justify-center'>
        <div className='w-[22em] flex bg-pink-100 items-center justify-center border-2 h-[30em]'>
          <form className='flex flex-col gap-1' onSubmit={handleSubmit(onSubmit)}>
            <p className='text-center text-4xl mb-2'>Signup</p>
            <label htmlFor="">Username</label>
            <input className='md:w-[40vh] md:h-[4vh] w-[30vh]' type="text" {...register("name", {
               required: 'username is required',
               minLength: {
                value: 3,
                message: 'Password must be at least 3 characters long',
              },
              maxLength: {
                value: 20,
                message: 'Password should not greater then 20 characters',
              },
               })} />
            {errors.name && <p className='text-red-400' >{errors.name.message}</p>}
            <label htmlFor="">Email</label>
            <input type="email" {...register("email", {
              required: 'Email is required',
              pattern: { 
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:'Invalid email format'
              },
            })} />
            {errors.email && <p className='text-red-400' >{errors.email.message}</p>}
            <label htmlFor="">Address</label>
            <textarea className='md:w-[40vh] w-[30vh]' type="text" {...register("address", {
               required: 'Address is required',
               minLength: {
                value: 20,
                message: 'Address must be at least 20 characters long',
              },
              maxLength: {
                value: 50,
                message: 'Address should not greater then 50 characters',
              }, })} />
            {errors.address && <p className='text-red-400' >{errors.address.message}</p>}
            <label htmlFor="">Password</label>
            <input type="password"           {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?![!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?])(?!.*[^a-zA-Z0-9!@#$%^&*])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                message: 'Password must include at least one special character, one capital letter, and cannot start with a special character',
              },
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            })}
            />
            {errors.password && <p className='text-red-400' >{errors.password.message}</p>}
            <button className="btn px-2 py-2 rounded-md cursor-pointer text-center md:text-xl text-white bg-red-800 hover:bg-red-900 duration-300">Sign up</button>
            <p className='text-center'>Already have an account? <Link to="/Login" className=" rounded-md cursor-pointer text-center duration-300">Login</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup