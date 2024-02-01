export default function Categories() {
    return (
        <div className='mx-auto' style={{ width: '90vw' }}>
            <div className='d-flex justify-content-between align-items-center' style={{ margin: '3vw auto 2vw auto' }}>
                <h5 style={{ color: '#006837' }}>Categories</h5>
                <button type="button" id="submit" name="submit" className="btn btn-primary">Add Categories</button>
            </div>

            <div className="row align-items-center">
                <div className="text-center">
                    <table className="table table-hover mx-auto border" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#006837' }}>Id</th>
                                <th scope="col" style={{ color: '#006837' }}>Name</th>
                                <th scope="col" style={{ color: '#006837' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="align-middle" scope="row">1</th>
                                <td className="align-middle">Name</td>
                                <td className="align-middle">
                                    <button type="button" id="submit" name="submit" className="btn btn-success" style={{ marginRight: '1vw' }}>Update</button>
                                    <button type="button" id="submit" name="submit" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}