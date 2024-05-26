"use client";

import * as z from "zod";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { registerSchema } from "@/utils/schema";
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

const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const seller_register = useSellerStore((state: any) => state.seller_register);

  const formSellerRegister = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      confirmCheck: false,
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmitRegister: SubmitHandler<
    z.infer<typeof registerSchema>
  > = async (data) => {
    setIsLoading(true);

    try {
      await seller_register(data);

      router.push("/seller/dashboard");

      setIsLoading(true);
    } catch (error) {
      console.log(error);

      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...formSellerRegister}>
        <form
          onSubmit={formSellerRegister.handleSubmit(onSubmitRegister)}
          className="space-y-4 w-full"
        >
          <FormField
            control={formSellerRegister.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    placeholder="Nome"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formSellerRegister.control}
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
            control={formSellerRegister.control}
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
          <FormField
            control={formSellerRegister.control}
            name="confirmCheck"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="text-gray-100 cursor-pointer"
                      disabled={isLoading}
                      checked={formSellerRegister.getValues("confirmCheck")}
                      onChange={() => {
                        formSellerRegister.setValue(
                          "confirmCheck",
                          !formSellerRegister.getValues("confirmCheck")
                        );
                      }}
                    />
                    <p>Li e aceito os termos.</p>
                  </div>
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
        Já possui uma conta?{" "}
        <Link href="/login" className="text-blue-500 underline">
          Faça login
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
