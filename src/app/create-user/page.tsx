"use client"

import { User } from "@/interfaces/user"
import userRequestHandler from "@/services/usersService";
import { useState } from "react"

export default function CreateUser() {
    const [newUser, setNewUser] = useState<User>({
        role: {name: ''},
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        phone_number: ''
    })

    const handleInputChange = (event: { target: { name: string; value: any }; }) => {
        const { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const createUser = async () => {
        const response = await userRequestHandler("POST", undefined, newUser);
    }

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer g-lg-5 py-5 bg-body" style={{width: '50%'}}>
                            <div>
                                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Create user</h4>
                                <br/>
                                <form style={{ color: 'black', width: '30vw' }} >
                                    <div className="form-group">
                                        <label htmlFor="role">Role</label>
                                        <input name="role" onChange={handleInputChange} value={newUser.role.name} type="text" className="form-control" id="role" placeholder="Role" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name</label>
                                        <input name="first_name" onChange={handleInputChange} value={newUser.first_name} type="text" className="form-control" id="first_name" placeholder="First Name" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input name="last_name" onChange={handleInputChange} value={newUser.last_name} type="text" className="form-control" id="last_name" placeholder="Last Name" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="last_name">Username</label>
                                        <input name="username" onChange={handleInputChange} value={newUser.username} type="text" className="form-control" id="username" placeholder="Username" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input name="email" onChange={handleInputChange} value={newUser.email} type="text" className="form-control" id="email" placeholder="Email" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input name="password" onChange={handleInputChange} value={newUser.password} type="text" className="form-control" id="password" placeholder="Password" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="password">Phone Number</label>
                                        <input name="phone_number" onChange={handleInputChange} value={newUser.phone_number} type="text" className="form-control" id="phone_number" placeholder="Password" />
                                    </div><br />
                                    <button onClick={() => createUser()} className="btn btn-info text-white" style={{ width: '100%', marginTop: '5vw'}}>Create</button><br /><br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
