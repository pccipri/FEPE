"use client"

import Image from 'next/image';

export default function Header() {
    return (
        <>
            {/* Footer component START */}
            <div className="container position-sticky" style={{ bottom: '0', fontFamily: "'Quicksand', sans-serif" }}>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="mb-3 mb-md-0 text-muted">© 2024 Pharma Ease Company</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-facebook"><Image src="/images/facebook.svg" alt="Facebook Icon" width={20} height={20} /></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-instagram"><Image src="/images/instagram.svg" alt="Instagram Icon" width={20} height={20} /></i></a></li>
                        <li className="ms-3"><a className="text-muted" href="#"><i className="bi bi-twitter-x"><Image src="/images/twitter-x.svg" alt="Twitter-X Icon" width={20} height={20} /></i></a></li>
                    </ul>
                </footer>
            </div>
            {/* Footer component END */}
        </>
    )
}