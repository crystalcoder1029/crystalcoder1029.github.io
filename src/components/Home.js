import React, { Fragment } from 'react'
export const tempname = "JACK R. LITTON" 
export const companyname1 = "Deloitte";
export const com_period1 = "August 2020 - January 2023";
export const company1_role = "Sr.Full-stack developer";
export const company1_location = "";
export const companyname2 = "Randstad Technologies";
export const com_period2 = "June 2019 - August 2020";
export const company2_role = "Jr.Full-Stack developer";
export const company2_location = "";
export const edu_role = "BS- Computer Science ";
export const edu_role_period = "September 2015 - June 2019";
export const edu_school = "University of Verginia";
export const profile_url = "";
function Home() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 

            <div className="container">

              <div className="row">

                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                  <div>
                    <h1 className="m-0 font-big slide-in-top">Hi,my site visitors,</h1>
                    <h1 className="m-0 font-big animate-charcter">I'm {tempname},</h1>
                    <p className="ls-2 mt-2 slide-in-bottom">Full Stack Developer</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img className="img-fluid" src="../images/nomad-bro.png" alt="..."></img>
                </div>

              </div>

            </div>
            
        </div>
    </Fragment>
  )
}

export default Home