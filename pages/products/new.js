import { useState } from "react";
import Layout from "@/components/Layout";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <Layout>
      <main>
        <h1 className="text-2xl text-blue-800">New Product</h1>
        <div className="flex flex-col gap-0">
          <label htmlFor="productname">Product name</label>
          <input id="productname" type="text" placeholder="Sunny Gadget" />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="This is the best product..."
          />
          <label htmlFor="price">Price (in USD)</label>
          <input id="price" type="text" placeholder="$10.99" />
          <button type="button" className="btn__primary mt-10 self-end">
            Save
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default NewProduct;
