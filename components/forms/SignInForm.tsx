"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SignInFormSchema, TSignInFormSchema } from "@/lib/types/types";


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
      // add error handling (toast?)
    } else {
      router.refresh();
      router.push("/profile");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-60 flex flex-col gap-2 mt-20 items-center text-red-500">
      <input type="email" placeholder="email" {...form.register("email")} />
      <input
        type="password"
        placeholder="password"
        {...form.register("password")}
      />
      <button type="submit">Submit</button>
      {
        form.formState.errors ? <h1>There is an error</h1> : null
      }
      {
        form.formState.isSubmitting ? <h1>Currently submitting</h1> : <h1>Not submitting</h1>
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
