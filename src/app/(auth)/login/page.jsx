'use client'
import { authClient } from '@/lib/auth-client';
// import Image from 'next/image';
import ProfileAnimation from "@/components/ProfileAnimation";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa';
// import { FiHexagon, FiSettings, FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';


const LoginPage = () => {



    //  const router = useRouter()
    const redirectPath = useSearchParams().get("redirect") || "/"

    const handleGoogleSign = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackUrl: redirectPath,
        });
        if (data.error) {
            toast.error(`Google login failed: ${data.error.message}`);
        }
    };


    // react hook form 
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const handleLogIn = async (data) => {
        console.log(data)
        const { data: res, error } = await authClient.signIn.email({

            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackUrl: redirectPath
        });
        console.log(res, error)
        if (error) {
            toast.error(`Login failed: ${error.message}`)
        } else {
            toast.success("Login successful!")
            router.refresh();
            setTimeout(() => {
                router.push(redirectPath);
            }, 100);

        }
    }


    return (
        <div className=" flex flex-col-reverse md:flex-row justify-around gap-10 p-5 container mx-auto">


            <div className="relative z-10 flex-1 flex justify-center items-center min-h-[80vh] w-auto shadow-md rounded-md border-2 border-gray-200 mx-auto ">
                <ProfileAnimation
                    fileName="Security.lottie"
                    className=" max-w-[80%] h-auto"
                />
            </div>


            <div className=" flex-1 bg-white min-h-[80vh] max-w-[95%] md:max-w-[90%] mx-auto rounded-md shadow-md border-2 border-gray-200">
                <h1 className="text-2xl font-bold text-center py-8 border-b-2 border-gray-300">Login to Your Account</h1>

                <div className=" flex flex-col justify-center items-center py-8">
                    <form onSubmit={handleSubmit(handleLogIn)}>
                        <fieldset className="fieldset   rounded-box w-xs  p-4">
                            <legend className="fieldset-legend">Login</legend>

                            <label className="label">Email</label>
                            <input type="email" {...register("email", { required: 'email field is required' })} className="input" placeholder="Email" />
                            {errors.email && <p className=" text-red-500">{errors.email.message}</p>}

                            <label className="label">Password</label>
                            <input type="password" {...register("password", { required: 'password field must required' })} className="input" placeholder="Password" />
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