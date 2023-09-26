import { createSlug, getRandomUniqueID } from "../helpers/helpers.js";
import fs from "fs";

// get all product
export const getAllProduct = (req, res) => {
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  if (productData.length === 0) {
    res.status(404).json({ message: "Product Data not found" });
    return;
  }

  res.status(200).json({ products: productData });
};

// get all product
export const getSingleProduct = (req, res) => {
  const { slug } = req.params;

  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  const singleProduct = productData.find((data) => data.slug === slug);

  if (!singleProduct) {
    res.status(404).json({ message: "Single Product data not found" });
    return;
  }

  res.status(200).json(singleProduct);
};

// get all product
export const createProduct = (req, res) => {
  const { name, regularPrice, salePrice, stock } = req.body;

  if (!name || !regularPrice) {
    res.status(400).json({ message: "Product name and price is required" });
    return;
  }

  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  // product name check
  if (productData.some((data) => data.slug === createSlug(name))) {
    res.status(400).json({ message: "Product already exists" });
    return;
  }

  const product = {
    id: getRandomUniqueID(),
    name,
    slug: createSlug(name),
    regularPrice,
    salePrice,
    stock,
    photo: req.file.filename,
  };

  productData.push(product);

  fs.writeFileSync("db/product.json", JSON.stringify(productData));

  res.redirect("https://multer-ejs-shop.onrender.com/");
};

// get all product
export const deleteProduct = (req, res) => {
  const { id } = req.params;

  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  const updatedData = productData.filter((data) => data.id !== id);

  fs.writeFileSync("db/product.json", JSON.stringify(updatedData));

  res.redirect("https://multer-ejs-shop.onrender.com/");
};

// show product page
export const showProductPage = (req, res) => {
  // get all product
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  res.render("product", {
    products: productData,
  });
};

// show product page
export const showCreateProductPage = (req, res) => {
  res.render("create");
};

// show product page
export const showSingleProductPage = (req, res) => {
  const { slug } = req.params;

  // get all product
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  // find single product
  const singleProduct = productData.find((data) => data.slug === slug);

  res.render("show", {
    product: singleProduct,
  });
};

// show product page
export const showEditProductPage = (req, res) => {
  const { id } = req.params;

  // get all product
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  // find single product
  const editProduct = productData.find((data) => data.id === id);

  res.render("edit", {
    product: editProduct,
  });
};

// update product
export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, regularPrice, salePrice, stock } = req.body;

  // get all product
  const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

  // photo manage
  let photo_name =
    productData[productData.findIndex((data) => data.id === id)].photo;

  if (req?.file?.filename) {
    photo_name = req.file.filename;
  }

  productData[productData.findIndex((data) => data.id === id)] = {
    id: id,
    slug: createSlug(name),
    name,
    regularPrice,
    salePrice,
    stock,
    photo: photo_name,
  };

  fs.writeFileSync("db/product.json", JSON.stringify(productData));

  res.redirect("https://multer-ejs-shop.onrender.com/");
};
