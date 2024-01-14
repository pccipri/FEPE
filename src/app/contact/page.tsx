export default function Home() {
    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start"  style={{marginLeft: '2vw'}}>
                    <h3 className="fw-bold">Contact Us</h3>
                    <h4 className="fw-bold">Customer services</h4>
                    <p className="fw-normal" style={{marginTop: '5vw'}}>Monday - Friday: 9:00am - 4.00pm</p>
                    <p className="fw-normal">Call: 020 7989 9888 (call charges may apply)</p>
                    <p className="fw-normal">Email: pharmaease@gmail.com</p>
                    <br />
                    <p className="fw-light" style={{marginTop: '5vw'}}>All calls are recorded</p>
                </div>
                <div className="container-sm container-fluid rounded formContainer"  style={{marginLeft: '-5vw'}}>
                    <form>
                        <div className="form-group" style={{ width: '25vw' }}>
                            <input type="text" className="form-control" id="exampleInput" placeholder="Full name" />
                        </div><br />
                        <div className="form-group">
                            <input type="tel" className="form-control" id="exampleInput" placeholder="Telephone" />
                        </div><br />
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Email" />
                        </div><br />
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInput" placeholder="Subject" />
                        </div><br />
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message"></textarea><br/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}