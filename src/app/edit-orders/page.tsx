'use client'

export default function EditOrders() {
    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer g-lg-5 py-5 bg-body" style={{width: '50%'}}>
                            <div>
                                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Edit orders</h4>
                                <br/>
                                <form style={{ color: 'black', width: '30vw' }} onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">User Id</label>
                                        <input type="number" className="form-control" id="UserId" placeholder="UserId" min="0" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Total Price</label>
                                        <input type="number" className="form-control" id="TotalPrice" placeholder="TotalPrice"  min="0" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Time</label>
                                        <input type="time" className="form-control" id="Time" placeholder="Time" />
                                    </div><br />
                                    <button type="submit" className="btn btn-info text-white" style={{ width: '100%', marginTop: '5vw'}}>Ok</button><br /><br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
