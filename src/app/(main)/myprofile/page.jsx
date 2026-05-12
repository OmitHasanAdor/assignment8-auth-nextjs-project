'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { useForm } from "react-hook-form";
import { FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';


const MyProfilePage = () => {

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
     <div className="flex flex-1">
      <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl w-full max-w-90 overflow-hidden">
        
      
        <div className="bg-gray-100 px-5 py-3 flex items-center border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="mx-auto text-gray-400 text-xs font-medium">SunCart - My Profile</div>
        </div>

       
        <div className="p-10 flex flex-col items-center bg-linear-to-b from-white to-gray-50">
          
          
          <div className="mb-10">
            <div className="w-28 h-28 bg-black rounded-2xl flex items-center justify-center shadow-xl">
              <FiUser className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Big Login Button */}
          <div className="w-full bg-gray-200 hover:bg-gray-300 transition-all text-white font-semibold text-xl py-5 rounded-2xl text-center shadow-lg mb-8">
           
          </div>
          <div className="w-full bg-gray-200 hover:bg-gray-300 transition-all text-white font-semibold text-xl py-5 rounded-2xl text-center shadow-lg mb-8">
           
          </div>

          {/* Small Branding */}
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-xl"> <Image src="/logo.jpg" alt="Logo" width={50} height={50} className=' mr-2 rounded-full' /></span>
            <span className="font-medium text-sm">SunCart</span>
          </div>
        </div>
      </div>
    </div>


      <div className=" bg-white min-h-[80vh] max-w-125 mx-auto rounded-md shadow-md border-2 border-gray-200 flex-1">
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
                    </div>
                </div>
   </div>
    );
};

export default MyProfilePage;