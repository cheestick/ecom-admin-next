import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link
        className="bg-blue-400 py-3 px-6 rounded-2xl text-white"
        href={"/products/new"}
      >
        Add new product
      </Link>
    </Layout>
  );
}
