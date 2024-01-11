interface CardComponents {
  title: string;
  text: string;
}

const Card: React.FC<CardComponents> = ({ title, text }) => {
  return (
    <div className="card text-center" style={{ width: '20vw' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Button</a>
      </div>
    </div>
  );
};

export default Card;