"use client"

import { useAuth } from '@/contexts/AuthContext';
/* eslint-disable react/no-unescaped-entities */
import { LoginRequest } from '@/interfaces/loginRequest';
import { loginUser } from '@/services/authService';
import Image from 'next/image'
import { useState } from 'react';

export default function Login() {
  const [loginUserInfo, setLoginUserInfo] = useState<LoginRequest>({
    email: "",
    password: ""
  })
  const { initializeStorage } = useAuth();

  const handleInputChange = (event: { target: { name: string; value: any }; }) => {
    const { name, value } = event.target;
    setLoginUserInfo({ ...loginUserInfo, [name]: value });
  };

  const login = async () => {
    try {
      const response = await loginUser(loginUserInfo);
      if (response['token']) {
        initializeStorage({
          token: response["token"],
          tokenExpirationDate: new Date(),
          email: loginUserInfo.email
        })
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
            <div className="container-sm container-fluid rounded formContainer bg-body" style={{ flexDirection: 'row', width: '70vw', height: '38vw' }}>

              <div>
                <h4 style={{ textAlign: 'center', color: '#0dcaf0' }}>Welcome back!</h4>
                <p style={{ textAlign: 'center', color: '#0dcaf0' }}>Log In to your account</p>
                <form onSubmit={(e) => e.preventDefault()} style={{ color: 'black' }}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={loginUserInfo.email} name="email" onChange={handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                  </div><br />
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={loginUserInfo.password} name="password" onChange={handleInputChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div><br />
                  <button type="submit" onClick={() => login()} className="btn btn-info text-white" style={{ width: '100%' }}>Log In</button><br /><br />
                  <small>Don't have an account? <a href="/register" className="text-primary">Register</a>.</small>
                </form>
              </div>
              <div className="d-flex" style={{ height: '90%', marginLeft: '6vw', color: 'black' }}>
                <div className="vr"></div>
              </div>

              <div>
                <Image src="/images/login.svg" alt="Log In" width={400} height={200} style={{ marginLeft: '5vw' }} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
