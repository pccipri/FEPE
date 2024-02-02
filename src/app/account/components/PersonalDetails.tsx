// dai ca si props o variabila care va fi un string cand stringul ii egal cu personalDetails se va afisa componenta altfel nemtudom

interface PersonalDetailsProps {
  currentTab: string;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ currentTab }) => {
  return (
    currentTab === 'personalDetails' ?

      <div className="card-body">
        <div className="row gutters">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h5 className="mb-2 text-info">Personal Details</h5>
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
            <div className="form-group" style={{ marginTop: '1vw' }}>
              <label htmlFor="eMail">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group" style={{ marginTop: '1vw', marginBottom: '3vw' }}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Phone Number" />
            </div>
          </div>
        </div>
        <hr className="featurette-divider text-info" />
        <div className="row gutters">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ marginTop: '1vw' }}>
            <h5 className="mt-3 mb-2 text-info">Change password</h5>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <label htmlFor="ciTy">Old Password</label>
              <input type="text" className="form-control" id="OldPassword" placeholder="Password" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <label htmlFor="ciTy">New Password</label>
              <input type="text" className="form-control" id="NewPassword" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="row gutters">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ marginTop: '5vw' }}>
            <div className="text-right">
              <button type="button" id="submit" name="submit" className="btn btn-info" style={{ color: 'white' }}>Update</button>
            </div>
          </div>
        </div>
      </div>

      : null
  )
};

export default PersonalDetails;