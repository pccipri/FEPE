'use client'

import { Category } from "@/interfaces/category";
import categoryRequestHandler from "@/services/categoryService";
import { useEffect, useState } from "react";

export default function Categories() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number>();

    const getAllCategories = async () => {
        const response: Category[] = await categoryRequestHandler("GET");

        setCategories(response);
    }

    const deleteCategory = async (id: number) => {
        await categoryRequestHandler("DELETE", id.toString());

        getAllCategories();
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <div className='mx-auto' style={{ width: '90vw' }}>
            <div className='d-flex justify-content-between align-items-center' style={{ margin: '3vw auto 2vw auto' }}>
                <h5 style={{ color: '#006837' }}>Categories</h5>
                <a href="/create-category"><button type="button" id="submit" name="submit" className="btn btn-primary">Add Category</button></a>
            </div>

            <div className="row align-items-center">
                <div className="text-left">
                    <table className="table table-hover mx-auto border" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#006837' }}>Id</th>
                                <th scope="col" style={{ color: '#006837' }}>Name</th>
                                <th scope="col" style={{ color: '#006837' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category: Category, index: number) => <tr key={index}>
                                <th className="align-middle" scope="row">{category.id}</th>
                                <td className="align-middle">{category.name}</td>
                                <td className="align-middle">
                                    <a href={`/edit-category/${category.id}`}><button type="button" id="submit" name="submit" className="btn btn-success" style={{ marginRight: '1vw' }}>Update</button></a>
                                    <button type="button" onClick={() => setSelectedCategory(category.id)} name="submit" data-bs-toggle="modal" data-bs-target="#modalCategory" className="btn btn-danger">Delete</button>
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
                id="modalCategory"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete category</h5>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this category?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={selectedCategory ? () => { deleteCategory(selectedCategory) } : undefined} data-bs-dismiss="modal" className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}