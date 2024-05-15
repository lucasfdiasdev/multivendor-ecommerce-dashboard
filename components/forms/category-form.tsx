"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BsImage } from "react-icons/bs";
import { categorySchema } from "@/utils/schema";

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

const CategoryForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formsCategory = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      categoryName: "",
      categoryImage: "",
    },
  });

  return (
    <Form {...formsCategory}>
      <form
        // onSubmit={formsCategory.handleSubmit(onSubmitAdminLogin)}
        className="space-y-4 w-full"
      >
        <FormField
          control={formsCategory.control}
          name="categoryName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Categoria</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isLoading}
                  placeholder="Categoria"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <label
            htmlFor="categoryImage"
            className="flex items-center justify-center flex-col h-[238px] cursor-pointer border border-dashed w-full rounded-md"
          >
            <BsImage size={32} className="text-gray-400" />
            <span className="text-sm text-gray-500">Selecionar Imagem</span>
          </label>
          <FormField
            control={formsCategory.control}
            name="categoryImage"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isLoading}
                    type="file"
                    className="hidden"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full">Adicionar Categoria</Button>
      </form>
    </Form>
  );
};

export default CategoryForm;
