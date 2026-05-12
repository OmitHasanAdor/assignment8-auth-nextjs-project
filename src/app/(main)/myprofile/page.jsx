'use client'

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const MyProfilePage = () => {

    const { data: session ,isPending} = authClient.useSession()
      const user = session?.user;

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

<div className="animate__animated animate__bounce animate__infinite">
  Is it moving
</div>
<div className="animate__animated animate__flash animate__infinite">
  Is it moving
</div>



{  user ?   <div className=" flex flex-col justify-center items-center max-w-125 gap-4 mx-auto flex-1  ">
               
          <div className="  border border-gray-300  rounded-2xl py-15 px-10 flex flex-col items-center gap-5 shadow-2xl">
                 <div className=" border-2 bg-black border-gray-200 rounded-2xl p-5 flex items-center gap-5">
                 <Image src={ user?.image || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="User Avatar" width={100} height={100}  className=' rounded-[50%] h-20 w-20'/>
               </div>
                 <h2 className=' text-2xl text-black font-bold'>{user && `Hello, ${user.name}` }</h2>
                 <h2 className=' text-2xl text-black font-bold'>Welcome to Your Profile</h2>
                 <Link href="/updateinfo">
                   <button className='btn btn-neutral'>Update Your Information</button>
                 </Link>
          </div>
                
            </div>
      : <div className=" bg-white min-h-[80vh] max-w-125 mx-auto rounded-md shadow-md border-2 border-gray-200 flex-1">
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
                </div>}
   </div>
    );
};

export default MyProfilePage;