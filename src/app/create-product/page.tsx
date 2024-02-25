"use client"

import { Product } from "@/interfaces/product"
import productRequestHandler from "@/services/productsService";
import { Category } from "@/interfaces/category";
import categoryRequestHandler from "@/services/categoryService";
import { useEffect, useState } from "react"
import Image from 'next/image'

export default function CreateProduct() {
    const [newProduct, setNewProduct] = useState<Product>({
        category_id: { name: '' },
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

    // Categories
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number>();

    const getAllCategories = async () => {
        const response: Category[] = await categoryRequestHandler("GET");

        setCategories(response);
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = parseInt(event.target.value);
        setSelectedCategory(categoryId);
        
        const selectedCategoryObject = categories.find(category => category.id === categoryId);
    
        if (selectedCategoryObject) {
            setNewProduct({ ...newProduct, category_id: selectedCategoryObject });
        }
    };
    
    
    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer g-lg-5 py-5 bg-body" style={{ width: '50%' }}>
                            <div>
                                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Create product</h4>
                                <br />
                                <form style={{ color: 'black', width: '30vw' }} onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input name="name" onChange={handleInputChange} value={newProduct.name} type="text" className="form-control" id="name" placeholder="Name" />
                                    </div><br />
                                    <div className="form-group">
                                        <select
                                            className="form-select"
                                            id="category_id"
                                            aria-label="Default select example"
                                            value={selectedCategory}
                                            onChange={handleCategoryChange}
                                        >
                                            {categories.map((category: Category, index: number) => (
                                                <option key={index} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
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
                                    <button onClick={() => createProduct()} className="btn btn-info text-white" style={{ width: '100%', marginTop: '5vw' }}>Create</button><br /><br />
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
