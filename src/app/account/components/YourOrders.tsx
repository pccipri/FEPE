interface YourOrdersProps {
  currentTab: string;
}

const YourOrders: React.FC<YourOrdersProps> = ({ currentTab }) => {
  return (
    currentTab === 'yourOrders' ?

      <div className="card-body">
        <h5 className="mb-2 text-info">Your Orders</h5>
        <div className="row gutters mx-auto" style={{marginTop: '1vw'}}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-action">An item</li>
            <li className="list-group-item list-group-item-action">A second item</li>
            <li className="list-group-item list-group-item-action">A third item</li>
            <li className="list-group-item list-group-item-action">A fourth item</li>
            <li className="list-group-item list-group-item-action">And a fifth one</li>
          </ul>
        </div>
      </div>

      : null
  )
};

export default YourOrders;