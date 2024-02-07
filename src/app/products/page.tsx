'use client'

import { Category } from "@/interfaces/category";
import { Product } from "@/interfaces/product";
import productRequestHandler from "@/services/productsService";
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState<Product<Category>[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<number>();

    const getAllProducts = async () => {
        const response: Product<Category>[] = await productRequestHandler("GET");

        setProducts(response);
    }

    const deleteProduct = async (id: number) => {
        await productRequestHandler("DELETE", id.toString());

        getAllProducts();
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <div className='mx-auto' style={{ width: '90vw' }}>
            <div className='d-flex justify-content-between align-items-center' style={{ margin: '3vw auto 2vw auto' }}>
                <h5 style={{ color: '#006837' }}>Products</h5>
                <a href="create-product"><button type="button" id="submit" name="submit" className="btn btn-primary">Add Product</button></a>
            </div>

            <div className="row align-items-center">
                <div className="text-center">
                    <table className="table table-hover mx-auto border" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#006837' }}>Id</th>
                                <th scope="col" style={{ color: '#006837' }}>Name</th>
                                <th scope="col" style={{ color: '#006837' }}>Category</th>
                                <th scope="col" style={{ color: '#006837' }}>Description</th>
                                <th scope="col" style={{ color: '#006837' }}>Image</th>
                                <th scope="col" style={{ color: '#006837' }}>Price</th>
                                <th scope="col" style={{ color: '#006837' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products.map((product: Product<Category>, index: number) => <tr key={index}>
                                <th className="align-middle" scope="row">{product.id}</th>
                                <td className="align-middle">{product.name}</td>
                                <td className="align-middle">{product.category_id.name}</td>
                                <td className="align-middle">{product.description}</td>
                                <td className="align-middle">{product.image}</td>
                                <td className="align-middle">{product.price}</td>
                                <td className="align-middle">
                                    <a href={`/edit-product/${product.id}`}><button type="button" id="submit" name="submit" className="btn btn-success" style={{ marginRight: '1vw' }}>Update</button></a>
                                    <button type="button" onClick={() => setSelectedProduct(product.id)} name="submit" data-bs-toggle="modal" data-bs-target="#modalProduct" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                className="modal modal-alert bg-secondary py-5"
                tabIndex={-1}
                role="dialog"
                id="modalProduct"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete product</h5>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this product?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={selectedProduct ? () => { deleteProduct(selectedProduct) } : undefined} data-bs-dismiss="modal" className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}