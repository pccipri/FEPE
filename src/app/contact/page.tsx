"use client"

import { Message } from "@/interfaces/message"
import messageRequestHandler from "@/services/messagesService";
import { useState } from "react"

export default function Contact() {
    const [newMessage, setNewMessage] = useState<Message>({
        user_id: {
            id: 1
        },
        message: ''
    })

    const handleInputChange = (event: { target: { name: string; value: any }; }) => {
        const { name, value } = event.target;
        setNewMessage({ ...newMessage, [name]: value });
    };

    const createMessage = async () => {
        const response = await messageRequestHandler("POST", undefined, newMessage);
    }

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                <div className="col-lg-7 text-center text-lg-start bg-body rounded" style={{ marginLeft: '10vw', height: '54vw', width: '83vw', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                    <div style={{ marginLeft: '5vw', marginTop: '5vw' }}>
                        <h3 className="fw-bold" style={{ color: '#0dcaf0' }}>Contact Us</h3>
                        <h4 className="fw-bold" style={{ color: '#0dcaf0' }}>Customer services</h4><br />
                        <p className="fw-normal">Monday - Friday: 9:00am - 4:00pm</p><br />
                        <h4 className="fw-bold" style={{ color: '#0dcaf0' }}>Pharma Ease online doctor</h4><br />
                        <p className="fw-normal">Call: 020 7989 9888 (call charges may apply)</p>
                        <p className="fw-normal">Email: pharmaease@gmail.com</p>
                        <br />
                        <p className="fw-normal" style={{ color: '#0dcaf0' }}>Or fill the following form to send us a message.</p>
                        <br />
                        <small className="fw-light" style={{ marginTop: '10vw', color: 'black' }}>All calls are recorded.</small>
                    </div>
                </div>

                <div className="container-sm container-fluid rounded formContainer bg-body" style={{ marginLeft: '-35vw', width: '32vw', marginTop: '-2vw', boxShadow: 'none' }}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="phone_number" style={{ width: '25vw' }}>Phone number</label>
                            <input name="phone_number" type="tel" className="form-control" id="phone_number" placeholder="Phone number" />
                        </div><br />
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name="subject" className="form-control" id="subject" placeholder="Subject" />
                        </div><br />
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" onChange={handleInputChange} value={newMessage.message} className="form-control" id="message" placeholder="Message"></textarea><br />
                        </div>
                        <button onClick={() => createMessage()} className="btn btn-info text-white" style={{ width: '100%' }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}