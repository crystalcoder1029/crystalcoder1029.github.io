import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='m-5 font-small animate-charcter'>Ambitious full-stack developer,<br></br> a self-led learner and team player,  <br></br>
                            Full-stack web developer, <br></br></p>
                            <p className='slide-in-bottom'>with 6+years of experience that involve Backend Technologies 
                            using MERN stack, Laravel MVC framework, Django Python Web framework, Serverless architecture that contains AWS technology and Blockchain.
                            </p>
                            <p className='slide-in-bottom'>
                                Best Site<br></br>
                                In 2020 : <span className="ls-2">With 8 other developers I developed a great, large-scale site (<a href="https://heliasoils.com/"><span className="text-green ls-2">https://heliasoils.com/</span></a>) that has a smart theme design, related Shopify 
                                features and through that project I made great process. </span>
                            </p>
                            <p className='slide-in-bottom'>
                                Currently Learning ChatGPT, OpenAI and other Web AI technolgies
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About