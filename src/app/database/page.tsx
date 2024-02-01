export default function Database() {
    return (
        <div className="px-4 pt-5 my-5 text-center">
            <h1 className="display-6 fw-bold">Welcome, Admin!</h1>
            <br/>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Site administration and database overview</p>
                <br/>
                <br/>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <a href="/users"><button type="button" className="btn btn-success btn-lg px-4 me-sm-3">Users</button></a>
                    <a href="/products"><button type="button" className="btn btn-success btn-lg px-4 me-sm-3">Products</button></a>
                    <a href="/categories"><button type="button" className="btn btn-success btn-lg px-4 me-sm-3">Categories</button></a>
                    <a href="/orders"><button type="button" className="btn btn-success btn-lg px-4 me-sm-3">Orders</button></a>
                    <a href="/order-products"><button type="button" className="btn btn-success btn-lg px-4 me-sm-3" style={{width: '17vw'}}>Order Products</button></a>
                    <a href="/messages"><button type="button" className="btn btn-success btn-lg px-4 me-sm-3">Messages</button></a>
                </div>
            </div>
        </div>
    )
}