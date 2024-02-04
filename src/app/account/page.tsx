'use client';

import { useEffect, useState } from 'react';
import PersonalDetails from './components/PersonalDetails'
import YourOrders from './components/YourOrders'

export default function Account() {
 const [selectedTab, setSelectedTab] = useState<'personalDetails' | 'yourOrders'>('personalDetails');

 useEffect(() => {
    console.log(selectedTab);
    
 }, [selectedTab])

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
                                                <h4 className="user-name text-info">Full Name</h4>
                                            </div>
                                            <div className="about" style={{marginTop: '2vw'}}>
                                                <ul className="list-group list-group-flush flex-column">
                                                    <button className="list-group-item list-group-item-action border-top" onClick={(e) => {setSelectedTab('personalDetails')}}>
                                                        <a className="nav-link text-dark active" aria-current="page" href="#">Account details</a>
                                                    </button>
                                                    <button className="list-group-item list-group-item-action border-bottom" onClick={(e) => {setSelectedTab('yourOrders')}}>
                                                        <a className="nav-link text-dark" href="#">Your orders</a>
                                                    </button>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                <div className="card h-100">
                                    <PersonalDetails currentTab={selectedTab}/>
                                    <YourOrders currentTab={selectedTab}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}