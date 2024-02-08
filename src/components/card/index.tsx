import Image from 'next/image'

interface CardComponents {
  title: string;
  image: string;
}

const Card: React.FC<CardComponents> = ({ title, image }) => {
  return (
    <div className="col-lg-4">
      <Image src={image} alt="..." width={140} height={140} className="bd-placeholder-img rounded-circle"/>
      <h4 className="fw-normal" style={{marginTop: '1vw', marginBottom: '2vw'}}>{title}</h4>
      <p><a className="btn btn-success" href="/shop">View category »</a></p>
    </div>
  );
};

export default Card;