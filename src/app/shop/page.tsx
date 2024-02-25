'use client'

import Prod from "@/components/product";
import { Product } from "@/interfaces/product";
import productRequestHandler from "@/services/productsService";
import { useEffect, useState } from "react";


export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number>();

  const getAllProducts = async () => {
      const response: Product[] = await productRequestHandler("GET");

      setProducts(response);
  }

  useEffect(() => {
      getAllProducts();
  }, [])

  return (
    <>
      <div className='container' style={{ marginTop: '5vw', marginBottom: '5vw' }}>
        <div style={{width: '100%', height: '5vw', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
            <h5 className="text-white text-center" style={{lineHeight: '5vw'}}>Products</h5>
        </div>

        <div className="card-deck cardContainer" style={{marginTop: '4vw'}}>
          <div className="row" style={{ gap: '2vw' }}>
            {products.map((product: Product, index: number) => <div key={index} className="" style={{ width: '25vw' }}>
              <Prod name={product.name} price={product.price.toString()} image={product.image} description={product.description} />
            </div>)}
          </div>
        </div>

      </div>
    </>
  )
}
