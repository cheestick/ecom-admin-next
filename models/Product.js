import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    required: [true, "Product name is required"],
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
});

export const Product = models.Product || model("Product", ProductSchema);
