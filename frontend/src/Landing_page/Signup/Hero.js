import React from "react";

function Hero() {
  return (
    <div className="container p-5 all-frontend-hero-con">
      <div className="row d-flex justify-content-center ">
        <div className="col-4 form-box">
          <h1 className="text-center">Signup</h1>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <h6 className="text-muted">Select Your Gender</h6>
            <div className="d-flex justify-content-evenly mt-3 mb-3">
              <select
                class="form-select form-select-sm"
                aria-label="Large select example"
              >
                <option selected>Select</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>
            <div className="mt-4 d-flex justify-content-evenly">
              <a href="/login" className="btn-link">
                Already a user
              </a>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button type="button" class="btn btn-warning">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
