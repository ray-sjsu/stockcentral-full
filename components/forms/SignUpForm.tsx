"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignUpFormSchema, TSignUpFormSchema } from "@/lib/types/types";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { RiLoader5Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<TSignUpFormSchema>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: TSignUpFormSchema) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });

    if (response.ok) {
      router.push("/sign-in");
    } else {
      const responseData = await response.json();
      toast.error(`${responseData.message}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-2 items-center text-red-500"
      >
        <input
          type="text"
          placeholder="username"
          {...form.register("username")}
        />
        <input type="email" placeholder="email" {...form.register("email")} />
        <input
          type="password"
          placeholder="password"
          {...form.register("password")}
        />
        <input
          type="password"
          placeholder="confirmPassword"
          {...form.register("confirmPassword")}
        />
        <button type="submit">Sign Up</button>
        <div>
          {form.formState.errors.username ? (
            <div className="flex flex-row items-center justify-center gap-2">
              <FaUser />
              <p className="text-2xl">
                {`${form.formState.errors.username?.message}`}
              </p>
            </div>
          ) : null}
          {form.formState.errors.email ? (
            <div className="flex flex-row items-center justify-center gap-2">
              <MdEmail />
              <p className="text-2xl">
                {`${form.formState.errors.email?.message}`}
              </p>
            </div>
          ) : null}
          {form.formState.errors.password ? (
            <div className="flex flex-row items-center justify-center gap-2">
              <FaKey />
              <p className="text-2xl">
                {`${form.formState.errors.password?.message}`}
              </p>
            </div>
          ) : null}
          {form.formState.errors.confirmPassword ? (
            <div className="flex flex-row items-center justify-center gap-2">
              <FaKey />
              <p className="text-2xl">
                {`${form.formState.errors.confirmPassword?.message}`}
              </p>
            </div>
          ) : null}
        </div>
        {form.formState.isSubmitting ? (
          <RiLoader5Fill className="animate-spin w-100 h-100" />
        ) : null}
      </form>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you do have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-in">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
