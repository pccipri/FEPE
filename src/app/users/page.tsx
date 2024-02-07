'use client'

import { User } from "@/interfaces/user";
import userRequestHandler from "@/services/usersService";
import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<number>();

    const getAllUsers = async () => {
        const response: User[] = await userRequestHandler("GET");

        setUsers(response);
    }

    const deleteUser = async (id: number) => {
        await userRequestHandler("DELETE", id.toString());

        getAllUsers();
    }

    useEffect(() => {
        getAllUsers();
    }, [])

    return (
        <div className='mx-auto' style={{ width: '90vw' }}>
            <div className='d-flex justify-content-between align-items-center' style={{ margin: '3vw auto 2vw auto' }}>
                <h5 style={{ color: '#006837' }}>Users</h5>
            </div>

            <div className="row align-items-center">
                <div className="text-center">
                    <table className="table table-hover mx-auto border" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#006837' }}>Id</th>
                                <th scope="col" style={{ color: '#006837' }}>Role</th>
                                <th scope="col" style={{ color: '#006837' }}>First Name</th>
                                <th scope="col" style={{ color: '#006837' }}>Last Name</th>
                                <th scope="col" style={{ color: '#006837' }}>Email</th>
                                <th scope="col" style={{ color: '#006837' }}>Phone Number</th>
                                <th scope="col" style={{ color: '#006837' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user: User, index: number) => <tr key={index}>
                                <th className="align-middle" scope="row">{user.id}</th>
                                <td className="align-middle">{user.role}</td>
                                <td className="align-middle">{user.first_name}</td>
                                <td className="align-middle">{user.last_name}</td>
                                <td className="align-middle">{user.email}</td>
                                <td className="align-middle">{user.phone_number}</td>
                                <td className="align-middle">
                                    <button type="button" onClick={() => setSelectedUser(user.id)} name="submit" data-bs-toggle="modal" data-bs-target="#modalUser" id="submit" className="btn btn-danger">Delete</button>
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
                id="modalUser"
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
                            <button type="button" onClick={selectedUser ? () => { deleteUser(selectedUser) } : undefined} data-bs-dismiss="modal" className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}