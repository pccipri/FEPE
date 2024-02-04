"use client"

import { Category } from "@/interfaces/category"
import categoryRequestHandler from "@/services/categoryService";
import { useState } from "react"

export default function CreateCategory() {
    const [newCategory, setNewCategory] = useState<Category>({
        name: ''
    })

    const handleInputChange = (event: { target: { name: string; value: any }; }) => {
        const { name, value } = event.target;
        setNewCategory({ ...newCategory, [name]: value });
    };

    const createCategory = async () => {
        const response = await categoryRequestHandler("POST", undefined, newCategory);
    }

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer g-lg-5 py-5 bg-body" style={{ width: '50%' }}>
                            <div>
                                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Create category</h4>
                                <br />
                                <form style={{ color: 'black', width: '30vw' }} >
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input name="name" onChange={handleInputChange} type="text" className="form-control" id="Name" placeholder="Name" value={newCategory.name} />
                                    </div><br />
                                    <button onClick={() => createCategory()} className="btn btn-info text-white" style={{ width: '100%', marginTop: '5vw' }}>Create</button><br /><br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
