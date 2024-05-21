"use client";

import * as z from "zod";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { BsImage } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

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

const AddProductSellerPage = () => {
  const [images, setImages] = useState<any[]>([]);
  const [showImages, setShowImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const validDiscount = ["Salmon", "Tuna", "Trout"] as const;
  const validCategories = ["Esportes", "Camisas", "Calças"] as const;

  const productSchema = z.object({
    productName: z
      .string({ message: "Nome obrigatório." })
      .min(3, { message: "Nome deve conter 3 no mínimo caracteres." })
      .regex(/^[a-zA-Z\s]+$/),
    productDescription: z
      .string({ message: "Nome obrigatório." })
      .min(3, { message: "Nome deve conter 3 no mínimo caracteres." })
      .max(350, { message: "Maximo de 350 caracteres" })
      .regex(/^[a-zA-Z\s]+$/),
    productBrand: z
      .string({ message: "Nome obrigatório." })
      .min(3, { message: "Nome deve conter 3 no mínimo caracteres." })
      .regex(/^[a-zA-Z\s]+$/),
    productPrice: z.number({ message: "Preço obrigatório." }),
    productCategory: z.enum(validCategories, {
      message: "Categoria é obrigatório.",
    }),
    productDiscount: z.enum(validDiscount),
    productStock: z.number({
      message: "Quantidade do produto em estoque obrigatório.",
    }),
    productImages: z
      .array(z.string({ message: "URL da imagem inválida." }))
      .max(6, { message: "Máximo de 6 imagens." }),
  });

  const formProduct = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: "",
      productBrand: "",
      productPrice: 0,
      productCategory: "Esportes" || "Camisas" || "Calças",
      productDiscount: "Salmon" || "Tuna" || "Trout",
      productStock: 0,
      productDescription: "",
      productImages: [],
    },
  });

  const imageHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const totalImages = images.length + files.length;
    const newImages = [...images];
    const newShowImages = [...showImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const alreadyExists = newImages.some((image) => image.name === file.name);

      if (!alreadyExists) {
        if (totalImages <= 6) {
          newImages.push(file);
          newShowImages.push({ url: URL.createObjectURL(file) });
        } else if (newImages.length < 6) {
          newImages.push(file);
          newShowImages.push({ url: URL.createObjectURL(file) });
          newImages.splice(0, newImages.length - 6);
          newShowImages.splice(0, newShowImages.length - 6);
        }
      }
    }

    setImages(newImages);
    setShowImages(newShowImages);
    e.target.value = "";
  };

  console.log(images);
  console.log(showImages);

  const onSubmitAddProduct: SubmitHandler<
    z.infer<typeof productSchema>
  > = async (data) => {
    setIsLoading(true);

    try {
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const changeImage = (file: File, index: number) => {
    if (file) {
      const newImages = [...images];
      const newShowImages = [...showImages];

      newImages[index] = file;
      newShowImages[index] = { url: URL.createObjectURL(file) };

      setImages(newImages);
      setShowImages(newShowImages);
    }
  };

  const removeImage = (i: any) => {
    const filterImage = images.filter((file, index) => index !== i);
    const fiterImageUrl = showImages.filter((file, index) => index !== i);

    setImages(filterImage);
    setShowImages(fiterImageUrl);
  };
  return (
    <main className="px-4 md:px-8 py-4">
      <div className="w-full p-2 border rounded-md space-y-8">
        <h2 className="text-xl font-semibold">Adicionar produtos</h2>
        <Form {...formProduct}>
          <form
            onSubmit={formProduct.handleSubmit(onSubmitAddProduct)}
            className="w-full space-y-8"
          >
            {/* col-1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={formProduct.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="Nome do produto"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formProduct.control}
                name="productBrand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="Brand do produto"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* col-2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={formProduct.control}
                name="productCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        disabled={isLoading}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Selecione...</option>
                        {validCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formProduct.control}
                name="productStock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estoque</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="Quantidade de produto em estoque"
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* col-3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={formProduct.control}
                name="productPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="Preço do produto"
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formProduct.control}
                name="productDiscount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desconto</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        disabled={isLoading}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Selecione...</option>
                        {validDiscount.map((discount) => (
                          <option key={discount} value={discount}>
                            {discount}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* col-4 */}
            <FormField
              control={formProduct.control}
              name="productDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição do produto</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      disabled={isLoading}
                      placeholder="Descrição do produto"
                      cols={30}
                      rows={4}
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* col-5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-[80%] mb-4">
              {showImages.map((image, i) => (
                <label
                  key={i}
                  className="relative w-full h-[140px] cursor-pointer"
                >
                  <Image
                    fill
                    src={image.url}
                    alt={image.url}
                    className="object-cover object-center w-full h-full rounded-md"
                  />
                  <FormField
                    control={formProduct.control}
                    name="productImages"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="file"
                            onChange={(e) =>
                              e.target.files &&
                              changeImage(e.target.files[0], i)
                            }
                            className="hidden"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    onClick={() => removeImage(i)}
                    className="flex items-center justify-center text-white absolute z-10 -top-2 -right-2 bg-slate-800 rounded-full h-6 w-6"
                  >
                    <IoMdClose />
                  </button>
                </label>
              ))}

              {showImages.length < 6 && (
                <>
                  <label
                    htmlFor="productImages"
                    className="flex items-center justify-center flex-col h-[140px] cursor-pointer border border-dashed w-full rounded-md"
                  >
                    <BsImage size={32} className="text-gray-400" />
                    <span className="text-sm text-gray-500">
                      Selecionar Imagens
                    </span>
                  </label>
                  <FormField
                    control={formProduct.control}
                    name="productImages"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isLoading}
                            type="file"
                            multiple
                            onChange={imageHandle}
                            // className="hidden"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>

            <Button type="submit" disabled={isLoading}>
              Adicionar Produto
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default AddProductSellerPage;
