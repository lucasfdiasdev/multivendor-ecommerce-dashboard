"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CiEdit } from "react-icons/ci";
import { BsImage } from "react-icons/bs";

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
import AvatarLarge from "@/components/global/avatar-large";

const ProfileSellerPage = () => {
  const imageUrl = true;
  const userInfo = true;
  const status = "active";

  const [images, setImages] = useState<any[]>([]);
  const [showImages, setShowImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const imageSchema = z.object({
    productImages: z
      .array(z.string({ message: "URL da imagem inválida." }))
      .max(6, { message: "Máximo de 6 imagens." }),
  });

  const formImage = useForm<z.infer<typeof imageSchema>>({
    resolver: zodResolver(imageSchema),
    defaultValues: {
      productImages: [],
    },
  });

  const userInfoSchema = z.object({
    shopName: z.string(),
    division: z.string(),
    distric: z.string(),
    subDistric: z.string(),
  });

  const formUserInfo = useForm<z.infer<typeof userInfoSchema>>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      shopName: "",
      division: "",
      distric: "",
      subDistric: "",
    },
  });

  const editUserInfoSchema = z.object({
    changePassword: z.string(),
    newPassword: z.string(),
    confirmNewPassword: z.string(),
  });

  const formEditUserInfo = useForm<z.infer<typeof editUserInfoSchema>>({
    resolver: zodResolver(editUserInfoSchema),
    defaultValues: {
      changePassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const imageHandle = () => {};

  return (
    <main className="px-4 md:px-8 py-4">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="flex-1 border p-2 rounded-md">
          <div className="flex flex-col gap-4 items-center justify-center my-12 space-y-8">
            {imageUrl ? (
              <AvatarLarge
                width={160}
                height={160}
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar name"
              />
            ) : (
              <Form {...formImage}>
                <form className="flex items-center justify-center ">
                  <label
                    htmlFor="productImages"
                    className="flex items-center justify-center flex-col h-[160px] cursor-pointer border border-dashed w-[160px] rounded-full"
                  >
                    <BsImage size={32} className="text-gray-400" />
                    <span className="text-sm text-gray-500">
                      Selecionar Imagens
                    </span>
                  </label>
                  <FormField
                    control={formImage.control}
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
                            className="hidden"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            )}

            <div className="w-80 flex flex-col items-start p-2 space-y-2 relative">
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="">Nome:</label>
                <label htmlFor="">Joe doe</label>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="">Email:</label>
                <label htmlFor="">email@exemplo.com</label>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="">Role:</label>
                <label htmlFor="">admin</label>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="">Status:</label>
                <label htmlFor="">Ativo</label>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="">Payment Account:</label>
                <label htmlFor="">
                  {status === "active" ? (
                    <span>Pendente</span>
                  ) : (
                    <span>Clique para ativar</span>
                  )}
                </label>
              </div>
              <button className="flex items-center justify-center absolute top-0 right-0 bg-slate-700 rounded-md text-white h-8 w-8">
                <CiEdit />
              </button>
            </div>
            {!userInfo ? (
              <Form {...formUserInfo}>
                <form className="w-80 p-2 space-y-2 relative">
                  <FormField
                    control={formUserInfo.control}
                    name="shopName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da Loja</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isLoading}
                            placeholder="Nome da Loja"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formUserInfo.control}
                    name="division"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Divisão</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isLoading}
                            placeholder="Divisão"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formUserInfo.control}
                    name="distric"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Divisão</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isLoading}
                            placeholder="Divisão"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={formUserInfo.control}
                    name="subDistric"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Divisão</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isLoading}
                            placeholder="Sub Divisão"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Enviar</Button>
                </form>
              </Form>
            ) : (
              <div className="w-80 flex flex-col items-start p-2 space-y-2 relative">
                <div className="flex items-center gap-2 text-sm">
                  <label htmlFor="">Shop Name:</label>
                  <label htmlFor="">Tanamao</label>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <label htmlFor="">Divission:</label>
                  <label htmlFor="">Brazil</label>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <label htmlFor="">District:</label>
                  <label htmlFor="">Dhaka</label>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <label htmlFor="">Uploja:</label>
                  <label htmlFor="">Ativo</label>
                </div>
                <button className="flex items-center justify-center absolute top-0 right-0 bg-slate-700 rounded-md text-white h-8 w-8">
                  <CiEdit />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center border h-fit p-2 rounded-md">
          <h2>Edit User Profile </h2>
          <Form {...formEditUserInfo}>
            <form className="w-80 p-2 space-y-4 relative">
              <FormField
                control={formEditUserInfo.control}
                name="changePassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Change Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="Change Password"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formEditUserInfo.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="New Password"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formEditUserInfo.control}
                name="confirmNewPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        placeholder="Confirm New Password"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Enviar</Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default ProfileSellerPage;
