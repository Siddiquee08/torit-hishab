import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [bill, setBill] = useState(0);
  const [deviation, setDeviation] = useState(0);
  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const watt = parseFloat(form.watt.value);
    const hour = parseFloat(form.hour.value);
    const unit = (watt * hour * 0.8) / 1000;
    const moneyFloat = (unit * 24 * 0.7 * 9).toFixed(2);
    const money = Math.ceil(moneyFloat);
    const deviationRate = Math.ceil(money * 0.13);
    setBill(money);
    setDeviation(deviationRate);
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <div className="form">
          <div className="hero -mt-3">
            <div>
              <div className="card flex-shrink-0 w-full max-w-sm">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        ব্যবহৃত ইলেক্ট্রিক যন্ত্রটি কত ওয়াটের?
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="ওয়াট"
                      name="watt"
                      className="input input-bordered rounded-none text-center text-2xl"
                      style={{ fontWeight: "900" }}
                      required
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
                      className="input input-bordered  rounded-none text-center text text-2xl"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="হিসাব"
                      className="btn rounded-none btn-primary submit border-none text-end text text-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="money-input mt-5">
        <p className="bill-text">
          <span>আপনার সম্ভাব্য মাসিক বিল হলো</span>
        </p>
        <div className="bill-container p-3">
          <p className="text-white">
            <span className="text-xl">{bill} Taka</span>
          </p>
          <p className="text-white">(± {deviation} Taka)</p>
        </div>
      </div>
    </>
  );
};

export default Input;
