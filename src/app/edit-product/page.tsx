export default function EditProduct() {
    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                    <div className="text-center text-lg-start">
                        <div className="container-sm container-fluid rounded formContainer g-lg-5 py-5 bg-body" style={{width: '50%'}}>
                            <div>
                                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Edit product</h4>
                                <br/>
                                <form style={{ color: 'black', width: '30vw' }}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="text" className="form-control" id="Name" placeholder="Name" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Category</label>
                                        <input type="text" className="form-control" id="Category" placeholder="Category" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Description</label>
                                        <input type="text" className="form-control" id="Description" placeholder="Description" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Image</label>
                                        <input type="file" className="form-control" id="Image" />
                                    </div><br />
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Price</label>
                                        <input type="number" className="form-control" id="Price" placeholder="Price" />
                                    </div>
                                    <button type="submit" className="btn btn-info text-white" style={{ width: '100%', marginTop: '5vw'}}>Ok</button><br /><br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
