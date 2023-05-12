import mongoose from "mongoose";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "POST") {
    const { title, description, price } = req.body;
    const newProduct = await Product.create({
      title,
      description,
      price: Number(price),
    });

    if (!newProduct) res.status(500).json({ message: "Try again later" });

    res.status(201).json(newProduct);
  }
}
