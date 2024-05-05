"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SignUpFormSchema, TSignUpFormSchema } from "@/lib/types/types";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { RiLoader5Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessageWithIcon from "../MessageWithIcon";
import FormNavLink from "./FormNavLink";

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
      toast.success(`Account ${values.username} created successfully`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/sign-in");
    } else {
      const responseData = await response.json();
      toast.error(`${responseData.message}`, {
        position: "top-center",
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
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2 items-center"
    >
      <ToastContainer />
      <input
        type="text"
        placeholder="username"
        {...form.register("username")}
        disabled={form.formState.isSubmitting}
      />
      <input type="email" placeholder="email" {...form.register("email")} />
      <input
        type="password"
        placeholder="password"
        {...form.register("password")}
        disabled={form.formState.isSubmitting}
      />
      <input
        type="password"
        placeholder="confirmPassword"
        {...form.register("confirmPassword")}
        disabled={form.formState.isSubmitting}
      />
      <button
        type="submit"
        disabled={form.formState.isSubmitting}
      >
        Submit
      </button>
      <div>
        <MessageWithIcon
          message={form.formState.errors.username?.message}
          icon={<FaUser />}
        />
        <MessageWithIcon
          message={form.formState.errors.email?.message}
          icon={<MdEmail />}
        />
        <MessageWithIcon
          message={form.formState.errors.password?.message}
          icon={<FaKey />}
        />
        <MessageWithIcon
          message={form.formState.errors.confirmPassword?.message}
          icon={<FaKey />}
        />
      </div>
      {form.formState.isSubmitting ? (
        <RiLoader5Fill className="animate-spin w-100 h-100" />
      ) : null}
      <FormNavLink
        message={`If you do have an account, please `}
        buttonMessage="Sign in"
        href="/sign-in"
      />
    </form>
  );
};

export default SignUpForm;
