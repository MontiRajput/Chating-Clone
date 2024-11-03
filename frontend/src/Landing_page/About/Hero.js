import React from "react";

function Hero() {
  return (
    <div className="container all-frontend-hero-con">
      <div className="row mt-5 p-5">
        <div className="col-5">
          <h1>About</h1>
          <p className="text-muted">
            A message is a discrete unit of communication intended by the source
            for consumption by some recipient or group of recipients. A message
            may be delivered by various means, including courier, telegraphy, or
            an electronic bus. A message can be the content of a broadcast. An
            interactive exchange of messages forms a conversation.[1] The
            consumption of the message relies on how the recipient interprets
            the message, there are times where the recipient contradicts the
            intention of the message which results in a boomerang effect. [2]
            Message fatigue is another outcome recipients can obtain if a
            message is conveyed too much by the source.{" "}
          </p>
        </div>
        <div className="col-7 p-5">
          <div className="row p-4">
            <div className="col-4">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="col-8">
                <h3>1st <span>User</span></h3>
                <p>First user send message to second user ..</p>
                <p></p>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-4">
              <i class="fa-solid fa-lock"></i>
            </div>
            <div className="col-8">
                <h3>Encrypt Your Data</h3>
                <p>It safe your data in Encrypt form and safe from attackers</p>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-4">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="col-8">
            <h3>2nd <span>User</span></h3>
            <p>Receviers receives message without any Encrypt type message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
