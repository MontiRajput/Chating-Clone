import React from "react";

function Hero() {
  return (
    <div className="container support-hero all-frontend-hero-con">
      <div className="row p-5 d-flex justify-content-center ">
        <div className="col-6 query-form p-4">
          <h1 className="text-center">Query Form.</h1>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Type Your Query
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div className="row d-flex justify-content-center">
          <div className="col-6 text-center"><button type="button" class="btn btn-danger mt-3">Submit</button></div>
          </div>
        </div>
      </div>
      <p className="text-center text-muted mt-4">
        If you have any kind of problem then write your problem in this form and
        send it to me.
      </p>
    </div>
  );
}

export default Hero;
