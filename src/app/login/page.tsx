/* eslint-disable react/no-unescaped-entities */
export default function Login() {
  return (
    <>
      <div className="container-sm container-fluid rounded formContainer">
        <h4>Welcome back!</h4>
        <p>Log In to your account</p>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div><br/>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div><br/>
          <button type="submit" className="btn btn-primary">Log In</button><br/><br/>
          <small>Don't have an account? <a href="/register" className="text-primary">Register</a>.</small>
        </form>
      </div>
    </>
  )
}
