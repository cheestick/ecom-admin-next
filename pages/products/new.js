import { useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import { Notify } from "notiflix";
import { useRouter } from "next/router";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !price) {
      return Notify.failure("Title and price must be provided");
    }

    const data = { title, description, price };
    const { status, data: product } = await axios.post("/api/products", data);
    if (status === 201) {
      Notify.success(`${product.title} was created`);
      handleReset();
      router.push("/products");
    }
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <Layout>
      <main>
        <form onSubmit={handleSubmit} onReset={handleReset} autoComplete="off">
          <h1 className="text-2xl text-blue-800">New Product</h1>
          <div className="flex flex-col gap-0">
            <label htmlFor="productname">Product name</label>
            <input
              id="productname"
              type="text"
              placeholder="Sunny Gadget"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="This is the best product..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="price">Price (in USD)</label>
            <input
              id="price"
              type="text"
              placeholder="$10.99"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit" className="btn__primary mt-10 self-end">
              Save
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default NewProduct;
