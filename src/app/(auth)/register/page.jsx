'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

       const router = useRouter()


        const {register,handleSubmit,watch, formState: { errors }}=useForm()
    const handleSignUp=async(data)=>{
console.log(data)
const { data:res, error } = await authClient.signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
    image: data.photo,
    callbackUrl: "/"
});
console.log(res, error,data.name, data.email, data.password, data.photo)
if (error) {
    toast.error(`Sign up failed: ${error.message}`)
} else if (res) {
    toast.success("Sign up successful!")
    router.push("/myprofile")
}
}

    return (
          <div className="">
            <div className=" bg-white min-h-[80vh] max-w-125 mx-auto rounded-md shadow-md border-2 border-gray-200">
                <h1 className="text-2xl font-bold text-center py-8 border-b-2 border-gray-300">Register Your Account</h1>

                <div className=" flex flex-col justify-center items-center py-8">
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <fieldset className="fieldset   rounded-box w-xs  p-4">
                            <legend className="fieldset-legend">Register</legend>

                             <label className="label">Name</label>
                            <input type="text" {...register("name",{ required: 'name field is required' })} className="input" placeholder="Name" />
                             {errors.name && <p className=" text-red-500">{errors.name.message}</p>}

                              <label className="label">Photo URL</label>
                            <input type="text" {...register("photo",{ required: 'Photo URL field is required' })} className="input" placeholder="Photo URL" />
                             {errors.photo && <p className=" text-red-500">{errors.photo.message}</p>}

                            <label className="label">Email</label>
                            <input type="email" {...register("email",{ required: 'email field is required' })} className="input" placeholder="Email" />
                             {errors.email && <p className=" text-red-500">{errors.email.message}</p>}

                            <label className="label">Password</label>
                            <input type="password" {...register("password",{ required: 'password field must required' })} className="input" placeholder="Password" />
                            {errors.password && <p className=" text-red-500">{errors.password.message}</p>}

                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className=" text-center font-semibold">Have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;