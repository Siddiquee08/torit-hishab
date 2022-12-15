import React, { useState } from "react";
import "./Input.css";

const Input = () => {
  const [userInfo, setUserInfo] = useState({
    watt: "",
    hour: "",
  });

  const [bill, setBill] = useState(0);
  const [deviation, setDeviation] = useState(0);
  const [errorWatt, setErrorWatt] = useState("");
  const [error, setError] = useState("");

  const handleWatt = (e) => {
    const watt = e.target.value;
    if (!/^[0-9]*$/.test(watt)) {
      return setErrorWatt("Please enter numbers only");
    } else {
      setUserInfo({ ...userInfo, watt: e.target.value });
      setErrorWatt("");
    }
  };
  const handleHour = (e) => {
    const hour = e.target.value;
    if (/^[0-9]*$/.test(hour)) {
      if (hour <= 24) {
        setUserInfo({ ...userInfo, hour: hour });
        setError("");
      }
    } else {
      return setError("Please enter valid characters/numbers");
    }
  };
  const downUnder = (event) => {
    event.preventDefault();
    const watt = parseFloat(userInfo.watt);
    const hour = parseFloat(userInfo.hour);
    const unit = (watt * hour) / 1000;
    const moneyFloat = (unit * 24 * 0.7 * 7).toFixed(2);
    const money = Math.ceil(moneyFloat);
    const deviationRate = Math.ceil(money * 0.14);
    setBill(money);
    setDeviation(deviationRate);
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <>
      <form>
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
                      className="input input-bordered rounded-none text-center text-2xl"
                      required
                      value={userInfo.watt}
                      onChange={handleWatt}
                    />
                  </div>
                  <p className="text-orange-400">{errorWatt}</p>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">দৈনিক কতক্ষণ চলে?</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="ঘন্টা"
                      className="input input-bordered  rounded-none text-center text text-2xl"
                      value={userInfo.hour}
                      onChange={handleHour}
                      required
                    />
                  </div>
                  <p className="text-orange-400">{error}</p>
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
