"use client"

import Image from 'next/image'

interface ProductComponents {
    name: string;
    price: string;
    image: string;
    description: string;
}

const Prod: React.FC<ProductComponents> = ({ name, price, image, description }) => {
    return (
        <div className="card" style={{ width: '25vw', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
            <Image src={image} className="img-fluid" width={500} height={100} style={{ margin: '1.4vw auto 0 auto', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', height: '17vw', width: '22vw' }} alt="..." />
            <div className="card-body">
                <div style={{ height: '5.5vw', overflow: 'auto' }}>
                    <h5 className="card-title text-center" style={{ color: '#006837', fontSize: '1.5vw' }}>{name}</h5>
                </div>
                <div style={{ height: '4.5vw', overflow: 'auto' }}>
                    <p className='text-start'>{description}</p>
                </div>
                <p className="card-text" style={{ marginTop: '1vw', color: '#006837' }}>{price} RON</p>
                <br />
                <a href="#" className="btn btn-success" style={{ width: '100%' }}>Add to Cart</a>
            </div>
        </div>
    );
};

export default Prod;