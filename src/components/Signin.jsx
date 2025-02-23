/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import { useHistory } from "react-router-dom"; // ✅ Import useHistory

const Signin = () => {
  const history = useHistory();
  const [role, setRole] = useState("");
  // Internal CSS styles
  const styles = {
    hCustom: {
      height: "calc(100% - 73px)",
    },
  };

  // Function to handle login
  const handleLogin = () => {
    if (role === "Admin") {
      alert("🎉 Successfully logged in as Admin!");
    } else if (role === "Member") {
      alert("🎉 Successfully logged in!");
    } else {
      alert("⚠️ Please select a role before logging in!");
      return;
    }
    history.push("/"); // ✅ Redirect to home page
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid" style={styles.hCustom}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="email" className="form-control form-control-lg" placeholder="Enter email" />
                  <label className="form-label" htmlFor="email">Email address</label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <input type="password" id="password" className="form-control form-control-lg" placeholder="Enter password" />
                  <label className="form-label" htmlFor="password">Password</label>
                </div>

                {/* Admin or Member Selection */}
                <div className="admin">
                  <input
                    type="radio"
                    id="admin"
                    name="role"
                    value="Admin"
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="admin" style={{ marginRight: "20px" }}>Admin</label>

                  <input
                    type="radio"
                    id="member"
                    name="role"
                    value="Member"
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="member">Member</label>
                </div>
                

                {/* Login Button */}
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg" onClick={handleLogin}>
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Dont have an account? <a href="/signup" className="link-danger">Sign Up</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
