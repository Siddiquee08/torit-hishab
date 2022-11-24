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
    const unit = (watt * hour) / 1000;
    const moneyFloat = (unit * 24 * 0.7 * 7).toFixed(2);
    const money = Math.ceil(moneyFloat);
    const deviationRate = Math.ceil(money * 0.14);
    setBill(money);
    setDeviation(deviationRate);
  };
  const downUnder = () => {
    window.scrollTo(0, document.body.scrollHeight);
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
                      type="tel"
                      placeholder="ওয়াট"
                      name="watt"
                      className="input input-bordered rounded-none text-center text-2xl"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">দৈনিক কতক্ষণ চলে?</span>
                    </label>
                    <input
                      type="tel"
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
                      onClick={downUnder}
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
          <span>ইলেক্ট্রিক যন্ত্রটি্র সম্ভাব্য মাসিক খরচ</span>
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
