import Image from 'next/image'

export default function Account() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
                <div className='text-center text-lg-start formContainer'>
                    <div className="container">
                        <div className="row gutters">
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="account-settings">
                                            <div className="user-profile">
                                                <div className="user-avatar">
                                                    <Image src="/images/account.svg" alt="Profile picture" width={215} height={150} />
                                                </div>
                                                <h5 className="user-name text-info" style={{marginTop: '2vw'}}>Full Name</h5>
                                            </div>
                                            <div className="about">
                                                <h5 style={{marginTop: '2vw'}}>Orders</h5>
                                                <p>Paracetamol</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h6 className="mb-2 text-info">Personal Details</h6>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="fullName">First Name</label>
                                                    <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="fullName">Last Name</label>
                                                    <input type="text" className="form-control" id="lastName" placeholder="Last name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group" style={{marginTop: '1vw'}}>
                                                    <label htmlFor="eMail">Email</label>
                                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group" style={{marginTop: '1vw'}}>
                                                    <label htmlFor="phone">Phone Number</label>
                                                    <input type="tel" className="form-control" id="phone" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{marginTop: '1vw'}}>
                                                <h6 className="mt-3 mb-2 text-info">Account Details</h6>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="website">Username</label>
                                                    <input type="text" className="form-control" id="username" placeholder="Username" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="ciTy">Password</label>
                                                    <input type="text" className="form-control" id="password" placeholder="Password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{marginTop: '10vw'}}>
                                                <div className="text-right">
                                                    <button type="button" id="submit" name="submit" className="btn btn-info" style={{color: 'white'}}>Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}