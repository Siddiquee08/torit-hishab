import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [bill, setBill] = useState(0)
  const submitForm = (event) => {
    event.preventDefault()
   const form = event.target
   const watt = parseFloat(form.watt.value)
   const hour = parseFloat(form.hour.value)
   const unit = (watt * hour * 0.8) / 1000
   const money = (unit * 24 * 0.7 * 10.3).toFixed(2)
   setBill(money)
   form.reset()
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <div className="form">
          <div className="hero mt-3">
            <div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        ব্যবহৃত ইলেক্ট্রিক যন্ত্রটির ওয়াট রেটিং
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="ওয়াট"
                      name="watt"
                      className="input input-bordered text-center"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">কতক্ষণ চলে</span>
                    </label>
                    <input
                      type="text"
                      placeholder="ঘন্টা"
                      name="hour"
                      className="input input-bordered text-center"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">আপনার সম্ভাব্য মাসিক বিল হলো, টাকাঃ</span>
                    </label>
                    <input type="text" value={bill} className="input input-bordered text-center" />
                  </div>
                  <div className="form-control mt-6">
                  <input type="submit" value="হিসাব" className="btn btn-primary bg-blue-400 border-none text-end" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Input;
