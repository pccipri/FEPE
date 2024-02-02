export default function Contact() {
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
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1" style={{ width: '25vw' }}>Phone number</label>
                            <input type="tel" className="form-control" id="exampleInputTelephone1" placeholder="Phone number" />
                        </div><br />
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Subject</label>
                            <input type="text" className="form-control" id="exampleInputSubject1" placeholder="Subject" />
                        </div><br />
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message"></textarea><br />
                        </div>
                        <button type="submit" className="btn btn-info text-white" style={{width: '100%'}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}