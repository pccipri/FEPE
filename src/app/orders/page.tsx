export default function Orders() {
    return (
        <div className='mx-auto' style={{ width: '90vw' }}>
            <div className='d-flex justify-content-between align-items-center' style={{ margin: '3vw auto 2vw auto' }}>
                <h5 style={{ color: '#006837' }}>Orders</h5>
            </div>

            <div className="row align-items-center">
                <div className="text-center">
                    <table className="table table-hover mx-auto border" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#006837' }}>Id</th>
                                <th scope="col" style={{ color: '#006837' }}>User Id</th>
                                <th scope="col" style={{ color: '#006837' }}>Total Price</th>
                                <th scope="col" style={{ color: '#006837' }}>Time</th>
                                <th scope="col" style={{ color: '#006837' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="align-middle" scope="row">1</th>
                                <td className="align-middle">User Id</td>
                                <td className="align-middle">Total Price</td>
                                <td className="align-middle">Time</td>
                                <td className="align-middle">
                                    <button type="button" id="submit" name="submit" className="btn btn-danger">Cancel Order</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}