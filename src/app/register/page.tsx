export default function Register() {
    return (
      <>
        <div className="container-sm container-fluid rounded formContainer" style={{height: '125vh', width: '40vw'}}>
          <h4>Welcome to Pharma Ease!</h4>
          <p>Register to make purchases</p>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
            </div><br/>
            <div className="form-group">
              <label htmlFor="exampleInputUsername1">Username</label>
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Username" />
            </div><br/>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div><br/>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div><br/>
            <button type="submit" className="btn btn-primary">Register</button><br/><br/>
            <small>Already have an account? <a href="#" className="text-primary">Log in</a>.</small>
          </form>
        </div>
      </>
    )
  }
  