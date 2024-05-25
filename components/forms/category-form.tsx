"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { BsImage } from "react-icons/bs";

import useCategoryStore from "@/store/use-category-store";

import { Input } from "@/components/global/input";
import { Button } from "@/components/global/button";

const CategoryForm = () => {
  const add_categories = useCategoryStore((state: any) => state.add_category);

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
    await add_categories(state);
  };

  useEffect(() => {
    setState({
      name: "",
      image: null,
    });
    setImageShow("");
  }, []);

  return (
    <form onSubmit={add_category} className="space-y-4 w-full">
      <div className="flex flex-col ">
        <label htmlFor="name">Nome</label>
        <Input
          id="name"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          placeholder="Nome da Categoria"
          type="text"
        />
      </div>
      <div>
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
      <Button type="submit" className="w-full">
        Adicionar Categoria
      </Button>
    </form>
  );
};

export default CategoryForm;
