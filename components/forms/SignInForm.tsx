"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SignInFormSchema, TSignInFormSchema } from "@/lib/types/types";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { RiLoader5Fill } from "react-icons/ri";
import MessageWithIcon from "../MessageWithIcon";
import FormNavLink from "./FormNavLink";
import { ToastContainer, toast } from "react-toastify";

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<TSignInFormSchema>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: TSignInFormSchema) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      toast.error(`Incorrect Credentials`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      form.reset();
    } else {
      router.refresh();
      router.push("/profile");
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2 items-center"
    >
      <ToastContainer />
      <input
        type="email"
        placeholder="email"
        {...form.register("email")}
        disabled={form.formState.isSubmitting}
      />
      <input
        type="password"
        placeholder="password"
        {...form.register("password")}
        disabled={form.formState.isSubmitting}
      />
      <button type="submit" disabled={form.formState.isSubmitting}>
        Submit
      </button>
      <div>
        <MessageWithIcon
          message={form.formState.errors.email?.message}
          icon={<MdEmail className="size-6" />}
          className="flex-row text-red-700"
        />
        <MessageWithIcon
          message={form.formState.errors.password?.message}
          icon={<FaKey className="size-5" />}
          className="flex-row text-red-700"
        />
      </div>
      {form.formState.isSubmitting ? (
        <RiLoader5Fill className="animate-spin w-100 h-100" />
      ) : null}
      <FormNavLink
        message={`If you don't have an account, please `}
        buttonMessage="Sign up"
        href="/sign-up"
      />
    </form>
  );
};

export default SignInForm;
