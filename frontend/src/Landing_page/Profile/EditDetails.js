import React from "react";

function EditDetails() {
  return (
    <div className="container">
      <div className="row m-5">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
      <div className="row m-5">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
      <div className="row m-5">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Bio"
            aria-label="Bio"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
    </div>
  );
}

export default EditDetails;
