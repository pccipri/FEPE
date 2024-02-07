'use client'

import { Product } from "@/interfaces/product";
import { RequestDTO } from "@/interfaces/requestDTO";
import productRequestHandler from "@/services/productsService";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image'

export default function EditProduct({ params }: { params: { id: string } }) {
    const [toEditProduct, setToEditProduct] = useState<Product<RequestDTO>>({
        category_id: { id: 1 },
        name: '',
        description: '',
        image: '',
        price: 0
    })

    const fetchProduct = async () => {
        const response = await productRequestHandler("GET_BY_ID", params.id);
        setToEditProduct({ ...response, category_id: {id: response.category_id.id} })
    }

    const handleInputChange = (event: { target: { name: string; value: any }; }) => {
        console.log(event.target);

        const { name, value } = event.target;
        setToEditProduct({ ...toEditProduct, [name]: value });
    };

    const updateProduct = async () => {
        await productRequestHandler("PUT", params.id, toEditProduct);

    }

    useEffect(() => {
        console.log(toEditProduct);
        
    }, [toEditProduct])

    useEffect(() => {
        if (params) {
            fetchProduct();
        }
    }, [params])

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer g-lg-5 py-5 bg-body" style={{ width: '50%' }}>
                            <div>
                                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Edit product</h4>
                                <br />
                                <form onSubmit={(e) => e.preventDefault()} style={{ color: 'black', width: '30vw' }}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input value={toEditProduct.name} onChange={handleInputChange} type="text" className="form-control" id="name" name="name" placeholder="Name" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="category_id">Category</label>
                                        <input value={toEditProduct.category_id.name} onChange={handleInputChange} type="text" className="form-control" id="category_id" name="category_id" placeholder="Category" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input value={toEditProduct.description} onChange={handleInputChange} type="text" className="form-control" id="description" name="description" placeholder="Description" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
                                        <input value={toEditProduct.image} onChange={handleInputChange} type="text" className="form-control" id="image" name="image" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="price">Price</label>
                                        <input value={toEditProduct.price} onChange={handleInputChange} type="number" min={0} className="form-control" id="price" name="price" placeholder="Price" />
                                    </div>
                                    <button onClick={() => updateProduct()} className="btn btn-info text-white" style={{ width: '100%', marginTop: '5vw' }}>Ok</button><br /><br />
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
