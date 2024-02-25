'use client'

import Prod from "@/components/product";
import { Product } from "@/interfaces/product";
import productRequestHandler from "@/services/productsService";
import { Category } from "@/interfaces/category";
import categoryRequestHandler from "@/services/categoryService";
import { useEffect, useState } from "react";


export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number>();

  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>();

  const getAllProducts = async () => {
    const response: Product[] = await productRequestHandler("GET");
    setProducts(response);
  }

  const getAllCategories = async () => {
    const response: Category[] = await categoryRequestHandler("GET");
    setCategories(response);
  }

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, [])

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = parseInt(event.target.value);
    setSelectedCategory(categoryId);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => {
      if (typeof product.category_id === 'number') {
        return product.category_id === selectedCategory;
      } else {
        return product.category_id.id === selectedCategory;
      }
    })
    : products;


  return (
    <>
      <div className='container' style={{ marginTop: '5vw', marginBottom: '5vw' }}>
        <div style={{ width: '100%', height: '5vw' }}>
          <div className="form-group" style={{width: '30vw'}}>
            <select
              style={{ marginBottom: '-5vw' }}
              className="form-select"
              id="category_id"
              aria-label="Default select example"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map((category: Category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            </div>
            <div style={{ width: '99.5%', height: '5vw', marginTop: "7vw", backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
              <h5 className="text-white text-center" style={{ lineHeight: '5vw' }}>Products</h5>
            </div>
        </div>

        <br/><div className="card-deck cardContainer" style={{ marginTop: '7vw' }}>
          <div className="row" style={{ gap: '2vw' }}>
            {filteredProducts.map((product: Product, index: number) => (
              <div key={index} className="" style={{ width: '25vw' }}>
                <Prod name={product.name} price={product.price.toString()} image={product.image} description={product.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
