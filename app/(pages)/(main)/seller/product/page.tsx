"use client";

import { format } from "date-fns";

import useProduct from "@/hooks/useProduct";

import ProductClient from "./_components/client";
import { ProductColumn } from "./_components/column";

const ProductSellerPage = () => {
  const { products } = useProduct();

  const formatedProduct: ProductColumn[] = products.map((item: any) => ({
    _id: item._id,
    product_name: item.product_name.slice(0, 16),
    product_image: item.images[0],
    product_price: item.product_price,
    product_brand: item.product_brand,
    product_discount: item.product_discount,
    product_stock: item.product_stock,
    departament: item.departament,
    createdAt: format(new Date(item.createdAt), "dd/MM/yyyy"),
  }));

  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <ProductClient data={formatedProduct} />
      </div>
    </main>
  );
};

export default ProductSellerPage;
