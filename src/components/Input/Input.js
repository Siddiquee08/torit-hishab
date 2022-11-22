import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <>
      <form>
        <div className="form">
          <div className="hero mt-3">
            <div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        ব্যবহৃত ইউনিট/ইলেক্ট্রিক যন্ত্রটির ওয়াট রেটিং
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="ওয়াট"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">কতক্ষণ চলে</span>
                    </label>
                    <input
                      type="text"
                      placeholder="ঘন্টা"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary bg-blue-400 border-none text-end">
                      হিসাব
                    </button>
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
