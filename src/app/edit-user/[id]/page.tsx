'use client'

import { User } from "@/interfaces/user";
import userRequestHandler from "@/services/usersService";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditUser({ params }: { params: { id: string } }) {
    const [toEditUser, setToEditUser] = useState<User>({
        role: {name: ''},
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        phone_number: ''
    })

    const fetchUser = async () => {
        const response = await userRequestHandler("GET_BY_ID", params.id);
        setToEditUser({ ...response })
    }

    const handleInputChange = (event: { target: { name: string; value: any }; }) => {
        const { name, value } = event.target;
        setToEditUser({ ...toEditUser, [name]: value });
    };

    const updateUser = async () => {
        await userRequestHandler("PUT", params.id, toEditUser);
    }


    useEffect(() => {
        if (params) {
            fetchUser();
        }
    }, [params])

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer g-lg-5 py-5 bg-body" style={{width: '50%'}}>
                            <div>
                                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Edit user</h4>
                                <br/>
                                <form style={{ color: 'black', width: '30vw' }} >
                                    <div className="form-group">
                                        <label htmlFor="role">Role</label>
                                        <input value={toEditUser.role} name="role" onChange={handleInputChange} type="text" className="form-control" id="role" placeholder="Role" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name</label>
                                        <input value={toEditUser.first_name} name="first_name" onChange={handleInputChange} type="text" className="form-control" id="first_name" placeholder="First Name" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input value={toEditUser.last_name} name="first_name" onChange={handleInputChange} type="text" className="form-control" id="last_name" placeholder="Last Name" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input value={toEditUser.username} name="username" onChange={handleInputChange} type="text" className="form-control" id="username" placeholder="Username" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input value={toEditUser.email} name="first_name" onChange={handleInputChange} type="text" className="form-control" id="email" placeholder="Email" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input value={toEditUser.password} name="password" onChange={handleInputChange} type="text" className="form-control" id="password" placeholder="Password" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="phone_number">Email</label>
                                        <input value={toEditUser.phone_number} name="phone_number" onChange={handleInputChange} type="text" className="form-control" id="phone_number" placeholder="Phone Number" />
                                    </div><br />
                                    <button onClick={() => updateUser()} className="btn btn-info text-white" style={{ width: '100%', marginTop: '5vw'}}>Ok</button><br /><br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
