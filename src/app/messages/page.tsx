'use client'

import { Message } from "@/interfaces/message";
import { User } from "@/interfaces/user";
import messageRequestHandler from "@/services/messagesService";
import { useEffect, useState } from "react";

export default function Messages() {
    const [messages, setMessages] = useState<Message<User>[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<number>();

    const getAllMessages = async () => {
        const response: Message<User>[] = await messageRequestHandler("GET");

        setMessages(response);
    }

    const deleteMessage = async (id: number) => {
        await messageRequestHandler("DELETE", id.toString());

        getAllMessages();
    }

    useEffect(() => {
        getAllMessages();
    }, [])

    return (
        <div className='mx-auto' style={{ width: '90vw' }}>
            <div className='d-flex justify-content-between align-items-center' style={{ margin: '3vw auto 2vw auto' }}>
                <h5 style={{ color: '#006837' }}>Messages</h5>
            </div>

            <div className="row align-items-center">
                <div className="text-left">
                    <table className="table table-hover mx-auto border" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#006837' }}>Id</th>
                                <th scope="col" style={{ color: '#006837' }}>Email</th>
                                <th scope="col" style={{ color: '#006837' }}>Message</th>
                                <th scope="col" style={{ color: '#006837' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message: Message<User>, index: number) => <tr key={index}>
                                <th className="align-middle" scope="row">{message.id}</th>
                                <td className="align-middle text-truncate" style={{maxWidth: '200px'}}>{message.user_id.email}</td>
                                <td className="align-middle text-truncate" style={{maxWidth: '300px'}} >{message.message}</td>
                                <td className="align-middle">
                                    <button type="button" onClick={() => setSelectedMessage(message.id)} id="submit" name="submit" data-bs-toggle="modal" data-bs-target="#modalMessage" className="btn btn-danger">Delete</button>
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
                id="modalMessage"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete message</h5>
                            <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this message?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={selectedMessage ? () => { deleteMessage(selectedMessage) } : undefined} data-bs-dismiss="modal" className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}