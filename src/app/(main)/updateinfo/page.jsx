'use client'
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateInfoPage = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

   const router = useRouter()
       const redirectPath = useSearchParams().get("redirect") || "/myprofile"

   const handleUpdate = async (data) => {
        console.log(data)
        const { data: res, error } = await authClient.updateUser({
            name: data.name,
            image: data.photo
        });
        console.log(res, error, data.name, data.email, data.password, data.photo)
        if (error) {
            toast.error(`Update failed: ${error.message}`)
        } else if (res) {
            toast.success("Update successful!")
            router.push("/myprofile")
        }
    }

    return (
        <div>
              <div className=" flex flex-col justify-center items-center py-8">
                    <form onSubmit={handleSubmit(handleUpdate)}>
                        <fieldset className="fieldset   rounded-box w-xs  p-4">
                            <legend className="fieldset-legend">Update Information</legend>

                   
                            <label className="label">Name</label>
                            <input type="text" {...register("name", { required: 'name field is required' })} className="input" placeholder="Name" />
                            {errors.name && <p className=" text-red-500">{errors.name.message}</p>}

                            <label className="label">Photo URL</label>
                            <input type="text" {...register("photo", { required: 'Photo URL field is required' })} className="input" placeholder="Photo URL" />
                            {errors.photo && <p className=" text-red-500">{errors.photo.message}</p>}


                            <button className="btn btn-neutral mt-4"> Update Info</button>
                        </fieldset>
                    </form>
                 
                
                </div>
        </div>
    );
};

export default UpdateInfoPage;