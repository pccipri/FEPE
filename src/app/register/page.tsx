"use client"

import { RegisterRequest } from '@/interfaces/registerRequest'
import { registerUser } from '@/services/authService';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Register() {
  const router = useRouter();
  const [newUserInfo, setNewUserInfo] = useState<RegisterRequest>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: ""
  })
  const [verificationPassword, setVerificationPassword] = useState<string>('');

  const handleInputChange = (event: { target: { name: string; value: any }; }) => {
    const { name, value } = event.target;
    setNewUserInfo({ ...newUserInfo, [name]: value });
  };

  const handleVerificationPasswordInputChange = (event: { target: { name: string; value: any }; }) => {
    const { name, value } = event.target;
    setVerificationPassword(value);
  };

  const addNewUser = async () => {
    try {
      const response = await registerUser(newUserInfo);
      if (response['token']) {
        router.push('/login')
      }

    } catch (error) {
      console.log(error);

    }
  }


  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <div className="row align-items-center g-lg-5 py-5 rounded containerBg">
          <div className="text-center text-lg-start">
            <div className="container-sm container-fluid rounded formContainer bg-body" style={{ flexDirection: 'row', width: '73vw', height: '57vw' }}>

              <div>
                <h5 style={{ textAlign: 'center', color: '#0dcaf0' }}>Welcome to Pharma Ease!</h5>
                <p style={{ textAlign: 'center', color: '#0dcaf0' }}>Register to make purchases</p><br />
                <form onSubmit={(e) => e.preventDefault()} style={{ color: 'black' }}>
                  <div className="form-group">
                    <label htmlFor="exampleInputFirstName">First Name</label>
                    <input type="text" value={newUserInfo.firstName} name="firstName" onChange={handleInputChange} className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="First Name" />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="exampleInputLastName">Last Name</label>
                    <input type="text" value={newUserInfo.lastName} name="lastName" onChange={handleInputChange} className="form-control" id="exampleInputLastName" aria-describedby="emailHelp" placeholder="Last Name" />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Phone Number</label>
                    <input type="tel" value={newUserInfo.phoneNumber} name="phoneNumber" onChange={handleInputChange} className="form-control" id="exampleInputPhoneNumber" aria-describedby="emailHelp" placeholder="Phone Number" />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={newUserInfo.email} name="email" onChange={handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={newUserInfo.password} name="password" onChange={handleInputChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm password</label>
                    <input type="password" value={verificationPassword} onChange={handleVerificationPasswordInputChange} className="form-control" id="exampleInputConfirmPassword" placeholder="Confirm password" />
                  </div><br />
                  <button type="submit" onClick={addNewUser} className="btn btn-info text-white" style={{ width: '100%' }}>Register</button><br /><br />
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
