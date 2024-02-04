'use client'

import { Category } from "@/interfaces/category";
import categoryRequestHandler from "@/services/categoryService";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditCategory({ params }: { params: { id: string } }) {
    const [toEditCategory, setToEditCategory] = useState<Category>({
        name: ""
    })

    const fetchCategory = async () => {
        const response = await categoryRequestHandler("GET_BY_ID", params.id);
        setToEditCategory({ ...response })
    }

    const handleInputChange = (event: { target: { name: string; value: any }; }) => {
        const { name, value } = event.target;
        setToEditCategory({ ...toEditCategory, [name]: value });
    };

    const updateCategory = async () => {
        await categoryRequestHandler("PUT", params.id, toEditCategory);

    }


    useEffect(() => {
        if (params) {
            fetchCategory();
        }
    }, [params])

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer g-lg-5 py-5 bg-body" style={{ width: '50%' }}>
                            <div>
                                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Edit category</h4>
                                <br />
                                <form style={{ color: 'black', width: '30vw' }} >
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input value={toEditCategory.name} name="name" onChange={handleInputChange} type="text" className="form-control" id="Name" placeholder="Name" />
                                    </div><br />
                                    <button onClick={() => updateCategory()} className="btn btn-info text-white" style={{ width: '100%', marginTop: '5vw' }}>Ok</button><br /><br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
