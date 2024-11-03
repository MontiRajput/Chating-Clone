import React from "react";

function Hero() {
  return (
    <>
      <div className="container all-frontend-hero-con pt-5 pt-md-0">
        <div className="row py-5">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 className="home_head">SoulMitra</h1>
            <p className="home_phra px-5 m-0">____friend of the soul</p>
            <p className="home_phra" style={{}}>
              Welcome to a secure space for meaningful connections through chat
              and video calls. We understand the importance of your privacy in
              today’s digital world. Trust us to safeguard your data every step
              of the way. Sign up now to experience our robust features and see
              for yourself!
            </p>
          </div>
          <div className="col-md-6 p-5 d-flex justify-content-center">
            <img src="media/images/pngwing.com.png" style={{ width: "50%" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
