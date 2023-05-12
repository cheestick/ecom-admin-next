import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";

const NewProductPage = () => {
  return (
    <Layout>
      <main>
        <h1 className="text-2xl text-blue-800">New Product</h1>
        <ProductForm />
      </main>
    </Layout>
  );
};

export default NewProductPage;
