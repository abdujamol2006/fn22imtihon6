import React from "react";

function FormInput({ label, type, name }) {
  return (
    <div>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text capitalize">{label}</span>
        </div>
        <input
          type={type}
          name={name}
          placeholder="Type here"
          className="input input-bordered w-full "
        />
      </label>
    </div>
  );
}

export default FormInput;
