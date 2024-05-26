import Heading from "@/components/global/heading";
import { Separator } from "@/components/ui/separator";
import CategoryForm from "@/components/forms/category-form";

const CategoryIdOwnerPage = () => {
  return (
    <main className="flex-col">
      <div className="flex-1 space-y-4 px-8">
        <div className="flex items-center justify-between">
          <Heading
            title="Criar nova categoria"
            description="Adicionar categorias no marketplace"
          />
        </div>
        <Separator />

        <CategoryForm />
      </div>
    </main>
  );
};

export default CategoryIdOwnerPage;
