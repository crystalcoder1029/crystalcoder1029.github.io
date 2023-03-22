import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';
import { 
    tempname,
    com_period1,
    com_period2,
    companyname1,
    companyname2,
    company1_role,
    company2_role,
    company1_location,
    company2_location,
    edu_role,
    edu_role_period,
    edu_school,
    profile_url
} 
    from './Home';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">{tempname}</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">{company2_role}</h4>
                                <h6 className="blue-label px-2 py-1">{com_period2}</h6>
                                <p className="m-0">{companyname2} · Full-time</p>
                                <p>{company2_location}</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">{company1_role}</h4>
                                <h6 className="blue-label px-2 py-1">{com_period1}</h6>
                                <p className="m-0">{companyname1} · Internship</p>
                                <p>{company1_location}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">{edu_role}</h4>
                                <h6 className="blue-label px-2 py-1">{edu_role_period}</h6>
                                <p className="m-0">{edu_school}</p>
                                <p>CGPA: 8.05</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2017</h6>
                                <p className="m-0">Shree B.M.Commerce High School</p>
                                <p>Grade: 71.69 %</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href={profile_url} target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodechef className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume