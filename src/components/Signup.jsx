/* eslint-disable no-unused-vars */
import React from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    let history = useHistory(); 

    const handleClick=() => {
      alert("You are Signed up, Successfully Now redirecting to Home page");
      history.push('/'); 
    };
  return (
    <section className="">
      <div
        className="px-4 py-5 px-md-5 text-center text-lg-start"
        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
      >
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                PROJECT MANAGEMENT <br />
                <span className="text-primary">TOOL</span>
              </h1>
              <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
              A Project Management Tool is a software application designed to help teams and individuals plan, organize, track, and collaborate on projects efficiently. It streamlines workflows, improves productivity, and ensures projects are completed on time and within budget.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example33"
                      />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleClick}>
                      Sign up
                    </button>


                     
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
