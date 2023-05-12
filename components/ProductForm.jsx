import { useState } from "react";
import axios from "axios";
import { Notify } from "notiflix";
import { useRouter } from "next/router";

const ProductForm = ({
  _id,
  title: existingTitle = "",
  description: existingDescription = "",
  price: existingPrice = "",
}) => {
  const [title, setTitle] = useState(existingTitle);
  const [description, setDescription] = useState(existingDescription);
  const [price, setPrice] = useState(existingPrice);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !price) {
      return Notify.failure("Title and price must be provided");
    }

    const data = { title, description, price };

    let response;

    if (_id) {
      // update
      response = await axios.put(`/api/products/?id=${_id}`, data);
    } else {
      // create
      response = await axios.post("/api/products", data);
    }
    if (response.status === 201 || response.status === 200) {
      Notify.success(`Product was saved`);
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
    <form onSubmit={handleSubmit} onReset={handleReset} autoComplete="off">
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
  );
};

export default ProductForm;
