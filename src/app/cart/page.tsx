import Image from 'next/image'

export default function Cart() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                <div className="card border bg-body rounded" style={{ width: '80vw', margin: '2vw auto 2vw auto' }}>
                    <div className="row">
                        <div className="col-md-8 cart">
                            <div className="title">
                                <div className="row" style={{ marginTop: '3vw', marginLeft: '2vw' }}>
                                    <div className="col"><h4 className='text-info'><b>Shopping Cart</b></h4></div>
                                </div>
                            </div>
                            <hr className="featurette-divider" style={{ width: '47vw', marginLeft: '3vw' }} />
                            <div className="row">
                                <div className="row main align-items-center" style={{ marginLeft: '2vw' }}>
                                    <div className="col-2"><Image className="img-fluid rounded" alt="..." width={100} height={100} src="/images/placeholder.jpg" /></div>
                                    <div className="col">
                                        <div className="row text-muted">Category</div>
                                        <div className="row">Name</div>
                                    </div>
                                    <div className="col">
                                        <a href="#" style={{textDecoration: 'none', color: 'black'}}>- </a><a href="#" style={{ marginLeft: '1vw', marginRight: '1vw', textDecoration: 'none', color: 'black' }}> 1 </a><a href="#" style={{textDecoration: 'none', color: 'black'}}> +</a>
                                    </div>
                                    <div className="col">44.00 RON <span className="close">&#10005;</span></div>
                                </div>
                            </div>
                            <hr className="featurette-divider" style={{ width: '47vw', marginLeft: '3vw' }} />
                            <div className="row">
                                <div className="row main align-items-center" style={{ marginLeft: '2vw' }}>
                                    <div className="col-2"><Image className="img-fluid rounded" alt="..." width={100} height={100} src="/images/placeholder.jpg" /></div>
                                    <div className="col">
                                        <div className="row text-muted">Category</div>
                                        <div className="row">Name</div>
                                    </div>
                                    <div className="col">
                                        <a href="#" style={{textDecoration: 'none', color: 'black'}}>- </a><a href="#" style={{ marginLeft: '1vw', marginRight: '1vw', textDecoration: 'none', color: 'black'  }}> 1 </a><a href="#" style={{textDecoration: 'none', color: 'black'}}> +</a>
                                    </div>
                                    <div className="col">30.00 RON <span className="close">&#10005;</span></div>
                                </div>
                            </div>
                            <hr className="featurette-divider" style={{ width: '47vw', marginLeft: '3vw' }} />
                            <div className="row">
                                <div className="row main align-items-center" style={{ marginLeft: '2vw' }}>
                                    <div className="col-2"><Image className="img-fluid rounded" alt="..." width={100} height={100} src="/images/placeholder.jpg" /></div>
                                    <div className="col">
                                        <div className="row text-muted">Category</div>
                                        <div className="row">Name</div>
                                    </div>
                                    <div className="col">
                                        <a href="#" style={{textDecoration: 'none', color: 'black'}}>- </a><a href="#" style={{ marginLeft: '1vw', marginRight: '1vw', textDecoration: 'none', color: 'black' }}> 1 </a><a href="#" style={{textDecoration: 'none', color: 'black'}}> +</a>
                                    </div>
                                    <div className="col">20.50 RON <span className="close">&#10005;</span></div>
                                </div>
                            </div>
                            <hr className="featurette-divider" style={{ width: '47vw', marginLeft: '3vw' }} />
                            <div className="back-to-shop" style={{ marginLeft: '3vw', marginBottom: '2vw' }}><a href="#"><Image src="/images/arrow-left.svg" alt="Back" width={20} height={20} /></a><span className="text-muted"> Back to shop</span></div>
                        </div>
                        <div className="col-md-4 summary">
                            <div className="col" style={{ marginTop: '3vw', marginBottom: '2vw' }}><h4 className='text-info'><b>Summary</b></h4></div>
                            <hr className="featurette-divider" style={{ width: '22vw' }} />
                            <div className="row">
                                <div className="col">3 ITEMS</div>
                                <div className="col text-right" style={{ color: '#006837' }}>94.50 RON</div>
                            </div>
                            <br />
                            <form>
                                <p>Shipping</p>
                                <select className="form-select" style={{ width: '22vw' }}><option className="text-muted">Standard - 5 RON</option></select>
                                <br /><p>Promotional code</p>
                                <input id="code" className="form-control" style={{ width: '22vw' }} placeholder="Enter your code" />
                            </form>
                            <hr className="featurette-divider" style={{ width: '22vw' }} />
                            <div className="row">
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right" style={{ color: '#006837' }}>99.50 RON</div>
                            </div>
                            <br /><button type="submit" className="btn btn-success">Checkout</button><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}