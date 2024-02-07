"use client"

import { Product } from "@/interfaces/product"
import productRequestHandler from "@/services/productsService";
import { useState } from "react"
import Image from 'next/image'

export default function CreateProduct() {
    const [newProduct, setNewProduct] = useState<Product>({
        category_id: {name: ''},
        name: "",
        description: "",
        image: "",
        price: 0
    })

    const handleInputChange = (event: { target: { name: string; value: any }; }) => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const createProduct = async () => {
        const response = await productRequestHandler("POST", undefined, newProduct);
    }

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer g-lg-5 py-5 bg-body" style={{width: '50%'}}>
                            <div>
                                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Create product</h4>
                                <br/>
                                <form style={{ color: 'black', width: '30vw' }}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input name="name" onChange={handleInputChange} value={newProduct.name} type="text" className="form-control" id="name" placeholder="Name" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="category_id">Category</label>
                                        <input name="category_id" onChange={handleInputChange} value={newProduct.category_id.name} type="text" className="form-control" id="category_id" placeholder="Category" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input name="description" onChange={handleInputChange} value={newProduct.description} type="text" className="form-control" id="description" placeholder="Description" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
                                        <input name="image" onChange={handleInputChange} value={newProduct.image} type="text" className="form-control" id="image" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="Price">Price</label>
                                        <input name="price" onChange={handleInputChange} value={newProduct.price} type="number" className="form-control" id="price" placeholder="Price" />
                                    </div>
                                    <button onClick={() => createProduct()} className="btn btn-info text-white" style={{ width: '100%', marginTop: '5vw'}}>Create</button><br /><br />
                                    <div><a href="/products" className="text-decoration-none"><Image src="/images/arrow-left.svg" alt="Back" width={20} height={20} /><span className="text-muted"> Back to products</span></a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
