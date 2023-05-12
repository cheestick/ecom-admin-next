import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      return res.json(await Product.findOne({ _id: req.query.id }));
    }
    return res.json(await Product.find({}));
  }

  if (method === "POST") {
    const { title, description, price } = req.body;
    const newProduct = await Product.create({
      title,
      description,
      price: Number(price),
    });

    if (!newProduct)
      return res.status(500).json({ message: "Try again later" });

    return res.status(201).json(newProduct);
  }

  if (method === "PUT") {
    const { id } = req.query;
    const { title, description, price } = req.body;
    if (id) {
      return res.json(
        await Product.updateOne(
          { _id: id },
          { title, description, price: Number(price) }
        )
      );
    }
    return res.status(400).json({ message: "ID not provided" });
  }
}
