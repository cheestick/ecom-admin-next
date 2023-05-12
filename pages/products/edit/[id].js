import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    axios.get(`/api/products?id=${id}`).then((response) => {
      console.log(response.data);
    });
  }, [id]);

  return <Layout>EditProduct</Layout>;
};

export default EditProduct;