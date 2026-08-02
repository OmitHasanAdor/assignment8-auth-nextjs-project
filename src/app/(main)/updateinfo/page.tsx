"use client";

import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";

type UpdateFormData = {
  name: string;
  photo: string;
};

const UpdateInfoPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateFormData>();

  const handleUpdate = async (data: UpdateFormData) => {
    const { data: res, error } = await authClient.updateUser({
      name: data.name,
      image: data.photo,
    });

    if (error) {
      toast.error(`Update failed: ${error.message}`);
    } else if (res) {
      toast.success("Profile updated successfully!");
      router.push("/myprofile");
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-sky-50 via-white to-cyan-50 px-6 py-20">
      {/* Glow */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-2xl backdrop-blur-xl"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-3xl text-white shadow-lg">
            <FaUserEdit />
          </div>

          <h2 className="mt-5 text-3xl font-bold text-slate-800">
            Update Profile
          </h2>

          <p className="mt-2 text-slate-500">
            Keep your profile information up to date.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Photo */}
          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Photo URL
            </label>

            <input
              type="text"
              {...register("photo", {
                required: "Photo URL is required",
              })}
              placeholder="https://example.com/photo.jpg"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {errors.photo && (
              <p className="mt-2 text-sm text-red-500">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-md" />
            ) : (
              "Update Profile"
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default UpdateInfoPage;