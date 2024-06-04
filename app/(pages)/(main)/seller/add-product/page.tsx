import Heading from "@/components/global/heading";
import { Separator } from "@/components/ui/separator";
import ProductForm from "@/components/forms/product-form";

const AddProductPage = () => {
  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 px-8">
        <div className="flex items-center justify-between">
          <Heading
            title="Criar novo produto"
            description="Crie produtos no marketplace"
          />
        </div>
        <Separator />

        <ProductForm />
      </div>
    </main>
  );
};

export default AddProductPage;
