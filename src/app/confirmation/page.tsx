'use client'
import Image from 'next/image'

export default function Confirmation() {
    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer bg-body" style={{ flexDirection: 'row', width: '100%' }}>
                            <div className="g-lg-5 py-5 text-center">
                                <h1 style={{ color: '#0dcaf0' }}>Thank you for your order</h1><br />
                                <p>Your order has been placed and is being processed.</p>
                                <br/>
                                <Image src="/images/confirmation.svg" alt="Back" width={250} height={250} />
                                <br/><br/><br/>
                                <div><a href="/" className="text-decoration-none"><Image src="/images/arrow-left.svg" alt="Back" width={20} height={20} /><span className="text-muted"> Back to homepage</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
