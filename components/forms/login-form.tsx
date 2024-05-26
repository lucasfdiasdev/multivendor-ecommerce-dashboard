"use client";

import * as z from "zod";
import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { loginSchema } from "@/utils/schema";
import { useSellerStore } from "@/store/use-seller-store";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SocialAuthForm from "@/components/forms/social-auth-form";

const LoginForm = () => {
  const seller_login = useSellerStore((state) => state.seller_login);

  const [isLoading, setIsLoading] = useState(false);

  const formLogin = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      await seller_login(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const onSubmitLogin: SubmitHandler<z.infer<typeof loginSchema>> = async (
    data
  ) => {
    handleLogin(data);
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
