import Image from 'next/image'

interface CardComponents {
  title: string;
  text: string;
  image: string;
}

const Card: React.FC<CardComponents> = ({ title, text, image }) => {
  return (
    <div className="col-lg-4">
      <Image src={image} alt="..." width={140} height={140} className="bd-placeholder-img rounded-circle"/>
      <h2 className="fw-normal">{title}</h2>
      <p>{text}</p>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>
  );
};

export default Card;