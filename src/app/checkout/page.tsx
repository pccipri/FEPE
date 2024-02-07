import Image from 'next/image'

export default function Checkout() {
    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer bg-body" style={{ flexDirection: 'row', width: '50%' }}>

                            <div className="g-lg-5 py-5">
                                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Checkout</h4><br />
                                <form style={{ color: 'black' }}>
                                    <div className="form-group ">
                                        <label htmlFor="user_address">Your address</label>
                                        <input type="text" className="form-control" id="user_address" aria-describedby="emailHelp" placeholder="Your address" style={{ width: '25vw' }} />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="payment">Payment</label>
                                        <select className="form-select" id="payment" aria-label="Default select example">
                                            <option selected>Cash</option>
                                            <option value="1">Card</option>
                                        </select>
                                    </div><br />
                                    <button type="submit" className="btn btn-info text-white" style={{ width: '100%' }}>Pay</button><br /><br />
                                    <div><a href="/cart" className="text-decoration-none"><Image src="/images/arrow-left.svg" alt="Back" width={20} height={20} /><span className="text-muted"> Back to cart</span></a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
