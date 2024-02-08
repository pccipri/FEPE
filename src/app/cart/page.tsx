'use client'
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
                                    <div className="col-2">
                                        <Image className="img-fluid rounded" alt="..." width={100} height={100} src="/images/nytol.jpg" />
                                    </div>
                                    <div className="col">
                                        <div className="row text-muted">Cough, cold & flu</div>
                                        <div className="row">Nytol Original 20 caplets</div>
                                    </div>

                                    <div className="col">
                                        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>- </a><a href="#" style={{ marginLeft: '1vw', marginRight: '1vw', textDecoration: 'none', color: 'black' }}> 1 </a><a href="#" style={{ textDecoration: 'none', color: 'black' }}> +</a>
                                    </div>

                                    <div className="col">27.9 RON <span className="close">&#10005;</span></div>
                                </div>
                            </div>

                            <hr className="featurette-divider" style={{ width: '47vw', marginLeft: '3vw' }} />

                            <div className="row">
                                <div className="row main align-items-center" style={{ marginLeft: '2vw' }}>
                                    <div className="col-2">
                                        <Image className="img-fluid rounded" alt="..." width={100} height={100} src="/images/garnier.jpg" />
                                    </div>
                                    <div className="col">
                                        <div className="row text-muted">Travel medicines</div>
                                        <div className="row">Ambre Solaire Aftersun After Sun </div>
                                    </div>

                                    <div className="col">
                                        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>- </a><a href="#" style={{ marginLeft: '1vw', marginRight: '1vw', textDecoration: 'none', color: 'black' }}> 1 </a><a href="#" style={{ textDecoration: 'none', color: 'black' }}> +</a>
                                    </div>

                                    <div className="col">16.5 RON <span className="close">&#10005;</span></div>
                                </div>

                            </div>

                            <hr className="featurette-divider" style={{ width: '47vw', marginLeft: '3vw' }} />

                            <div className="row">
                                <div className="row main align-items-center" style={{ marginLeft: '2vw' }}>
                                    <div className="col-2">
                                        <Image className="img-fluid rounded" alt="..." width={100} height={100} src="/images/solpadeineMax.jpg" />
                                    </div>
                                    <div className="col">
                                        <div className="row text-muted">Pain relief</div>
                                        <div className="row">Solpadeine max tablets</div>
                                    </div>

                                    <div className="col">
                                        <a href="#" style={{ textDecoration: 'none', color: 'black' }}>- </a><a href="#" style={{ marginLeft: '1vw', marginRight: '1vw', textDecoration: 'none', color: 'black' }}> 1 </a><a href="#" style={{ textDecoration: 'none', color: 'black' }}> +</a>
                                    </div>

                                    <div className="col">48.3 RON <span className="close">&#10005;</span></div>
                                </div>

                            </div>

                            <hr className="featurette-divider" style={{ width: '47vw', marginLeft: '3vw' }} />

                            <div className="back-to-shop" style={{ marginLeft: '3vw', marginBottom: '2vw' }}><a href="/shop" className="text-decoration-none"><Image src="/images/arrow-left.svg" alt="Back" width={20} height={20} /><span className="text-muted"> Back to shop</span></a></div>
                        </div>

                        <div className="col-md-4 summary">
                            <div className="col" style={{ marginTop: '3vw', marginBottom: '2vw' }}><h4 className='text-info'><b>Summary</b></h4></div>

                            <hr className="featurette-divider" style={{ width: '22vw' }} />

                            <div className="row">
                                <div className="col">3 ITEMS</div>
                            </div>

                            <br />

                            <div className="row">
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right" style={{ color: '#006837' }}>92.7 RON</div>
                            </div>

                            <br /><a href="/checkout"><button type="submit" className="btn btn-success" style={{ marginTop: '15vw' }}>Checkout</button></a><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}