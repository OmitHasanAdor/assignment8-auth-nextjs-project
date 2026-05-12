'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa';
import { FiHexagon, FiSettings, FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';


const LoginPage = () => {

    const handleGoogleSign = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackUrl: redirectPath,
  });
};

     const router = useRouter()
    const redirectPath = useSearchParams().get("redirect") || "/myprofile"

    // react hook form 
    const {register,handleSubmit,watch, formState: { errors }}=useForm()
    const handleLogIn=async(data)=>{
console.log(data)
const { data:res, error } = await authClient.signIn.email({

    email: data.email,
    password: data.password,
    rememberMe: true,
   callbackUrl: redirectPath
});
console.log(res, error)
if (error) {
    toast.error(`Login failed: ${error.message}`)
} else if (res) {
    toast.success("Login successful!")
    router.push(redirectPath)
     
}
    }


    return (
            <div className=" flex flex-col-reverse md:flex-row justify-around gap-10 p-5 max-w-[85%] mx-auto">


<div className="flex flex-1 justify-center max-w-[95%] md:max-w-[85%] items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
        
        {/* Browser Top Bar */}
        <div className="bg-gray-100 px-5 py-3 flex items-center border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 bg-red-500 rounded-full animate__animated animate__flash animate__infinite animate__slow"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate__animated animate__flash animate__infinite animate__slower"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate__animated animate__flash animate__infinite animate__slow"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-10 flex flex-col items-center bg-linear-to-b from-white to-gray-50">
          
          {/* Complex Profile Animation Section */}
          <div className="mb-12 relative">
            {/* Outer Rotating Hexagon */}
            <div className="absolute -inset-4 animate__animated animate__rotateIn animate__infinite animate__slower opacity-20">
              <FiHexagon className="w-36 h-36 text-black" />
            </div>
            
            {/* Main Profile Box with Pulse */}
            <div className="animate__animated animate__pulse animate__infinite animate__slow w-28 h-28 bg-black rounded-3xl flex items-center justify-center shadow-2xl relative z-10">
              <FiUser className="animate__animated animate__headShake animate__infinite animate__slower w-14 h-14 text-white" />
            </div>

            {/* Small Floating Gear Icon */}
            <div className="absolute -top-2 -right-2 animate__animated animate__rotateIn animate__infinite animate__slow">
              <FiSettings className="w-6 h-6 text-gray-400" />
            </div>
          </div>

          {/* Animated Shapes (Buttons alternative) */}
          <div className="w-full space-y-6">
            {/* First Shape - Wobble Effect */}
            <div className="animate__animated animate__wobble animate__infinite animate__slower w-full bg-gray-200 h-16 rounded-2xl shadow-inner border border-gray-300"></div>
            
            {/* Second Shape - Swing Effect */}
            <div className="animate__animated animate__swing animate__infinite animate__slower w-full bg-gray-200 h-16 rounded-2xl shadow-inner border border-gray-300"></div>
            
            {/* Third Shape - HeartBeat Effect */}
            <div className="animate__animated animate__heartBeat animate__infinite animate__slow w-full bg-gray-200 h-16 rounded-2xl shadow-inner border border-gray-300"></div>
          </div>

          {/* Logo Section with Bounce and Rotation */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="animate__animated animate__bounce animate__infinite animate__slow">
              <div className="p-1 bg-white rounded-full shadow-lg border border-gray-100 animate__animated animate__flipInY animate__infinite animate__slower">
                <Image 
                  src="/logo.jpg" 
                  alt="Logo" 
                  width={60} 
                  height={60} 
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


            <div className=" flex-1 bg-white min-h-[80vh] max-w-[95%] md:max-w-[85%] mx-auto rounded-md shadow-md border-2 border-gray-200">
                <h1 className="text-2xl font-bold text-center py-8 border-b-2 border-gray-300">Login to Your Account</h1>

                <div className=" flex flex-col justify-center items-center py-8">
                    <form onSubmit={handleSubmit(handleLogIn)}>
                        <fieldset className="fieldset   rounded-box w-xs  p-4">
                            <legend className="fieldset-legend">Login</legend>

                            <label className="label">Email</label>
                            <input type="email" {...register("email",{ required: 'email field is required' })} className="input" placeholder="Email" />
                             {errors.email && <p className=" text-red-500">{errors.email.message}</p>}

                            <label className="label">Password</label>
                            <input type="password" {...register("password",{ required: 'password field must required' })} className="input" placeholder="Password" />
                            {errors.password && <p className=" text-red-500">{errors.password.message}</p>}

                            <button className="btn btn-neutral mt-4"> login</button>
                        </fieldset>
                    </form>
                    <p className=" text-center font-semibold">Don&apos;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link></p>
                    <p className=" block">or</p>
                     <button className="btn btn-neutral" onClick={handleGoogleSign}><FaGoogle />Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;