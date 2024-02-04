export default function Users() {
    return (
        <div className='mx-auto' style={{ width: '90vw' }}>
            <div className='d-flex justify-content-between align-items-center' style={{ margin: '3vw auto 2vw auto' }}>
                <h5 style={{ color: '#006837' }}>Users</h5>
                <a href="/create-user"><button type="button" id="submit" name="submit" className="btn btn-primary">Add User</button></a>
            </div>

            <div className="row align-items-center">
                <div className="text-center">
                    <table className="table table-hover mx-auto border" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: '#006837' }}>Id</th>
                                <th scope="col" style={{ color: '#006837' }}>Type</th>
                                <th scope="col" style={{ color: '#006837' }}>Username</th>
                                <th scope="col" style={{ color: '#006837' }}>Email</th>
                                <th scope="col" style={{ color: '#006837' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="align-middle" scope="row">1</th>
                                <td className="align-middle">Type</td>
                                <td className="align-middle">Username</td>
                                <td className="align-middle">Email</td>
                                <td className="align-middle">
                                    <a href="/edit-user"><button type="button" id="submit" name="submit" className="btn btn-success" style={{ marginRight: '1vw' }}>Update</button></a>
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