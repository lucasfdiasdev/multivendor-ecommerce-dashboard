"use client";

import * as z from "zod";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { loginSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/global/forms";
import { Input } from "@/components/global/input";
import { Button } from "@/components/global/button";
import SocialAuthForm from "@/components/auth/social-auth-form";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formLogin = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitLogin: SubmitHandler<z.infer<typeof loginSchema>> = async (
    data
  ) => {
    console.log(data);
    setIsLoading(true);

    try {
    } catch (error) {}
  };

  return (
    <>
      <Form {...formLogin}>
        <form
          onSubmit={formLogin.handleSubmit(onSubmitLogin)}
          className="space-y-4 w-full"
        >
          <FormField
            control={formLogin.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder="email@exemplo.com"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formLogin.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder="********"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" disabled={isLoading} type="submit">
            Continuar
          </Button>
        </form>
      </Form>
      <div className="mt-4">
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#161d31] text-gray-500">
              Ou continue com
            </span>
          </div>
        </div>
        <SocialAuthForm />
      </div>

      <p className="text-center text-sm text-gray-500">
        Ainda não possui uma conta?{" "}
        <Link href="/register" className="text-blue-500 underline">
          Clique aqui
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
