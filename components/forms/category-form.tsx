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
  const [addSubcategoryInput, setAddSubcategoryInput] = useState<
    Array<{ id: number }>
  >([]);
  const addDepartament = useCategoryStore((state: any) => state.addDepartament);

  const addInput = () => {
    setAddSubcategoryInput([
      ...addSubcategoryInput,
      { id: addSubcategoryInput.length },
    ]);
  };

  const [imageShow, setImageShow] = useState("");
  const [state, setState] = useState({
    departament_name: "",
    departament_image: null as File | null,
  });

  const imageHandler = (e: any) => {
    let file = e.target.files;

    if (file.length > 0) {
      setImageShow(URL.createObjectURL(file[0]));
      setState({
        ...state,
        departament_image: file[0],
      });
    }
  };

  const add_category = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await addDepartament(state);

    if (response) {
      setState({
        departament_name: "",
        departament_image: null,
      });
      setImageShow("");
      router.back();
    }
  };

  useEffect(() => {
    setState({
      departament_name: "",
      departament_image: null,
    });
    setImageShow("");
  }, []);

  return (
    <form onSubmit={add_category} className="space-y-8 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="departament_name" className="text-sm font-semibold">
            Nome do Departamento
          </label>
          <Input
            id="departament_name"
            value={state.departament_name}
            onChange={(e) =>
              setState({ ...state, departament_name: e.target.value })
            }
            placeholder="Nome Departamento"
            type="text"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="departament_image" className="text-sm font-semibold">
            Imagem do Departamento
          </label>

          <label
            htmlFor="departament_image"
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
            id="departament_image"
            type="file"
            name="departament_image"
            onChange={imageHandler}
            className="hidden"
            required
          />
        </div>
      </div>
      <Button type="submit">Adicionar Departamento</Button>
    </form>
  );
};

export default CategoryForm;
