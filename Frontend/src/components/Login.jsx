import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const userInfo={
          email:data.email,
          password:data.password
    }
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
        if(res.data){
          toast.success('Login Succesfull');
          navigate('/');
          setTimeout(() => {
            window.location.reload()
          }, 1000);

        }
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      }).catch((err)=>{
        if(err.response){
          toast.error('Error: '+ 'Invalid credentials');
        }
      })
  }
  return (
    <>
       <div className='h-[100vh] flex items-center justify-center'>
           <div className='w-[22em] flex bg-pink-100 text-red-900 items-center justify-center border-2 h-[23em]'>
           <form className='flex flex-col gap-3'  onSubmit={handleSubmit(onSubmit)}>
           <p className='text-center text-4xl mb-3'>Login</p>
                    <label htmlFor="">Email</label>
                    <input className='md:w-[40vh] md:h-[4vh] w-[30vh]' type="email" {...register("email", { required: 'email is required'})}/>
                    <label htmlFor="">Password</label>
                    <input type="password" {...register("password", { required: 'password is required'})} />
                        <button className="btn px-2 mt-4 py-2 rounded-md cursor-pointer text-center md:text-xl text-white bg-red-800 hover:bg-red-900 duration-300">Login</button>
                        <p className='text-center'>Don't have an account? <Link to="/Signup" className=" rounded-md cursor-pointer text-center duration-300">Sign up</Link></p>
                </form>
           </div>
        </div> 
    </>
  )
}

export default Login