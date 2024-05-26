"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { BsImage } from "react-icons/bs";

import useCategoryStore from "@/store/use-category-store";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CategoryForm = () => {
  const router = useRouter();
  const addCategory = useCategoryStore((state: any) => state.addCategory);

  const [imageShow, setImageShow] = useState("");
  const [state, setState] = useState({
    name: "",
    image: null as File | null,
  });

  const imageHandler = (e: any) => {
    let file = e.target.files;

    if (file.length > 0) {
      setImageShow(URL.createObjectURL(file[0]));
      setState({
        ...state,
        image: file[0],
      });
    }
  };

  const add_category = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addCategory(state);
    const response = await addCategory(state);
    if (response) {
      setState({
        name: "",
        image: null,
      });
      setImageShow("");
      router.back();
    }
  };

  useEffect(() => {
    setState({
      name: "",
      image: null,
    });
    setImageShow("");
  }, []);

  return (
    <form onSubmit={add_category} className="space-y-8 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-semibold">
            Nome
          </label>
          <Input
            id="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            placeholder="Nome da Categoria"
            type="text"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-semibold">
            Imagem
          </label>

          <label
            htmlFor="image"
            className="flex items-center justify-center flex-col h-[238px] cursor-pointer border border-dashed w-full rounded-md"
          >
            {imageShow ? (
              <Image
                width={150}
                height={238}
                src={imageShow}
                alt={imageShow}
                className="object-cover object-center w-full h-[238px] rounded-md"
              />
            ) : (
              <>
                <BsImage size={32} className="text-gray-400" />
                <span className="text-sm text-gray-500">Selecionar Imagem</span>
              </>
            )}
          </label>
          <input
            id="image"
            type="file"
            name="image"
            onChange={imageHandler}
            className="hidden"
            required
          />
        </div>
      </div>
      <Button type="submit">Adicionar Categoria</Button>
    </form>
  );
};

export default CategoryForm;
