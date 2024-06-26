"use client";

import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { loginSchema } from "@/utils/schema";
import useAdminStore from "@/store/use-admin-store";
import { zodResolver } from "@hookform/resolvers/zod";

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

const AdminLoginForm = () => {
  const router = useRouter();
  const { admin_login } = useAdminStore((state: any) => ({
    admin_login: state.admin_login,
  }));

  const [isLoading, setIsLoading] = useState(false);

  const formLogin = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitAdminLogin: SubmitHandler<
    z.infer<typeof loginSchema>
  > = async (data: { email: string; password: string }) => {
    setIsLoading(true);

    try {
      await admin_login(data);
      router.push("/owner/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Form {...formLogin}>
      <form
        onSubmit={formLogin.handleSubmit(onSubmitAdminLogin)}
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
  );
};

export default AdminLoginForm;
