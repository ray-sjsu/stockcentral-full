"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignUpFormSchema, TSignUpFormSchema } from "@/lib/types/types";



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
      // add error handling
    }
  };

  return (
    <div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-60 flex flex-col gap-2 mt-20 items-center text-red-500"
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
        {form.formState.errors ? <h1>{form.formState.errors.username?.message}</h1> : null}
        {form.formState.isSubmitting ? (
          <h1>Currently submitting</h1>
        ) : (
          <h1>Not submitting</h1>
        )}
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
