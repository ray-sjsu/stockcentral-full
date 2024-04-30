"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SignInFormSchema, TSignInFormSchema } from "@/lib/types/types";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { RiLoader5Fill } from "react-icons/ri";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

const SignInForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("")
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
      setErrorMessage(signInData?.error)
      form.reset()
    } else {
      router.refresh();
      router.push("/profile");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-2 items-center text-red-500">
      <input type="email" placeholder="email" {...form.register("email")} disabled={form.formState.isSubmitting} />
      <input
        type="password"
        placeholder="password"
        disabled={form.formState.isSubmitting}
        {...form.register("password")}
      />
      <button type="submit" disabled={form.formState.isSubmitting}>Submit</button>
      <div>
        {
          form.formState.errors.email ? (
            <div className="flex flex-row items-center justify-center gap-2">
            <MdEmail />
            <p className="text-2xl">
              {`${form.formState.errors.email?.message}`}
            </p>
        </div>
          ) : null
        }
        {
          form.formState.errors.password ? (
            <div className="flex flex-row items-center justify-center gap-2">
            <FaKey />
            <p className="text-2xl">
              {`${form.formState.errors.password?.message}`}
            </p>
        </div>
          ) : null
        }
        {
          errorMessage ? (
            <div className="flex flex-row items-center justify-center gap-2">
            <FaExclamationCircle />
            <p className="text-2xl">
              {`${errorMessage}`}
            </p>
        </div>
          ) : null
        }
      </div>
      {
        form.formState.isSubmitting ? (
          <RiLoader5Fill className="animate-spin w-100 h-100" />
        ) : null
      }
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don&apos;t have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-up">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
