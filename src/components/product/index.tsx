import Image from 'next/image'

interface ProductComponents {
    name: string;
    price: string;
    image: string;
}

const Product: React.FC<ProductComponents> = ({ name, price, image }) => {
    return (
        <div className="card" style={{ width: '25vw' }}>
            <Image src={image} className="img-fluid" width={500} height={200} style={{ marginTop: '1vw' }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price} RON</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    );
};

export default Product;