import React from "react";

function Year() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-5 chat-left">
            <img
              src="media/images/chating.png"
              className="chat-left"
              width="60%"
            />
          </div>
          <div className="col-md-6 ">
            <h1 className="home_head">Trusted for Many Years</h1>
            <p className="home_phra ">
              Ever wonder why a child laughs with pure joy when you lift them
              high, or why a pet rushes to greet you with boundless affection?
              <br></br>{" "}
              <img
                src="media/images/chating.png"
                className="chat-right "
                width="60%"
              />
              <br></br>
              It’s trust—the bond built from the moment we connect, one that
              brings comfort, love, and strength. Whether it’s the deep
              friendship that shares secrets or a parent’s confidence as their
              child ventures into the world, these connections shape us, giving
              us the courage to soar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Year;
