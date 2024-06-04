"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

import { BsImage } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import useUser from "@/hooks/useUser";
import useDepartament from "@/hooks/useDepartament";
import useProductStore from "@/store/use-product-store";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProductForm = () => {
  const { user } = useUser();
  const { departaments } = useDepartament();

  const addProduct = useProductStore((state: any) => state.addProduct);

  const [images, setImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showImages, setShowImages] = useState<{ url: string }[]>([]);

  const [state, setState] = useState({
    product_name: "",
    product_description: "",
    product_discount: "",
    product_price: "",
    product_brand: "",
    product_stock: "",
    departament: "",
  });

  const imageHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

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

  const removeImage = (i: number) => {
    const filterImage = images.filter((file, index) => index !== i);
    const fiterImageUrl = showImages.filter((file, index) => index !== i);

    setImages(filterImage);
    setShowImages(fiterImageUrl);
  };

  const add_product = async (e: any) => {
    try {
      e.preventDefault();

      setIsLoading(true);

      await addProduct({
        ...state,
        images,
        sellerId: user._id,
      });

      toast.success("Produto adicionado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao adicionar o produto.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={add_product} className="w-full space-y-8">
      {/* col-1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="product_name" className="text-sm font-semibold">
            Nome do Produto
          </label>
          <Input
            id="product_name"
            value={state.product_name}
            onChange={(e) =>
              setState({ ...state, product_name: e.target.value })
            }
            placeholder="Nome do Produto"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="product_price" className="text-sm font-semibold">
            Preco
          </label>
          <Input
            id="product_price"
            value={state.product_price}
            onChange={(e) =>
              setState({ ...state, product_price: e.target.value })
            }
            placeholder="Preco do produto"
            type="number"
            required
          />
        </div>
      </div>
      {/* col-2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="product_discount" className="text-sm font-semibold">
            Desconto
          </label>
          <Input
            id="product_discount"
            value={state.product_discount}
            onChange={(e) =>
              setState({ ...state, product_discount: e.target.value })
            }
            placeholder="Preco do produto"
            type="number"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="categoria" className="text-sm font-semibold">
            Departamentos
          </label>
          <select
            disabled={isLoading}
            onChange={(e) =>
              setState({ ...state, departament: e.target.value })
            }
            value={state.departament}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Selecione...</option>
            {departaments.map((departament) => (
              <option
                key={departament._id}
                value={departament.departament_name}
              >
                {departament.departament_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* col-3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="product_stock" className="text-sm font-semibold">
            Produtos em Estoque
          </label>
          <Input
            id="product_stock"
            value={state.product_stock}
            onChange={(e) =>
              setState({ ...state, product_stock: e.target.value })
            }
            placeholder="Estoque"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="product_brand" className="text-sm font-semibold">
            Brand
          </label>
          <Input
            id="product_brand"
            value={state.product_brand}
            onChange={(e) =>
              setState({ ...state, product_brand: e.target.value })
            }
            placeholder="Brand"
            type="text"
            required
          />
        </div>
      </div>

      {/* col-4 */}
      <div className="flex flex-col gap-1">
        <label htmlFor="product_description" className="text-sm font-semibold">
          Descricao
        </label>
        <textarea
          rows={5}
          cols={30}
          placeholder="Descrição do produto"
          disabled={isLoading}
          id="product_description"
          value={state.product_description}
          onChange={(e) =>
            setState({ ...state, product_description: e.target.value })
          }
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        ></textarea>
      </div>

      {/* col-5 */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-[80%] mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="images" className="text-sm font-semibold">
            Imagens do produto
          </label>

          {showImages.map((image, i) => (
            <label key={i} className="relative w-full h-[140px] cursor-pointer">
              <Image
                width={140}
                height={140}
                src={image.url}
                alt={`Image ${i + 1}`}
                className="object-cover object-center w-full h-full rounded-md"
              />
              <input
                id="images"
                name="images"
                type="file"
                onChange={(e) =>
                  e.target.files && changeImage(e.target.files[0], i)
                }
                className="hidden"
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
                htmlFor="image-upload"
                className="flex items-center justify-center flex-col h-[140px] cursor-pointer border border-dashed w-full rounded-md"
              >
                <BsImage size={32} className="text-gray-400" />
                <span className="text-sm text-gray-500">
                  Selecionar Imagens
                </span>
              </label>
              <input
                id="image-upload"
                disabled={isLoading}
                type="file"
                multiple
                onChange={imageHandle}
                className="hidden"
              />
            </>
          )}
        </div>
      </div>

      <Button type="submit" disabled={isLoading}>
        Adicionar Produto
      </Button>
    </form>
  );
};

export default ProductForm;
