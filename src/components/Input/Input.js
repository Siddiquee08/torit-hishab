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
   const money = (unit * 24 * 0.7 * 9).toFixed(2)
   setBill(money)
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
                  <div className="form-control mt-6">
                  <input type="submit" value="হিসাব" className="btn btn-primary bg-blue-400 border-none text-end" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="money-input mt-5">
        <p className="text-blue-400"><span className="bill-text">আপনার সম্ভাব্য মাসিক বিল হলো (±)</span></p>
        <div className="bg-blue-400 bill-container">
        <p className="text-white text-xl p-4">{bill} Taka.</p>
        </div>
      </div>
    </>
  );
};

export default Input;
