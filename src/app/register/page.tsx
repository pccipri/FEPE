'use client'

import Image from 'next/image'

export default function Register() {
    return (
      <>
      <div style={{ width: '100%', height: '100%' }}>
        <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
          <div className="text-center text-lg-start">
            <div className="container-sm container-fluid rounded formContainer bg-body" style={{ flexDirection: 'row', width: '73vw', height: '57vw' }}>

              <div>
                <h5 style={{ textAlign: 'center', color: '#0dcaf0' }}>Welcome to Pharma Ease!</h5>
                <p style={{ textAlign: 'center', color: '#0dcaf0' }}>Register to make purchases</p><br/>
                <form style={{ color: 'black' }} onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp" placeholder="Username" />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm password" />
                  </div><br />
                  <button type="submit" className="btn btn-info text-white" style={{ width: '100%' }}>Register</button><br /><br />
                  <small>Already have an account? <a href="/login" className="text-primary">Log in</a>.</small>
                </form>
              </div>
              <div className="d-flex" style={{ height: '90%', marginLeft: '6vw', color: 'black' }}>
                <div className="vr"></div>
              </div>

              <div>
                <Image src="/images/register.svg" alt="Log In" width={400} height={275} style={{ marginLeft: '5vw' }} />
              </div>

            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  